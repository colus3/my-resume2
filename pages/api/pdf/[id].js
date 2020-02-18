import React from 'react';
import puppeteer from 'puppeteer';
import moment from 'moment';
import absoluteUrl from 'next-absolute-url';

const Doc = async (req, res) => {
  const { origin } = absoluteUrl(req);
  const browser = await puppeteer.launch({
    defaultViewport: { width: 1024, height: 768 }
  });
  const page = await browser.newPage();
  await page.goto(`${origin}/${req.query.id}`);
  const pdf = await page.pdf({
    scale: 0.73,
    format: 'A4',
    printBackground: true,
    path: `./pdf/${req.query.name}(${req.query.id})_${moment().format('YYYYMMDD')}.pdf`,
    margin: {top: '50px', right: '10px', bottom: '50px', left: '10px'}});
  await browser.close();
  const filename = req.query.name;
  res.setHeader("Content-Disposition", `attachment;filename=${filename};`);
  res.status(200).send(pdf);
};

export default Doc;
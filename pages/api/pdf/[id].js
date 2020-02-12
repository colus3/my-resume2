import React from 'react';
import puppeteer from "puppeteer";

const Doc = async (req, res) => {
  const browser = await puppeteer.launch({
    defaultViewport: { width: 1024, height: 768 }
  });
  const page = await browser.newPage();
  await page.goto(`http://local.programmeris.me:3000/${req.query.id}`);
  const pdf = await page.pdf({
    scale: 0.75,
    format: 'A4',
    printBackground: true,
    path: 'test.pdf' });
  await browser.close();
  const filename = req.query.name;
  res.setHeader("Content-Disposition", `attachment;filename=${filename};`);
  res.status(200).send(pdf);
};

export default Doc;
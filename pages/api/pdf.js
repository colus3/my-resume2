import React from 'react';
import puppeteer from 'puppeteer';

const Pdf = async (req, res) => {
  const resumeId = req.query.id;
  const browser = await puppeteer.launch({
    defaultViewport: { width : 1024, height : 768 }
  });
  const page = await browser.newPage();
  await page.goto(`http://local.programmeris.me:3000/${resumeId}`);
  const pdf = await page.pdf({ format: 'A4', path: 'test.pdf' });
  await browser.close();

  res.status(200).send(pdf);
};

export default Pdf;
import React from 'react';
import puppeteer from 'puppeteer';
import moment from 'moment';

const Doc = async (req, res) => {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium-browser',
    args: ['--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage'],
    defaultViewport: { width: 1024, height: 1366 },
  });
  const page = await browser.newPage();
  // const resumeUrl = `${process.env.RESUME_URL}/${req.query.id}`;
  const resumeUrl = 'https://myresume.kr/1fdb0027-b638-4ba3-aafb-59ae9a6866f9';
  console.log(`resume url : ${resumeUrl}`);
  const response = await page.goto(resumeUrl);
  console.log('cache : ', response.fromCache());
  const pdf = await page.pdf({
    scale: 0.8,
    format: 'A4',
    printBackground: true,
    path: `/tmp/${req.query.name}(${req.query.id})_${moment().format('YYYYMMDDHHmmssSSS')}.pdf`,
    margin: {top: '50px', right: '10px', bottom: '20px', left: '10px'}});
  await browser.close();
  console.log('pdf', pdf);
  const username = req.query.name;
  res.setHeader("Content-Disposition", `attachment;filename=${username}.pdf;`);
  res.status(200).send(pdf);
};

export default Doc;
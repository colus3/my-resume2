import React from 'react';
import puppeteer from 'puppeteer';
import moment from 'moment';
import AWS from 'aws-sdk';

const Doc = async (req, res) => {
  const s3 = new AWS.S3({
    credentials: {
      accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
      region: 'ap-northeast-2',
    }
  });
  const bucketName = 'myresume2';
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium-browser',
    args: ['--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage'],
    defaultViewport: { width: 1024, height: 1366 },
  });
  const page = await browser.newPage();
  const resumeUrl = `${process.env.RESUME_URL}/${req.query.id}`;
  const response = await page.goto(resumeUrl);
  console.log('cache : ', response.fromCache());
  console.info('x-forwarded-for : ', req.headers['x-forwarded-for']);
  console.info('x-real-ip', req.headers['x-real-ip']);
  const pdfFilename = `${req.query.name}(${req.query.id})_${moment().format('YYYYMMDDHHmmssSSS')}.pdf`;
  const pdf = await page.pdf({
    scale: 0.8,
    format: 'A4',
    printBackground: true,
    path: `/tmp/${pdfFilename}`,
    margin: {top: '50px', right: '10px', bottom: '20px', left: '10px'}});
  await browser.close();
  const base64data = Buffer.from(pdf).toString('base64');
  const params = {
    Bucket: bucketName,
    ACL: 'public-read',
    Body: base64data,
    Key: `pdf/${pdfFilename}`,
  };
  await s3.putObject(params).promise();
  const username = req.query.name;
  res.setHeader("Content-Disposition", `attachment;filename=${username}.pdf;`);
  res.status(200).send(pdf);
};

export default Doc;
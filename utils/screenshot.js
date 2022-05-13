const puppeteer = require("puppeteer");

module.exports = screenshot = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const timestamp = Date.now();
  const name = url.split(".")[1];
  const fileName = `${name.slice(0, 3)}${timestamp}.png`;
  console.log("Se genera nombre", fileName);
  await page.goto(url);

  page.setViewport({ width: 1300, height: 800, deviceScaleFactor: 1 });
  await page.screenshot({ path: fileName });
  await browser.close();
  return fileName;
};

const puppeteer = require("puppeteer");
const download = require("image-downloader");
const fs = require("fs");
const { writeProductInfoList } = require("./utils/writeProductInfoList.js");
const { writeProductImages } = require("./utils/writeProductImages.js");

const crawlObject = async ({
  url = "https://shopee.vn/mall/M%C3%A1y-t%C3%ADnh-Laptop-cat.11035954",
  dirname = "data",
}) => {
  const path = `${__dirname}/${dirname}`;
  const browser = await puppeteer.launch({ headless: false });
  console.log("Browser opened");

  const page = await browser.newPage();

  await page.goto(url);
  console.log("Page loaded");

  // Delay for 12 seconds after open the browser
  await new Promise((resolve) => setTimeout(resolve, 12000));

  const productInfoList = await page.evaluate(() => {
    const productList = [];

    const imageElements = document.querySelectorAll(".ce-KUr.TSbeUU > img");
    const nameElements = document.querySelectorAll(".NSmi1s.ZFEVCt.yGf1aF");
    const originPriceElements = document.querySelectorAll(
      ".eiDxf5 > .QgvZXB.E4pHTy"
    );
    const priceElements = document.querySelectorAll(".oT6dtr");
    const sellNumberElements = document.querySelectorAll(".WW2wcS.JYuXvd");
    const locationElements = document.querySelectorAll(".LqcOrK");

    for (let i = 0; i < nameElements.length; i++) {
      const img = imageElements[i];
      const src = img ? img.getAttribute("src") : "";

      const name = nameElements[i] ? nameElements[i].textContent : "";
      const price = priceElements[i] ? priceElements[i].textContent : "";
      const originPrice = originPriceElements[i]
        ? originPriceElements[i].textContent
        : "";
      const sellNumber = sellNumberElements[i]
        ? sellNumberElements[i].textContent
        : "";
      const location = locationElements[i]
        ? locationElements[i].textContent
        : "";

      productList.push({
        id: i,
        image: src,
        name,
        originPrice,
        price,
        sellNumber,
        location,
      });
    }

    return productList;
  });
  console.log("Product Information List:", productInfoList);

  // Save productInfoList to data.js
  writeProductInfoList(productInfoList, path);

  // Create the "images" folder if it doesn't exist
  writeProductImages(productInfoList, path);

  await browser.close();
};

module.exports = { crawlObject };

const puppeteer = require("puppeteer");
const download = require("image-downloader");

const crawlImage = async ({
  url = "https://kenh14.vn/ai-roi-cung-khac-cac-hot-girl-nay-cung-khong-ngoai-le-khi-vong-1-cu-ngay-cang-phong-phao-20171207193958533.chn",
  dirname = `${__dirname}/${dirname}`,
}) => {
  const browser = await puppeteer.launch({ headless: false });

  console.log("Browser opened");
  const page = await browser.newPage();
  await page.goto(url);
  console.log("Page loaded");

  const imgLinks = await page.evaluate(() => {
    let imgElements = document.querySelectorAll(
      ".kbwc-cover img, .LayoutAlbumWrapper img, .detail-img-lightbox > img"
    );
    imgElements = [...imgElements];
    let imgLinks = imgElements.map((i) => i.getAttribute("src"));
    return imgLinks;
  });

  // Tải các ảnh này về thư mục "data" trong thư mục hiện tại
  await Promise.all(
    imgLinks.map((imgUrl, index) =>
      download.image({
        url: imgUrl,
        dest: `${dirname}/image${index + 1}.jpg`, // Use a unique filename for each image
      })
    )
  );

  await browser.close();
};

module.exports = { crawlImage };

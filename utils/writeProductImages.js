const download = require("image-downloader");
const fs = require("fs");

const writeProductImages = async (productInfoList, path) => {
  if (!fs.existsSync(`${path}/images`)) {
    fs.mkdirSync(`${path}/images`);
  }

  await Promise.all(
    productInfoList.map(async (product, index) => {
      const imageUrl = product.image;
      const imageFilename = `${path}/images/image${index + 1}.jpg`;

      if (imageUrl) {
        await download.image({
          url: imageUrl,
          dest: imageFilename,
        });

        console.log(`Image ${index + 1} downloaded`);
      }
    })
  );
};

module.exports = {
  writeProductImages,
};

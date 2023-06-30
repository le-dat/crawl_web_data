const fs = require("fs");

const writeProductInfoList = (productInfoList, path) => {
  const data = `const productData = ${JSON.stringify(
    productInfoList,
    null,
    2
  )};\n\nmodule.exports = productData;`;

  fs.writeFile(`${path}/index.js`, data, (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log(`Product information saved to ${path}/index.js`);
    }
  });
};

module.exports = {
  writeProductInfoList,
};

const CustomError = require("../extensions/custom-error");
module.exports = function countCats(backyard) {
  let cat = 0;
  for (let i = 0; i < backyard.length; i++) {
   
    backyard[i].map((item) => {
      if (item === "^^") cat++;
    });
  }
  return cat;
};
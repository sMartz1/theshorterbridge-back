const Link = require("../models/Link");
const screenshot = require("../utils/screenshot");
const uplaodFile = require("../database/firebase");
const fs = require("fs");

const createLink = async (url, user = null) => {
  const image = await screenshot(url);
  const path = `./${image}`;
  const upload = await uplaodFile(`./${image}`, image);
  const values =
    user !== null
      ? {
          url,
          screenshot: upload,
          user,
        }
      : { url, screenshot: upload };
  const record = new Link(values);
  //Remove local image
  fs.unlink(path, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Se elimina ',path);
  });
   return record.save()
};

const getLink = async short =>{
    const data = await Link.findOne({
        shortUrl:short
    })
    return data
}


module.exports = {
  createLink,
  getLink
};

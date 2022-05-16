const Link = require("../models/Link");
const screenshot = require("../utils/screenshot");
const uplaodFile = require("../database/firebase");
const fs = require("fs");
const { nanoid } = require('nanoid');

const createLink = async (url, user = null) => {
  const image = await screenshot(url);
  const path = `./${image}`;
  const upload = await uplaodFile(`./${image}`, image);
  const shortUrl = nanoid(7)
  const values =
    user !== null
      ? {
          url,
          screenshot: upload,
          user,
          shortUrl
        }
      : { url, screenshot: upload,shortUrl };
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
    });
    if(data !== null){
      data.views++;
      await data.save();
      return data
    }
      return data    
}

const getLinks = async uid => {
   return Link.find({user:uid})
   
}

module.exports = {
  createLink,
  getLink,
  getLinks
};

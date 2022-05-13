const {createLink} = require('../../Managers/linkManager');

async function postUrl(req, res) {
    const link = await createLink(req.body.url)
    res.status(200).json(link.shortUrl);
  }
  
  module.exports = postUrl;
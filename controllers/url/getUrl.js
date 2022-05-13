const {getLink} = require('../../Managers/linkManager');

async function postUrl(req, res) {
    const link = await getLink(req.params.short)
    res.status(200).json(link.url);
  }
  
  module.exports = postUrl;
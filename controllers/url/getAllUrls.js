const {getLinks} = require('../../Managers/linkManager');

async function getAllUrls(req, res) {
    
    const links = await getLinks(req.params.uid);
    res.status(200).json(links)
    
  }
  
  module.exports = getAllUrls;
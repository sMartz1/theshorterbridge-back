const {getLink} = require('../../Managers/linkManager');

async function getUrl(req, res) {
    const link = await getLink(req.params.short)
    if(link !== null){res.status(200).json(link.url);}else{
      res.status(404).json("not found")
    }
    
    
  }
  
  module.exports = getUrl;
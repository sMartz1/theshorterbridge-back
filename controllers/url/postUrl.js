const {createLink} = require('../../Managers/linkManager');

async function postUrl(req, res) {
    let params = [req.body.url]
    if(req.body.user)params.push(req.body.user);
    const link = await createLink(...params);
    res.status(200).json(link);
  }
  
  module.exports = postUrl;
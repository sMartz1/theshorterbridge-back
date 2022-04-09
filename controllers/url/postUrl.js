async function postUrl(req, res) {
    console.log("postUrl controller");  
    res.status(200).json("todoOk");
  }
  
  module.exports = postUrl;
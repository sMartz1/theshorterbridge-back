const router = require("express").Router();

router.post("/short", require("../controllers/url/postUrl"))
module.exports = router;
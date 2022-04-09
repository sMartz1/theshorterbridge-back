const router = require("express").Router();

router.post("/short/:url", require("../controllers/url/postUrl"))

module.exports = router;
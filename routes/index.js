const router = require("express").Router();
router.get('/all/:uid',require('../controllers/url/getAllUrls'))
router.post("/short", require("../controllers/url/postUrl"))
router.get("/short/:short", require("../controllers/url/getUrl"));

module.exports = router;
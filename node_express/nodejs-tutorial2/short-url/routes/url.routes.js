const express = require("express");
const router = express.Router();

const {generateNewShortUrl, redirectToLongUrl , getAnalytics} = require("../controllers/url.controller");

router.post('/' , generateNewShortUrl);

router.get('/:shortId' , redirectToLongUrl);

router.get('/analytics/:shortId' , getAnalytics);

module.exports = router;
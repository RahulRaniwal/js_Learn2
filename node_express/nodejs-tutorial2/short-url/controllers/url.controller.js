
const URL = require("../models/url.model");


async function generateNewShortUrl(req ,res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "Url is required" });
  }
  // Dynamically import nanoid using await
  const { nanoid } = await import("nanoid");
  const shortId = nanoid(10);

  await URL.create({
    shortId: shortId,
    redirectUrl: body.url,
    visitHistory: [],
    createdBy: req.user._id,
  });
  return res.render('home' , {id: shortId});
  // return res.json({ id: shortId });
}

async function redirectToLongUrl(req, res) {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(

    {shortId},
    {
      $push: {
        visitHistory: {timestamp: Date.now()},
      },
    }
  );
  if (!entry) {
    return res.status(404).json({ error: "Short URL not found" });
  }
  return res.redirect(entry.redirectUrl);
}

async function getAnalytics(req , res){
  const shortId = req.params.shortId;
  const result = await URL.findOne({shortId});
  return res.json({totalClicks: result.visitHistory.length , analytics: result.visitHistory});
}


module.exports = {
  generateNewShortUrl,
  redirectToLongUrl,
  getAnalytics
};



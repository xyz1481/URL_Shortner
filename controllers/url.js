const {nanoid} = require('nanoid');
const URL = require('../modles/url');

async function handleGenerateNewShortURL (req,res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({error : 'url needed'});
    const shortID = nanoid(8);

    //interact with the database
    await URL.create ({
      shortId : shortID,
      redirectURL : body.url,
      visitHistory : [],
    })
    return res.render('home',{
      id : shortID
    })
}
//not written by me 
async function handleRedirectURL(req, res) {
  const shortId = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    },
    { new: true }
  );

  if (!entry) {
    return res.status(404).send('Short URL not found');
  }

  res.redirect(entry.redirectURL);
}
module.exports = {
  handleGenerateNewShortURL,
  handleRedirectURL,
}
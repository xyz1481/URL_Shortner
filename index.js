//only till 23 Building Nodejs auth from scratch

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8001;

const {connectToMongoDB} = require('./connect');

const URL = require('./modles/url');

const urlRoute = require('./routes/url');
const staticRoute = require('./routes/staticRouter');
const userRoute = require('./routes/user');
const {restrictToLoggedinUserOnly} = require('./middleware/auth');

app.set('view engine','ejs'); //used for server side rendering
app.set('views',path.resolve('./views'));

//middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
 

//your urls always starts form here 
app.use('/url',restrictToLoggedinUserOnly,urlRoute,);
app.use('/user',userRoute);   //your form will give /user as action then the url will become (http://localhost:8001/user)
app.use('/',staticRoute);

app.get('/test',async (req,res)=>{
  const allURLs = await URL.find({});
  return res.render('home',{
    urls : allURLs,
  });
})
//app.get('/:shortId', handleRedirectURL); // Add this route

// app.get('/:shortId',async (req,res)=>{
//   const shortId = req.params.shortId;
//   const entry = await URL.findOneAndUpdate({
//     shortId
//   },
//   {
//     $push : {
//       visitHistory : {
//         timestamp : Date.now()
//       }
//     }
//   }
// )
//    res.redirect(entry.redirectURL);
// })


// connectToMongoDB('mongodb://127.0.0.1:27017/short_url')
// .then(()=> console.log('MongoDB Connected!'));

connectToMongoDB('mongodb://127.0.0.1:27017/url').then(()=> console.log('MongoDB Connected!'));


app.listen(PORT,()=> console.log(`Server Started at ${PORT}`));
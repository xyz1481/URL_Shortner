const { v4: uuidv4 } = require('uuid');
const User = require('../modles/users');
const {setUser} = require('../service/auth');

async function handleUserSignup(req,res) {
  const { name, email, password} = req.body;
  await User.create({
    name,
    email,
    password,
  });
  return res.render('signup');  //give your html page to render after submitting the form
}

async function handleUserLogin(req,res) {
    const {email,password} = req.body;
    const user = await User.findOne({email,password});
    if(!user)
      return res.render('login',{
        error : 'Invalid User Id or Password',
      })

    // const sessionId = uuidv4();   for statefull 
    // setUser(sessionId,user);

    const token = setUser(user);
    res.cookie('uid',token);
    return res.render('home');  //can use res.redirect also
}

module.exports = {
  handleUserSignup,
  handleUserLogin,
}
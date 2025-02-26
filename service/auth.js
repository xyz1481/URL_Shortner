const jwt = require('jsonwebtoken');
const secret = 'PPJ$1234@$'

//const sessionIdToUserMap = new Map(); for statefull //just a normal map data structure used to store key value pairs

function setUser(user){
  const payload = {
    _id : user._id,
    email : user.email,
  };
  return jwt.sign(payload,secret);
  //sessionIdToUserMap.set(id,user); for statefull
}

function getUser(token){
  if (!token) {
    return null;
  }
  try {
    return jwt.verify(token,secret);
  } catch (error) {
    return null;
  }
  //return jwt.verify(token,secret);
}

module.exports = {
  setUser,
  getUser,
}
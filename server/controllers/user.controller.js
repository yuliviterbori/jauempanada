const { User } = require('../models/user.model');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SECRET_KEY = process.env.SECRET_KEY;

module.exports.register = async (req,res) => {
    try{
        const user = await User.create(req.body);
        const userToken = jwt.sign({_id:user._id}, SECRET_KEY);
        res.status(201)
        .cookie('usertoken', userToken, {httpOnly: true, expires: new Date(Date.now()+900000)})
        .json({successMessage: "Register user", user: user})
    }
    catch(err){
        res.status(400).json(err);
    }
}

module.exports.login = async (req, res) => {
  const usuario = await User.findOne({email: req?.body?.email});
  if(!usuario){
    res.status(400).json({
      error: "Email or password incorrect" 
    })
  }
  try{
    const passwordValida = await bcrypt.compare(req?.body?.password, usuario.password);
    if(!passwordValida){
      res.status(400).json({
        error: "Email or password incorrect" 
      })
    }else{
      const userToken = jwt.sign({_id:usuario._id}, SECRET_KEY);
      if(usuario.orderId){
        const orderToken = jwt.sign({_id: usuario.orderId}, SECRET_KEY);
        res.status(201)
          .cookie('usertoken', userToken, {httpOnly: true, expires: new Date(Date.now()+900000)})
          .cookie('ordertoken', orderToken, {httpOnly: true, expires: new Date(Date.now()+900000)})
          .json({successMessage: "Login user", user: usuario})
      }else{
        res.status(201)
          .cookie('usertoken', userToken, {httpOnly: true, expires: new Date(Date.now()+900000)})
          .json({successMessage: "Login user", user: usuario})
      }
      
    }

  }
  catch(err){
    res.status(400).json({
      error: "Email or password incorrect" 
    })
  }};

module.exports.checkLogin = async (req, res) =>{
  res.status(201).json({successMessage: "User connected"})
}

module.exports.logout = async (req, res) =>{
  res.clearCookie('usertoken').clearCookie('ordertoken').json({successMessage: "Logout user"})
}

module.exports.getUser = async (req, res) => {
  const { usertoken } = req.cookies;
  console.log("usertoken", usertoken);

  const decoded = jwt.verify(usertoken, SECRET_KEY);

  try{
    const usuario = await User.find({_id: decoded._id});
    res.status(201)
    .json({
      successMessage: "Usuario encontrado",
      user: usuario
    })
  }
  catch(err){
    res.status(400).json({
      error: err
    })
  }
}

module.exports.updateUser = async (req, res) => {
  const { usertoken } = req.cookies;

  const decoded = jwt.verify(usertoken, SECRET_KEY);

  try{
    const usuario = await User.findOneAndUpdate({_id: decoded._id}, req.body);
    res.status(201)
    .json({
      successMessage: "Usuario actualizado",
      user: usuario
    })
  }
  catch(err){
    res.status(400).json({
      error: err
    })
  }
}
const { User } = require('../models/user.model');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SECRET_KEY = process.env.SECRET_KEY;

module.exports.register = async (req,res) => {
    try{
        const user = await User.create(req.body);
        const userToken = jwt.sign({_id:user._id}, SECRET_KEY);
        res.status(201)
        .cookie('usertoken', userToken, {httpOnly: true, expires: new Date(Date.now()+90000)})
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
      res.status(201)
        .cookie('usertoken', userToken, {httpOnly: true, expires: new Date(Date.now()+90000)})
        .json({successMessage: "Login user", user: usuario})
    }

  }
  catch(err){
    res.status(400).json({
      error: "Email or password incorrect" 
    })
  }};

/*module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(persons => response.json(persons))
        .catch(err => response.json(err))
}

module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(person => response.json(person))
        .catch(err => response.json(err))
}

module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}*/
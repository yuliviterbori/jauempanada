const { User } = require('../models/user.model');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SECRET_KEY = process.env.SECRET_KEY;

module.exports.register = async (req,res) => {
    try{
        const user = await User.create(req.body);
        const userToken = jwt.sign({_id:user._id}, SECRET_KEY);
        res.status(201)
        .cookie('user token', userToken, {httpOnly: true, expires: new Date(Date.now()+90000)})
        .json({successMessage: "Register user", user: user})
    }
    catch(err){
        res.status(400).json(err);
    }
}

module.exports.login = (req, res) => {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user === null) {
          res.json({ msg: "invalid login attempt" });
        } else {
          bcrypt
            .compare(req.body.password, user.password)
            .then(passwordIsValid => {
              if (passwordIsValid) {
                const newJWT = jwt.sign({
                      _id: user._id
                })
                const secret = "mysecret";
                res
                  .cookie("usertoken", newJWT, secret, {
                    httpOnly: true
                  })
                  .json({ msg: "success!" });
              } else {
                res.json({ msg: "invalid login attempt" });
              }
            })
            .catch(err => res.json({ msg: "invalid login attempt" }));
        }
      })
      .catch(err => res.json(err));
  };

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
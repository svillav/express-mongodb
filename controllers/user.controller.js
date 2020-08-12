var UserModel = require('../models/user.model');


// POST
exports.userCreate = (req, res) => {
  var user = new UserModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  user.save((err) => {
    if (err) {
      return next(err);
    }
    res.send('User Created successfully.')
  })
};

// GET
exports.userDetails = (req, res) => {
  UserModel.findById(req.params.id, (err, user) => {
    if (err) return next(err);
    res.send(user);
  })
};

// PUT
exports.userUpdate = (req, res) => {
  UserModel.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, user) => {
    if (err) return next(err);
    res.status(200).send({ message: 'User udpated.', data: user, timestamp: new Date() });
  });
};

// DELETE
exports.userDelete = (req, res) => {
  UserModel.findByIdAndRemove(req.params.id, function (err, user) {
    if (err) return res.status(500).send("There was a problem deleting the user.");
    res.status(200).send("User: "+ user.name +" was deleted.");
  });
};
  
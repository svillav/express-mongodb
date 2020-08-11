var User = require('../models/user.model');


exports.test = (req, res) => {
    res.send('Server running correctly.');
};

// POST
exports.userCreate = (req, res) => {
    var user = new User(
        {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
    );

    user.save( (err) => {
        if (err) {
            return next(err);
        }
        res.send('User Created successfully.')
    })
};

// GET
exports.userDetails = (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) return next(err);
        res.send(user);
    })
};

// PUT
exports.userUpdate = (req, res) => {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, user) => {
        if (err) return next(err);
        res.send('User udpated.');
    });
};

// DELETE
exports.userDelete = (req, res) => {
    User.findByIdAndRemove(req.params.id, (err) => {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
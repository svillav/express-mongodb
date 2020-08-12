var CommentModel = require('../models/comment.model');


// POST
exports.commentCreate = (req, res) => {
  var comment = new CommentModel({
    author: req.body.author
  });

  comment.save( (err) => {
    if (err) {
      return next(err);
    }
    res.send('Comment Created successfully.')
  })
};

// GET
exports.commentDetails = (req, res) => {
  CommentModel.findById(req.params.id, (err, comment) => {
    if (err) return next();
    res.send(comment);
  })
};

// PUT
exports.commentUpdate = (req, res) => {
  CommentModel.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, comment) => {
    if (err) return next(err);
    res.status(200).send({ message: 'comment udpated.', data: comment, timestamp: new Date() });
  });
};

// DELETE
exports.commentDelete = (req, res) => {
  CommentModel.findByIdAndRemove(req.params.id, function (err, comment) {
    if (err) return res.status(500).send("There was a problem deleting the comment.");
    res.status(200).send("comment: "+ comment.name +" was deleted.");
  });
};
  
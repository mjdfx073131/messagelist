const router = require('express').Router();
let Message = require('../models/message.model');

router.route('/').get((req, res) => {
  Message.find()
    .then(message => res.json(message))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newMessage = new Message({
    username,
    description,
    duration,
    date,
  });

  newMessage.save()
  .then(() => res.json('Message added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Message.findById(req.params.id)
    .then(message => res.json(message))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Message.findByIdAndDelete(req.params.id)
    .then(() => res.json('Message deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Message.findById(req.params.id)
    .then(message => {
      message.username = req.body.username;
      message.description = req.body.description;
      message.duration = Number(req.body.duration);
      message.date = Date.parse(req.body.date);

      message.save()
        .then(() => res.json('Message updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
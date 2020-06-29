const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const age = Number(req.body.age);
  const newUser = new User({username,age});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/:id').get((req, res) => {
//   User.findById(req.params.id)
//     .then(user => res.json(user))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.route('/:username').get(function(req, res) {

  var query = req.params.username;

  User.find({
      'username': query
  }, function(err, result) {
      if (err) throw err;
      if (result) {
          res.json(result)
      } else {
          res.send(JSON.stringify({
              error : 'Error'
          }))
      }
  })

});  

module.exports = router;
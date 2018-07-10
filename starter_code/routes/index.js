const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/private', [
  ensureLoggedIn('/passport/login'), 
] , (req,res) => {
  res.render('private-page');
});

module.exports = router;

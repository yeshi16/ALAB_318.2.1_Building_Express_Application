const express = require('express')
const router = express.Router()

// localhost://3000/contact
router.get('/', (req, res) => {
  res.send("Contact Us")
})

router.get('/:email/:content',  (req, res) => {
    res.render('contact',{content: req.params.content, email: req.params.email});
  });



  module.exports = router
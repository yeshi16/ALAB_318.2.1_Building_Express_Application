const express = require('express')
const router = express.Router()

// localhost://3000/contact
router.get('/',  (req, res) => {
    res.send("Contact us");
  });
router.post('/', (req, res) =>{
  res.send("this is contact pate with post method")
})

  module.exports = router
const express = require('express')
const router = express.Router()
const path = require('path')

// http://localhost:3000/user
router.get('/',  (req, res) => {
    res.send("Welcome to user page");
  });

//route with a parameter
// router.get('/:username/:age',  (req, res) => {
//   res.send(`this is ${req.params.username}'s profile and age of ${req.params.age} years old`);
// });

// query parameter 
// two params sort and theme they are key value  pair
// http://localhost:3000/info?sort=ascending&theme=dark
router.get('/info', (req, res) =>{
  res.send(`${req.query.sort} ${req.query.theme}`)
})

// template file
router.get('/:username',  (req, res) => {
//render methos is going to compile  the template engine (pug file)
// to access the param render method takes second argument that is object with key value pair
res.render('user', {username: req.params.username}) // views/user.pug b/c the view folder is specified above in the app.set('views, path ) 
});


// download image
router.get('/:username/download', (req, res) =>{
  res.download(path.resolve('./public/images/User-Profile.png'), 'User-Profile.png')
})



  


module.exports = router


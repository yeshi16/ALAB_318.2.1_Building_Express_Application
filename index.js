const express = require("express") // import express
const app = express();
const port = 3000;
const path = require('path')
const users = require('./routes/user')
const contact = require('./routes/contact')


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'styles')))

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});
// set template engine
app.set('view engine', 'pug'); // use pug view engine 
app.set('views', path.join(__dirname, 'views')) // it goes to view folder from the current directory  // app.set('views', '../views')

//// middleware
// const logReq = function (req, res, next) {
//     console.log("Request Received");
//     next();
//   };
  
//   app.use(logReq);

// middleware application level
app.use((req, res, next) => {
  console.log(new Date().toLocaleDateString())
  next()
})

// middleware router level
// it can only have one res.send 
// useful when you want to do differents steps like log in and then passowrd
// app.get('/', [
//   (req, res, next) => {
//     console.log(`middleware 1`)
//     next()
//   },
//   (req, res, next) => {
//     console.log(`middleware 1`)
//     next()
//   },
//   (req, res) => {
//     res.send(`<h1>Welcome to home page from middleware</h1>`)}   
// ])



// use the imported routers using "use" method with the path and the variable tht was creacte when importeed
app.use('/users', users)
app.use('/contact', contact)

app.get('/', (req, res) => {
  res.render('mainPage') 
})

app.post('/', (req, res) => {
  res.send(`<h1>Welcome to home page with POST Method</h1>`) 
})


  







// app.get("/user", (req, res) => {
//   res.send(`Received a GET request for user!
// Try navigating to /user/somevalue/profile/somevalue.`);
// });

// app.get("/user/:userID", (req, res) => {
//   res.send(`Navigated to the user page for: ${req.params.userID}.`);
// });

// app.get("/user/:userID/profile", (req, res) => {
//   res.send(`Navigated to the user profile page for: ${req.params.userID}.`);
// });

// app.get("/user/:userID/profile/:data", (req, res) => {
//   res.send(
//     `Navigated to the user profile page for: ${req.params.userID}, with the data: ${req.params.data}.`
//   );
// });
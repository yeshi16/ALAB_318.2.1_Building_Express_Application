const express = require("express") // import express
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});

//// middleware
const logReq = function (req, res, next) {
    console.log("Request Received");
    next();
  };
  
  app.use(logReq);

  
app.get("/", (req, res) => {
  res.send("Try navigating to /user.");
});

app.get("/user", (req, res) => {
  res.send(`Received a GET request for user!
Try navigating to /user/somevalue/profile/somevalue.`);
});

app.get("/user/:userID", (req, res) => {
  res.send(`Navigated to the user page for: ${req.params.userID}.`);
});

app.get("/user/:userID/profile", (req, res) => {
  res.send(`Navigated to the user profile page for: ${req.params.userID}.`);
});

app.get("/user/:userID/profile/:data", (req, res) => {
  res.send(
    `Navigated to the user profile page for: ${req.params.userID}, with the data: ${req.params.data}.`
  );
});
const express = require("express");
var exphbs = require('express-handlebars')

const path = require('path')
var app = express();
const port = 3000;

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars')

// use index file from package
app.use(express.static(path.join(__dirname, 'static')))
app.use('/', require(path.join(__dirname, 'routes/blog')))

// app.get("/", (req, res) => {
//   // res.send('./index.html');
// });


// // get params from url link
// app.get("/:name", (req, res) => {
//   res.send(
//     req.params.name
//   )
// })

// // get json api request
// app.get("/api/test2", (req, res) => {

//   res.json({
//     name: "Aditya",
//     age: 21
//   })

// })

app.listen(port, () => {
  console.log(`Blog app listening on port ${port}`);
});

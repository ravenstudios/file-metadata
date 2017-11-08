var express = require("express");
var path = require("path");
var multer  = require('multer');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.get("/", function(req, res){

  res.render("index");
});

app.post('/', multer({ dest: './uploads/'}).single('upl'), function (req, res, next) {
  res.send({size: req.file.size})

})

app.listen(3000, function(err){
  if(err){
    console.log(err);
  }
  console.log("server started");
})

//for glitch
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

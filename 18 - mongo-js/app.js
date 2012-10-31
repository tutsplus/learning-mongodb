var express = require('express')
  , http = require('http'),
    mongo = require("mongodb");

var app = express(),
    db  = new mongo.Db('myapp', new mongo.Server('localhost', 27017, { auto_reconnect: true })),
    people = db.collection("people");

app.configure(function(){
  app.use(express.bodyParser());
});

app.get('/', function (req, res) {
  people.find().toArray(function (err, docs) {
    if (err) throw err;
    res.render("index.jade", { people: docs });
  });
});

app.post('/', function (req, res) {
  people.insert({ name: req.body.name, job: req.body.job }, function (err, doc) {
    if (err) throw err;
    res.redirect("/");
  });
});

app.get('/update/:id', function (req, res) {
  people.findOne({ _id: new mongo.ObjectID(req.params.id) }, function (err, doc) {
    if (err) throw err;
    res.render("update.jade", { person: doc });
  });
});

app.post("/update/:id", function (req, res) {
  people.update(
    { _id: new mongo.ObjectID(req.params.id) },
    {
      name: req.body.name,
      job : req.body.job
    }, function (err, item) {
      if (err) throw err;
      res.redirect("/");
    });
});

app.get('/delete/:id', function (req, res) {
  people.remove({ _id: new mongo.ObjectID(req.params.id) }, function (err) {
    if (err) throw err;
    res.redirect("/");
  });
});

http.createServer(app).listen(3000);











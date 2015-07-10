var express = require('express'),
	bodyParser = require('body-parser'),
	mongo = require('mongodb'),
	MongoClient = require('mongodb').MongoClient,
	db,
	people,
	app = express(),
	env = process.env.NODE_ENV || 'development';

// Initialize connection once
MongoClient.connect("mongodb://localhost:27017/integration_test", function(err, database) {
  if(err) throw err;

  db = database;
  people = db.collection("test_collection");
  console.log('found the testCollection');

  // Start the application after the database connection is ready
  app.listen(3000, function () { console.log('Listening on port 3000'); });

});

if ('development' == env) {
   app.set("view engine", "jade");
   app.set("views", __dirname + "/views");
   app.use(bodyParser());
   app.use(express.static('./views'));
};
	
app.get("/", function (req, res) {
  people.find().toArray(function (err, docs) {
  	if (err) throw err;
  	res.render('index.jade', {people: docs});
  });
});

app.post('/', function (req, res) {
  people.insert({ name: {first: req.body.firstName, last:req.body.lastName}, job: req.body.job }, function (err, doc) {
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
      name: 
      {
      		first: req.body.firstName, 
      		last: req.body.lastName
      },
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

const MongoClient = require("mongodb");
const Express = require('express');
const Config = require("./config.js");

let http = Express();
http.use(Express.json());
http.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
let Mongo = new MongoClient.MongoClient("mongodb://"+Config.host+":"+Config.port+"/", { useNewUrlParser: true });
let db = null;

// List Collections
http.get('/', (req, res) => {
    db.listCollections().toArray((err, collections)=>{
        if(err) throw err;
        res.json(collections);
    });
});

//Append record
http.post('*', (req, res) => {
    db.collection(parseURL(req)[1]).insert(req.body, (err, obj) =>{
        res.json(obj);
    });
});

//Get record for collection
http.get('/*/[0-9]+', (req, res) => {
    let page = parseURL(req)[2];
    db.collection(parseURL(req)[1]).find()
        .limit(page*Config.limitRecord)
        .skip((page-1)*Config.limitRecord)
        .toArray((err, objs) => {
        res.json(objs);
    });
});

//Filter for collection
http.put('/*/[0-9]+', (req, res) => {
    let page = parseURL(req)[2];console.log(req.body);
    db.collection(parseURL(req)[1]).find(req.body)
        .limit(page*Config.limitRecord)
        .skip((page-1)*Config.limitRecord)
        .toArray((err, objs) => {
            res.json(objs);
        });
});

//Update record
http.patch('/*/*+', (req, res) => {
    let id = new MongoClient.ObjectID(parseURL(req)[2]);
    db.collection(parseURL(req)[1]).updateOne({_id: id}, {$set: req.body}, (err, obj) =>{
        res.json(obj);
    });
});

//Update many record
http.patch('/*', (req, res) => {
    db.collection(parseURL(req)[1]).updateMany(req.body.find, {$set: req.body.set}, (err, obj) =>{
        res.json(obj);
    });
});

//Get record
http.get('/*/*', (req, res) => {
    let id = new MongoClient.ObjectID(parseURL(req)[2]);
    db.collection(parseURL(req)[1]).find({_id: id})
        .toArray((err, obj) => {
            res.json(obj[0]?obj[0]:null);
        });
});

//Delete record
http.delete('/*/*+', (req, res) => {
    let id = new MongoClient.ObjectID(parseURL(req)[2]);
    db.collection(parseURL(req)[1]).remove({_id: id}, (err, obj) => {
        res.json(obj);
    });
});

//Delete many record
http.delete('/*', (req, res) => {
    db.collection(parseURL(req)[1]).remove(req.body, (err, obj) => {
        res.json(obj);
    });
});

http.listen(Config.httpPort, function () {
    Mongo.connect((err, client)=>{
        if(err) throw err;
        db = client.db(Config.database);
        console.log('Listening on port ' + Config.httpPort);
    });
});

function parseURL(url) {
    return url.originalUrl.split("/");
}
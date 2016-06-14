var marklogic = require('marklogic'),
    stream = require('stream'),
    fs = require('fs');

var db = marklogic.createDatabaseClient({
  user: 'admin',
  password: 'admin'
});

// The following is already in the database
var json = '{"foo": "bar"}';
var docDescr3 = {
  uri: '/doc3.json',
  content: json
}

var writable = new stream.Writable({
  write: function(chunk, encoding, next) {
    console.log(chunk.toString());
    next();
  }
});

var writable2 = fs.createWriteStream('file.txt');

var str = db.documents.read('/doc3.json')
  .stream()
  .pipe(writable2);

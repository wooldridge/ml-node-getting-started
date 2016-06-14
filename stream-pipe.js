var marklogic = require('marklogic'),
    stream = require('stream'),
    fs = require('fs');

var db = marklogic.createDatabaseClient({
  user: 'admin',
  password: 'admin'
});

var q = marklogic.queryBuilder;

var f = 'file.txt';
fs.closeSync(fs.openSync(f, 'w')); // ensure file is empty

var writable = new stream.Writable({
  write: function(obj, encoding, next) {
    console.log(JSON.stringify(obj, null, 2));
    fs.writeFile(f, JSON.stringify(obj.content), {flag: 'a'}, next());
  },
  objectMode: true
});

db.documents.query('')
  .stream()
  .pipe(writable);

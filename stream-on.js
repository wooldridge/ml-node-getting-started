var marklogic = require('marklogic'),
    stream = require('stream');

var db = marklogic.createDatabaseClient({
  user: 'admin',
  password: 'admin'
});

var json = '{"foo": "bar"}';

var docDescr3 = {
  uri: '/doc3.json',
  content: json
}

db.documents.write(docDescr3)
  .stream()
  .on("data", function (res) {
    console.log('successful write 3');
    console.dir(res);
  })
  .on("error", function (err) {
    console.log('failed write 3');
    console.error(err)
  });

var writable = new stream.Writable({
  write: function(chunk, encoding, next) {
    console.log(chunk.toString());
    next();
  }
});

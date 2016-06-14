var marklogic = require('marklogic'),
    stream = require('stream');

var db = marklogic.createDatabaseClient({
  user: 'admin',
  password: 'admin'
});

var json = '{"foo": "bar"}';

var docDescr2 = {
  uri: '/doc2.json',
  content: json
}

db.documents.write(docDescr2)
  .result()
  .then(function (res) {
    console.log('successful write 2');
    console.dir(res);
  })
  .catch(function (err) {
    console.log('failed write 2');
    console.dir(err);
  });

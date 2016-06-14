var marklogic = require('marklogic');

var db = marklogic.createDatabaseClient({
  user: 'admin',
  password: 'admin'
});

var json = '{"foo": "bar"}';

var docDescr1 = {
  uri: '/doc1.json',
  content: json
}

db.documents.write(docDescr1)
  .result(
    // success callback
    function (res) {
      console.log('successful write 1');
      console.dir(res);
    },
    // failure callback
    function (err) {
      console.log('failed write 1');
      console.dir(err);
    }
  );

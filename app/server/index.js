var bodyparser = require('body-parser');
var cors = require('cors');
var express = require('express');
var app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('../client/build'));
//app.get('/*', (req, res) => {
//  res.sendFile(path.join(__dirname, '../client/build','index.html'));});
app.set('port', process.env.PORT || 3001);
app.get('/feed', (req, res) => {
  console.log(`[GET:/feed] ${new Date().toLocaleString()}`);
  var parser = require('rss-parser');
  const url = 'https://blogs.esri.com/esri/arcgis/feed';
  const options = {
    customFields: {
      feed: [['generator', 'author'], ['content:encoded', 'content']],
      item: [['dc:creator', 'author'], ['content:encoded', 'contentHtml']]
    }
  };
  parser.parseURL(url, options, (err, parsed) => {
    res.json({
      feed: parsed.feed
    });
  });
});

app.get('/check', (req, res) => {
  console.log(`[GET:/] ${new Date().toLocaleString()}`);
  res.send('Server is working.');
});

var server = app.listen(app.get('port'), () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server listening at http://%s:%s', host, port);
});

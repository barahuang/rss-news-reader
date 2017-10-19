var bodyparser = require('body-parser');
var cors = require('cors');
var express = require('express');
var app = express();

var parser = require('rss-parser');
const url = 'https://blogs.esri.com/esri/arcgis/feed';
const options = {
  customFields: {
    feed: [['generator', 'author'], ['content:encoded', 'content']],
    item: [['dc:creator', 'author'], ['content:encoded', 'contentHtml']]
  }
};
let feed = null;

parser.parseURL(url, options, (err, parsed) => {
  feed = parsed.feed;
});

app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

app.set('port', process.env.PORT || 3001);
app.get('/feed', (req, res) => {
  res.json({
    feed
  });
});

app.get('/', (req, res) => {
  res.send('Server is working.');
});

var server = app.listen(app.get('port'), () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server listening at http://%s:%s', host, port);
});

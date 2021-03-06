require('newrelic');

const express = require('express');
const morgan = require('morgan');
const proxy = require('http-proxy-middleware');

const app = express();
const port = process.env.PORT || 6666;


app.use(morgan('dev'));

// Recommendations - Eric
app.use('/rooms/:roomsid/house', proxy({ target: 'http://localhost:3123' }));
app.use('/rooms/:roomsid/', proxy({ target: 'http://localhost:3123' }));
// app.use('/rooms/:roomsid', express.static('./public'));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

const express = require('express');
const path = require('path');

const app = express();

// app.use(express.static('dist'));
// app.use('/', express.static('src'));


// app.use(express.static(__dirname + '/dist/*'));
// app.use();

// app.use(express.static(__dirname + '/src'));

app.get('/', function(req, res) {
    const HTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset='utf-8'>
        <title>Wiki!</title>
      </head>
      <body>
        <div id='app'></div>
        <!-- ตอนนี้เราจะใช้พอร์ต 8081 กับ webpack dev server
        <script src='http://localhost:3000/dist/bundle.js'></script>  -->
        <h1>Hellow</h1>
      </body>
    </html>
    `
    res.end(HTML)
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

module.exports = app;
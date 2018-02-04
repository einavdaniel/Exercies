const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/myData', (req, res) => {
    res.json([1,2,3]);
});

app.listen(8000);
console.log('Listening on port 8000');
var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine','jade');
app.set('views', './views');

app.locals.pretty =true;


app.get('/', function (req, res) {
  res.render('index');
});

app.get('/dynamic', (req,res) => {
    res.send("black");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

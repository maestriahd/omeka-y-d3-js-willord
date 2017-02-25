var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express',
  saludo: 'hola a todos',
  numero: 1,
  gato: 'https://www.mundogato.net/wp-content/uploads/normas-de-higiene-en-los-gatos-1-485x300.jpg'
 });
});

module.exports = router;

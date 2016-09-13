var express = require('express'),
  router = express.Router();


module.exports = function (app) {
  app.use('/', router);
};

router.get('/hola', function (req, res, next) {
	res.render('hola_view')


});

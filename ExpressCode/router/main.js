
var mysql = require('mysql');
// var dbconfig = require('../config/database');	// dateStrings 적용 안 되는 현상
var connection = mysql.createConnection({
	host	: 'localhost',
	user	: 'root',
	password: 'password',
	database: 'monitor',
	dateStrings : 'date'
});

module.exports = function(app) {
	app.get('/', function(req, res) {
		// res.render('index.html');

		connection.query('SELECT * FROM traffic', function(error, result, fields) {
			if (error) {
				console.log('Error: ', error);
			}

			var date = [],
				category = [],
				host = [];

			for (var i in result) {
				date[i] = result[i].date;
				category[i] = result[i].category;
				host[i] = result[i].host;
			}

			res.render('index.ejs', {
				date: date,
				category: category,
				host: host
			});
		});

	});
	app.get('/about', function(req, res) {
		res.render('about.html');
	});
};
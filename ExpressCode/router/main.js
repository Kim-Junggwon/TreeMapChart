
var mysql = require('mysql');
// var dbconfig = require('../config/database');	// dateStrings 적용 안 되는 현상
var connection = mysql.createConnection({
	host	: 'localhost',
	user	: 'root',
	password: 'password',
	database: 'monitor',
	dateStrings : 'date'
});

// var i = 0;
var a = "";

var interval = function () {	// 쿼리 호출 및 변수값 정의
	connection.query('SELECT * FROM TRAFFIC WHERE DATE > NOW() - INTERVAL 15 SECOND', (error, result, fields) => {
		if (error) {
			console.log('Error: ', error);
		}
		// console.log(result[0]);
		a = result[result.length - 1];
		connection.end();     
	});
};

var callQuery = function(app) {
	app.get('/', function(req, res) {

		interval();

		var result = a.date;

		if (result != undefined) {
			res.render('index.ejs', {result:result});
			console.log(result);
			return;
		} else {
			res.send("<h1>err</h1>");
		}
	});

	app.get('/about', function(req, res) {
		res.render('about.html');
	});
};

module.exports = callQuery;
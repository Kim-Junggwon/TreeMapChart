
var mysql = require('mysql');
// var dbconfig = require('../config/database');	// dateStrings 적용 안 되는 현상
var connection = mysql.createConnection({
	host	: 'localhost',
	user	: 'root',
	password: 'password',
	database: 'monitor',
	dateStrings : 'date'
});

var date = [];
var host = [];
var cate = [];

var callQuery = function(app) {
	query(app);	// setInterval 첫 호출 delay 방지

	setInterval(() => {
		query(app);
	}, 2000);	// 2초마다 데이터 호출
};

var query = function(app) {

	connection.query('SELECT * FROM TRAFFIC WHERE DATE > NOW() - INTERVAL 5 MINUTE', (error, result, field) => {
		if (error) {
			console.log('Err: ', error);

		} else {
			for (var i in result) {
				date[i] = result[i].date;
				host[i] = result[i].host;
				cate[i] = result[i].category;
			}
			console.log(date);
			console.log(cate);
			console.log(host);
		}
	});

	app.get('/', function(req, res) {
		res.render('index.ejs', {
			date : date,
			host : host,
			cate : cate
		});
	});
}

module.exports = callQuery;
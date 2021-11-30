
var mysql = require('mysql');
// var dbconfig = require('../config/database');	// dateStrings 적용 안 되는 현상
var connection = mysql.createConnection({
	host	: 'localhost',
	user	: 'root',
	password: 'password',
	database: 'monitor',
	dateStrings : 'date'
});


var callQuery = function(app) {

	var date = [];
	var host = [];
	var cate = [];

	setInterval(() => {
		connection.query('SELECT * FROM TRAFFIC WHERE DATE > NOW() - INTERVAL 10 minute', (error, result, field) => {
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

			date = [];	// 렌더링 후 배열 초기화
			host = [];
			cate = [];
		});
	}, 3000);

};

module.exports = callQuery;
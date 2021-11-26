
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

		connection.query('SELECT * FROM TRAFFIC WHERE DATE > NOW() - INTERVAL 10 SECOND', (error, result, field) => {
			if (error) {
				console.log('Err: ', error);

			} else {
				for (var i in result) {
					date[i] = result[i].date;
					host[i] = result[i].host;
					cate[i] = result[i].category;
				}
				console.log(cate);
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
	}, 1000);

};

module.exports = callQuery;


// connection.connect(
// 			function (err) { 
// 			    if (err) { 
// 			        console.log("Error");
// 			        throw err;
// 			    }
// 			    else {
// 			        console.log("Connection");

// 			        // setInterval(() => {
// 						connection.query('SELECT * FROM TRAFFIC order by desc limit 1', (error, result, fields) => {
// 							if (error) {
// 								console.log('Error: ', error);
// 							}
// 							console.log(result);
			    
// 			    			res.render('index.ejs', {result:result});
// 						});
// 					// }, 1000);
// 			    }


// 			});
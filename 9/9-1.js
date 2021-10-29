var mysql = require('mysql');

//데이터베이스 연결
var client = mysql.createConnection({
    host: 'localhost',
    port: 3333,
    user: 'root',
    password: '1234'
});

//데이터베시으 쿼리 사용
client.query('USE Company');
client.query('SELECT * FROM products', function(error, result, fields){

});

//이벤트기반, 비동기 처리

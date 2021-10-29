var mysql = require('mysql');

//DB연결
var client = mysql.createConnection({
    user: 'root',
    password: 'word'
});

client.query('USE Company');
client.query('SELECT * FROM products', function(error, result, fields){
    if(error){
        console.log('error! error!');
    }

    else{
        console.log(result);
    }
});
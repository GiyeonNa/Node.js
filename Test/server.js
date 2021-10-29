//80
var http = require('http');
var fs = require('fs');
var qs = require('querystring');

http.createServer(function (request, response) {

  //GET 요청
  if (request.method == 'GET') {
    fs.readFile('index.html', function (error, data) {
      response.writeHead(200, {'Content-Type' : 'text/html'});
      response.end(data);
    });
  }

  //POST 방식, 입력이 된 후
  else if (request.method == 'POST') {
    request.on('data', function (data) {
      var post = qs.parse(data);
      var Name = post.name;
      var Height = post.height/100;
      var Weight = post.weight;
      var BMI = (Weight/(Height*Height));
      response.writeHead(200, {'Content-Type' : 'text/html; charset=utf8'});
      response.end('<h3>신장 : ' + Height + '</h3> <h3>몸무게 : ' + Weight + '</h3> <hr> <h3>BMI : ' + data + '</h3>');
    });
  }
}).listen(80, function () {
  console.log('Server is Runnig');
});

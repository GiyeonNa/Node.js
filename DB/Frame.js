var fs = require('fs');
var express = require('express');
var bodyParser = require('body-Parser');
var ejs = require('ejs');

var DummyDB =(function(){

    var DummyDB={};
    var storage=[];
    var count=1;

    DummyDB.get=function(id) {
        if (id){
            //변수를 가공
            id=(typeof id == 'string') ? Number(id):id;
            //데이터를 선택
            for (var i in storage) 
                if(storage[i].id==id) {
                    return storage[i];
                }
            return '';
        }else{
            return storage;
        }
    };

    DummyDB.getname=function(name){
        if(name) {
            for(var i in storage)
                if (storage[i].name==name){
                    return storage[i];
                }
            return '';
        }else {
            return storage;
        }
    };



    DummyDB.insert =function(data){
        data.id =count++;
        storage.push(data);
        return data;
    };
    DummyDB.remove=function(id) {
        //변수를 가공
        id=(typeof id== 'string') ? Number(id) :id;
        // 제거
        for(var i in storage) if (storage[i].id ==id) {
            //데이터 제거
            storage.splice(i,1);

            return true;

        }
    return false;

    };
    return DummyDB;
})();
//서버생성
var app=express();

//미들웨어 설정
app.use(bodyParser.urlencoded({
    extended:false
}));

app.get('/insert',function(req,res) {
    fs.readFile('Main.ejs','utf8',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(ejs.render(data, {
            data : DummyDB.get()
        }));
    });
});

//아무것도 없을때 홈으로
// app.get('/', function (request, response){
//     fs.readFile('8-42-1.ejs', function (error, data){
//         response.redirect('/home')
//     })
// })

// app.get('/home',function(req,res) {
//     fs.readFile('mainhome.html','utf8',function(err,data){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.end(data);
//     });
// });

// app.get('/insert',function(req,res) {
//     fs.readFile('Main.ejs','utf8',function(err,data){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.end(ejs.render(data, {
//             data : DummyDB.get()
//         }));
//     });
// });

// app.get('/user', function (request, response) {
//     fs.readFile('8-42-1.ejs',function (error, data){
//         response.writeHead(200, {'Content-Type' : 'text/html'});
//         response.end(ejs.render(data,{
//             data: DummyDB.get()
//         }))
//     })
// });

// app.get('/user/:id', function (request, response) {
//     response.send(DummyDB.get(request.param.id));
// });

// app.post('/user', function (request, response) {
//     var name = request.body.name;
//     var region = request.body.region;

//     //유효성 검사
//     if (name && region){
//         response.send(DummyDB.insert({
//             name: name,
//             region: region
//         }));
//     }
//     else{
//         throw new Error('error');
//     }
// });

// app.put('/user/:id', function (request, response) {
//     var id = request.params.id;
//     var name = request.body.name;
//     var region = request.body.region;

//     //데이터베이스 수정
//     var item = DummyDB.get(id);
//     item.name = name || item.name;
//     item.region = region || item.region;

//     response.send(item);
// });

// app.delete('/user/:id', function (request, response) {
//     response.send(DummyDB.remove(request.params.id));
// });

app.listen(80, function () {
    console.log('Server is Running');
})
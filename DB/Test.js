var fs = require('fs');
var ejs = require('ejs');
var express = require('express');
var bodyParser =require('body-parser');
var qs = require('querystring');

//더미 데이터베이스 구현
var DummyDB = (function () {
    //변수
    var DummyDB = {}; // {}은 JSON데이터 저장
    var storage = [];
    var count = 1;
    // var notFound = {id:0, name:"회원이",region:"검색되지 않았습니다"};

    //메서드
    DummyDB.get = function (id) { //데이터출력,검색
        console.log(storage);
        if (id) {
            //변수 가공
            id = (typeof id == 'string') ? Number(id) : id;
            
            //데이터 선택
            for (var i in storage)
                if (storage[i].id == id){
                    return storage[i];
                }
            return ' ';
        } else {
            return storage;
        }
    };

    //데이터 출력,검색
    DummyDB.getName = function (name) {
        if (name) {
            //데이터 선택
            for (var i in storage)
                if (storage[i].name == name){
                    return storage[i];
                }
            return ' ';
        } else {
            return storage;
        }
    };

    // DummyDB.find = function (name) {
    //     if (name) {
    //         //데이터 선택
    //         for (var i in storage)
    //             if (storage[i].name == name){
    //                 return storage[i];
    //             }
    //         console.log("Returning not Fount! >> "+notFound);
    //         return notFound;
    //     } else {
    //         console.log("There is no name to find");
    //         return storage;
    //     }
    // };

    //새 데이터
    DummyDB.insert = function (data){
        data.id = count++;
        storage.push(data);
        return data;
    };

    //데이터 삭제
    DummyDB.remove = function (id) {
        //가공
        id = (typeof id == 'string') ? Number(id) : id;
        //제거
        for (var i in storage) if (storage[i].id == id){
            //데이터 제거
            //splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
            storage.splice(i,1);
            //return 삭제성공
            return true;
        }
        return false;
    };

    return DummyDB;
})();

//서버생성 , 미들웨이
var app = express();

//템플릿 엔진 ejs 설정

app.use(bodyParser.urlencoded({
    extended: false
}));

app.listen(80, function(){
    console.log('Server is Running');
});

function showAll(response, htmlfile){
    fs.readFile(htmlfile, 'utf8', function(error, ejsdata){
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end(ejs.render(ejsdata, {
            data: DummyDB.get()
        }));
    });
}

// function showThis(response, htmlfile, onedata) {
//     null
// }

//HTML 문서 사용

//홈화면
app.get('/HOME', function(request, response){
    fs.readFile('DB/Test_main.ejs','utf8',function(err,data){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(ejs.render(data));
    });
});

//공란시 home으로 보냄
app.get('/', function(request, response){
    response.redirect('/home')
});


//자료입력, 추가
app.get('/insert',function(request,response) {
    fs.readFile('DB/Test_insert.ejs','utf8',function(err,data){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(ejs.render(data,{
            data: DummyDB.get()
        }));// 사용자가 입력한 데이터가 추가되면서 보이는것
    });
});

app.post('/insert',function(request,response) {
    var name = request.body.name;
    var region = request.body.region;
    DummyDB.insert({
        name: name,
        region: region
    })
    
    fs.readFile('DB/Test_insert.ejs','utf8',function(err,data){
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end(ejs.render(data, {
            data: DummyDB.get()
        }));
    });
});




//자료수정, 수정
app.get('/edit', function(request, response){
    fs.readFile('DB/Test_edit.ejs','utf8',function(err,data){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(ejs.render(data, {
            data : DummyDB.get()
        }));
    });
});

app.post('/edit', function(request, response){
    var id = request.body.id;
    var name = request.body.name;
    var region = request.body.region;

    //데이터베이스 수정
    var item = DummyDB.get(id);
    item.name = name || item.name;
    item.region = region || item.region;

    fs.readFile('DB/Test_edit.ejs','utf8',function(err,data){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(ejs.render(data, {
            data : DummyDB.get()
        }));
    });
});




//자료삭제, 삭제
app.get('/del', function(request, response){
    fs.readFile('DB/Test_del.ejs','utf8',function(err,data){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(ejs.render(data, {
            data : DummyDB.get()
        }));
    });
});


app.post('/del', function(request, response){
    var id = request.body.id;
    console.log(id); //확인
    DummyDB.remove(id)
    
    fs.readFile('DB/Test_del.ejs','utf8',function(err,data){
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end(ejs.render(data, {
            data: DummyDB.get()
        }));
    });
});




//자료 출력 , 명단
app.get('/list', function(request, response){
    fs.readFile('DB/Test_list.ejs','utf8',function(err,data){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(ejs.render(data, {
            data : DummyDB.get()
        }));
    });
});

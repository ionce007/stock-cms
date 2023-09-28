const url = "http://www.foryet.net/api/actions.aspx?action="
var request = require('request');

var http = require('http');
var fs = require('fs');

function get_file_path(){
    debugger;
    var req = http.get(url + 'get_file_path');

    req.on('error', function(e){
        console.log(e);
    });
    req.on('response', function(res){
        debugger;
        console.log('statusCode - ', res.statusCode);
        console.log('contentLength - ', res.headers['content-length']);
      
        if(res.statusCode == 200){
          /*savedFd = fs.openSync('test.jpg', 'w');
          if(savedFd > -1){
            savedStream = fs.createWriteStream('test.jpg', {fd: savedFd});
            console.log('write stream created.');
            savedStream.on('finish', function(){
              console.log('data saved finished.');
              process.exit(0);
            });
          }*/
        }else{
            console.log('error occured.');
            process.exit(1);
        }
      
        res.on('data', function(chunk){
            console.log('got data - ', chunk);
        });
      
        res.on('close', function(){
            console.log('res closed, end save now.');
            //endSaved();
        });
        res.on('end', function(){
            console.log('res end, end save now.');
          //endSaved();
        });
        res.on('error',  function(e){
            console.log('res err, end save now.');
          //endSaved();
        });
    /*request(url + 'get_file_path', function (error, response, body) {   //body为返回的数据
        console.log('get_file_path');
        debugger;
        if (!error) {
            console.log('success');
            console.log(body); // 请求成功的处理逻辑
            console.log(response);
        } 
        else{
            console.log('error');
            console.log(error);
            console.log(response);
        }
    });*/
}

function recieve_wx_auth_login(code){
    request(url + 'recieve_wx_auth_login&code=' + code, function (error, response, body) {   //body为返回的数据
        console.log('recieve_wx_auth_login');
        if (!error) {
            console.log(body); // 请求成功的处理逻辑
            console.log(response);
        }
    });
}
function fore_file_list(path){
    request(url + 'fore_file_list&path=' + path, function (error, response, body) {   //body为返回的数据
        console.log('fore_file_list');
        if (!error) {
            console.log(body); // 请求成功的处理逻辑
            console.log(response);
        }
    });
}
module.exports.get_file_path = get_file_path();
//module.exports.recieve_wx_auth_login = recieve_wx_auth_login(code);
//module.exports.fore_file_list = fore_file_list(path);
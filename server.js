const url = "http://www.foryet.net/api/actions.aspx?action="
var request = require('request');

function get_file_path(){
    request(url + 'get_file_path', function (error, response, body) {   //body为返回的数据
        console.log('get_file_path');
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
    });
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
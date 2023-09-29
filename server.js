//const url = "http://www.foryet.net/api/actions.aspx?action="

//node连接MySQL数据库
const mysql = require ('mysql')
//创建连接
let conn=mysql.createConnection({
    //主机地址
    host:'mysql.sqlpub.com',
    //端口号
    port:3306,
    //用户名
    user:'ioncehm',
    //密码
    password:'0b1a6c1aa061f05b',
    //数据库名称
    database:'stockcms'
})
//获取连接
conn.connect((err)=>{
    debugger;
    if(err) throw err;
    console.log('连接成功');
})
//result->查询结果
/*let sql1='select * from article';
conn.query(sql1,(err,result)=>{
    debugger;
    if(err){
        console.log(err.message);
    }
    else{
        console.log('------------------');  
        console.log(result);
        console.log("查询完成");
        console.log('------------------');  
    }
})*/

function get_file_path(){
    debugger;
    let sql1='select * from article';
    conn.query(sql1,(err,result)=>{
        debugger;
        if(err){
            console.log(err.message);
        }
        else{
            console.log('------------------');  
            console.log(result);
            console.log("查询完成");
            console.log('------------------');  
        }
    })
}

//关闭数据库连接
conn.end((err)=>{
    if (err) throw err;
    console.log("关闭成功");
})


/*
var sql = require('mssql'); 
//var mysql = require('mysql');
var config = {
    user: 'qds169535493',  
    password: 'Hwang113@doinnx', 
    server: 'qds169535493.my3w.com',
    database: 'qds169535493_db',
    port: 1433,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
};
*/
/*var Connection = require('tedious').Connection
var Request = require('tedious').Request

var config = {
    userName: 'qds169535493', // update me
    password: 'Hwang113@doinnx', // update me
    server: 'qds169535493.my3w.com',
    database: 'qds169535493_db',
    port: 1433,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
}

var connection = new Connection(config)

connection.on('connect', function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('DB connected success!')
    }
})

function get_file_path () {
    request = new Request("select * from select * from bdFile", function (err, rowCount) {
        debugger;
        if (err) {
            console.log(err)
        } else {
            console.log(rowCount + ' rows')
        }
        connection.close()
    })
  
    request.on('row', function (columns) {
        debugger;
        columns.forEach(function (column) {
            debugger;
            if (column.value === null) {
                console.log('NULL')
            } else {
                console.log(column.value)
            }
        })
    })
    connection.execSql(request)
}
*/
/*
function get_file_path(){
    debugger;
    var conn = new sql.ConnectionPool(config);
    conn.connect(function(err){
        debugger;
        if(err) console.log(err); 
        else  {
            debugger;
            console.log('connect success!'); 
            var req = new sql.Request(conn);
            req.query('select * from select * from bdFile',function(err,res){ 
                if(err) console.log(err); 
                else console.log(res); 
            })
        }
    });
}
*/
function recieve_wx_auth_login(code){
    
}
function fore_file_list(path){
    
}

module.exports.get_file_path = get_file_path();
//module.exports.recieve_wx_auth_login = recieve_wx_auth_login(code);
//module.exports.fore_file_list = fore_file_list(path);
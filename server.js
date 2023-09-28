//const url = "http://www.foryet.net/api/actions.aspx?action="

var sql = require('mssql'); 

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

function get_file_path(){
    var conn = new sql.Connection(config);
    conn.connect(function(err){
        if(err) console.log(err); 
        else  {
            console.log('connect success!'); 
            var req = new sql.Request(conn);
            req.query('select * from select * from bdFile',function(err,res){ 
                if(err) console.log(err); 
                else console.log(res); 
            })
        }
    });
}

function recieve_wx_auth_login(code){
    
}
function fore_file_list(path){
    
}

module.exports.get_file_path = get_file_path();
//module.exports.recieve_wx_auth_login = recieve_wx_auth_login(code);
//module.exports.fore_file_list = fore_file_list(path);
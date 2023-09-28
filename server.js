const request = require('request')
const reqUrl="http://www.foryet.net/api/actions.aspx?action="

module.exports = function get_file_path(){
    request(reqUrl+'get_file_path', function (error,response,body) {
        debugger;
        console.error('error:', error)
        console.log('body:', body)
    })
}
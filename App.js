'use strict'
module.exports = function(app){
    app.get('/api/whoami',function(req,res){
        var ip = req.connection.remoteAddress;
        //console.log(ip);
        var language = req.headers["accept-language"]
        //console.log(language);
        var user_agent = req.headers["user-agent"]
        //console.log(user_agent);
        res.json({"ipaddress":ip,
                    "language": language,
                    "software" : user_agent});
    })
}
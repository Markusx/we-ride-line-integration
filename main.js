var main = function (params) {

    var request = require("request");

    request.post(
        {
            uri:'https://api.line.me/v2/bot/message/push',
            
            headers : {
                'Authorization' : 'Bearer ' + params.lineKey,
                'Content-Type':'Content-Type:application/json'
            },
            
            json: {
                to:params.userId,
                messages:[{
                 type:"text",
                 text:"we.Ride!!"   
                }]
            }
        }
    , function(err,response,body){
       return {error:err,resp:response,body:body};  
    });

};

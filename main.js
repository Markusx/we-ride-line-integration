var main = function (params) {

    var request = require("request-promise");
    
    var options = { method: 'POST',
      url: 'http://mockbin.org/bin/87a6111d-7399-40c4-ad96-987787bd0537',
      qs: { foo: [ 'bar', 'baz' ] },
      headers: 
       { 'content-type': 'application/x-www-form-urlencoded',
         accept: 'application/json' },
      form: { foo: params },
      jar: 'JAR' };

    request(options, function (error, response, body) {

    });

    return request.post(
        {
            uri:'https://api.line.me/v2/bot/message/push',
            
            headers : {
                'Authorization' : 'Bearer ' + params.lineKey,
                'Content-Type':'application/json'
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

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

    if ( params.action == 'sendMessage' ) {
             
        return request.post(
            {
                uri:'https://api.line.me/v2/bot/message/push',

                headers : {
                    'Authorization' : 'Bearer ' + params.lineKey,
                    'Content-Type':'application/json'
                },

                json: {
                    to:params.userId,
                    messages:[
                    {
                     type:"text",
                     text:"Hey Lars, Great Ride! Use the code below for a free Macha Latte at we.Cafe!"   
                    },
                    {
                     type:"image",
                     originalContentUrl:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/50d25e56651669.59b75d29d7415.jpg",
                     previewImageUrl:"https://mir-cdn.behance.net/v1/rendition/project_modules/disp/9ac72a56651669.59b75d29d7937.jpg"
                    }
                    ]
                }
            }
        , function(err,response,body){
           return {error:err,resp:response,body:body};  
        });
        
    }
};

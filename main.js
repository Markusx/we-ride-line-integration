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
                     originalContentUrl:"http://sensei-workflow-demo.westus2.cloudapp.azure.com:6262/weCafeCode.jpg",
                     previewImageUrl:"http://sensei-workflow-demo.westus2.cloudapp.azure.com:6262/weCafeCode.jpg"
                    }
                    ]
                }
            }
        , function(err,response,body){
           return {error:err,resp:response,body:body};  
        });
        
    }
};

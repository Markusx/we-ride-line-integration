var main = function (params) {

    var request = require("request");

 
    var options = { method: 'POST',
      url: 'http://mockbin.org/bin/87a6111d-7399-40c4-ad96-987787bd0537',
      qs: { foo: params },
      headers: 
       { 'content-type': 'application/x-www-form-urlencoded',
         accept: 'application/json' },
      form: { foo: params },
      jar: 'JAR' };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      console.log(body);
    });

    return {hello:'world'};

};

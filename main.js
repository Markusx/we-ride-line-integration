var main = function (params) {

    var request = require('request');
    var url ='https://requestb.in/riq0kfri?test=hi'
    request(url, function (error, response, body) {
      if (!error) {
        console.log(body);
      }
    });

    return {hello:'world'};

};
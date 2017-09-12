var main = function (params) {

    var request = require('request');
    var url ='https://requestb.in/13j68c81?test=yes'
    request(url, function (error, response, body) {
      if (!error) {
        console.log(body);
      }
    });

    return {hello:'world'};

};

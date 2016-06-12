
console.log("i");
	console.log("hi");
	var request = require('request');
	request('https://api.uber.com/v1/estimates/price?start_latitude=37.625732&start_longitude=-122.377807&end_latitude=37.785114&end_longitude=-122.406677&server_token=vgQFxpG0Xp9TjhsKeOZvEcIZNEE8gfCIAbufrFg0', function(error, response, body)
     {
		if(!error && response.statusCode == 200)
         {
             var json = JSON.parse(body);
             console.log(json);
        }
     }
     );

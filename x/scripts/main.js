requirejs(["node_modules/request/request"], function(request){
	console.log("hi");
	var request = require('request');
	request('https://api.uber.com/v1/estimates/price?start_latitude=37.625732&start_longitude=-122.377807&end_latitude=37.785114&end_longitud    e=-122.406677&server_token=Bzpj2OqdsiEfG8gXzI_UcoBY76hhfxiPF0CsOs3Q', function(error, response, body)
     {
         if(!error && response.statusCode == 200)
         {
             var json = JSON.parse(body);
             console.log(json);
        }
     }
     );
}); 

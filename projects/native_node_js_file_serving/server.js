/*
 * Write your server code in this file.
 *
 * name: Conn r Baldes
 * email: baldesc@oregonstate.edu
 */
function port_check ()  {

    if(process.env.PORT) {
        return process.env.PORT;
    }
    else {
        return 3000;
    }

}

var port_value = port_check();

 var http = require('http'); 
 
 var server = http.createServer(function(req, res) {

    if(req.url == '/') {

        res.writeHead(200, {
            'Content-Type': 'text/html'
             });
        res.write(index_html);

        res.end();
    } 
    else if(req.url == '/index.html') {

        res.writeHead(200, {
            'Content-Type': 'text/html'
             });
        res.write(index_html);

        res.end();
    }   
    else if(req.url == '/style.css') {

        res.writeHead(200, {
            'Content-Type': 'text/css'
             });
        res.write(style);

        res.end();
    } 
    else if(req.url == '/index.js') {

        res.writeHead(200, {
            'Content-Type': 'application/javascript'
             });
        res.write(index_js);

        res.end();
    } 
    else if(req.url == '/404.html') {

        res.writeHead(200, {
            'Content-Type': 'text/html'
             });
        res.write(html_404);

        res.end();
    } 
    else {

        res.writeHead(404, {
            'Content-Type': 'text/html'
             });
        res.write(html_404);

        res.end();
    }       
});

var fs = require('fs');
console.log("Read index.html");
 var index_html = fs.readFileSync('public/index.html');
 console.log("Read style.css");
 var style = fs.readFileSync('public/style.css');
 console.log("Read 404.html");
 var html_404 = fs.readFileSync('public/404.html');
 console.log("Read index.js");
 var index_js = fs.readFileSync('public/index.js');





server.listen(port_value, function() {

    console.log("Server is listening.");
});
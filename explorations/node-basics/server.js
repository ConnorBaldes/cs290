var http = require('http');

var server = http.createServer(function (req, res) {
  console.log("== Got a request");
  console.log("  -- HTTP method:", req.method);
  console.log("  -- Resource:", req.url);
  console.log("  -- Headers:", req.headers);

  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  res.write("<html>");
  res.write("<body>");
  res.write("<h1>Hello World!</h1>");
  res.write("<p>You requested this page: " + req.url + "</p>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

server.listen(8000, function () {
  console.log("== Server is listening on port 8000");
});

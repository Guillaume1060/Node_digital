const http = require("http");
const url = require("url");
const port = process.env.PORT || 3000;

const serverHttp = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);

  let urlParse = url.parse(req.url);
  console.log(urlParse.pathname.includes("/oui"));

  if (req.method == "GET") {
  } else if (req.method == "POST") {
  } else if (req.method == "PATCH") {
  } else if (req.method == "DELETE") {
  } else {
    res.writeHead(405, "Method not allowed");
    res.end();
  }
});

serverHttp.listen(port, console.log(`Serveur HTTP lancé sur le port ${port}`));

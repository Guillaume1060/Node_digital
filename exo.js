const http = require("http");
const url = require("url");
const port = process.env.PORT || 3000;

const serverHttp = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);

  let urlParse = url.parse(req.url);
  let route = urlParse.pathname;
  console.log(route);

  if (req.method == "GET") {
    if (route.includes("/users")) {
      res.writeHead(200, "voilà la page user");
      res.end();
    }
    if (route.includes("/users/cat")) {
      res.writeHead(200, "voilà les catégories");
      res.end();
    }
    if (route.includes("/users/cat/prod")) {
      res.writeHead(200, "voilà les produits");
      res.end();
    }
    if (req.method == "POST") {
      if (route.includes("/users/cat/prod")) {
        res.writeHead(200, "voilà le produit créé");
        res.end();
      }
      if (req.method == "UPDATE") {
        if (route.includes("/users/cat/prod")) {
          res.writeHead(200, "voilà le produit modifié");
          res.end();
        }
      } else {
        res.writeHead(405, "Method not allowed");
        res.end();
      }
    }
  }
});

serverHttp.listen(
  port,
  console.log(`2.Serveur HTTP lancé sur le port ${port}`)
);

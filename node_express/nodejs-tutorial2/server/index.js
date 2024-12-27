const express = require("express");

const app = express();

app.get('/' , (req , res) =>{
  return res.send("Hello from Home Page.");
})

app.get('/about' , (req , res) =>{
  return res.send(`Hello from About Page Hey ${req.query.name}`);
})

function myHandler(req, res) {
  if (req.url === "/favicon.ico") return res.end();
  const newUrl = url.parse(req.url, true);
  const log = `${Date.now()}: ${newUrl.pathname} New req recieved\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (newUrl.pathname) {
      case "/":
        res.end("Homepage");
        break;
      case "/about":
        const username = newUrl.query.q;
        res.end(`Hi, ${username}`);
        break;
      case "/contact":
        res.end("Contact Page");
        break;
      default:
        res.writeHead(404);
        res.end("Page not found");
        break;
    }
  });
}

app.listen(3000 , () => console.log("Server Started at port 3000"));

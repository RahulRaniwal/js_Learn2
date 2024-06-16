const writeToFile = require("../utils/write-to-file");
module.exports = (req, res) => {
  let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  let id = req.url.split("/")[3];
  const regexv4 = new RegExp(
    "^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$",
    "i"
  );

  if (!regexv4.test(id)) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        title: "Validation Field",
        message: "UUID is not valid",
      })
    );
  } else if (baseUrl === "/api/movies/" && regexv4.test(id)) {
    // Find the index of the movie with the given ID
    const indexToDelete = req.movies.findIndex((movie) => movie.id === id);

    if (indexToDelete === -1) {
      // Movie not found
      res.statusCode = 404;
      res.write(
        JSON.stringify({ title: "Not Found", message: "Movie not found" })
      );
      res.end();
    } else {
      req.movies.splice(indexToDelete, 1);
      writeToFile(req.movies);
      res.writeHead(204, { "Content-Type": "application/json" });
      res.end(JSON.stringify(req.movies));
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ title: "Not Found", message: "Route not found" }));
  }
};

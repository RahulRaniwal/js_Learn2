const bodyParser = require("../utils/body-parser");
const writeToFile = require("../utils/write-to-file");

module.exports = async (req, res) => {
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
    try {
      const requestBody = await bodyParser(req);
      // Find the index of the movie with the given ID
      const indexToUpdate = req.movies.findIndex((movie) => {
        return movie.id === id;
      });
      if (indexToUpdate === -1) {
        // Movie not found
        res.statusCode = 404;
        res.write(
          JSON.stringify({ title: "Not Found", message: "Movie not found" })
        );
        res.end();
      } else {
        // Update the movie data
        req.movies[indexToUpdate] = { id, ...requestBody };
        // Write updated data to file
        writeToFile(req.movies);
        // Send response
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(req.movies[indexToUpdate]));
      }
    } catch (error) {
      console.error("Error updating movie:", error);
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          title: "Validation Failed",
          message: "Request body is not valid.",
        })
      );
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ title: "Not Found", message: "Route not found" }));
  }
};

module.exports = (app) => {
  // Base URLS
  app.use("/api/artists", require("./user.routes"));
  app.use("/api", require("./auth.routes"));
  app.use("/api/comments", require("./comment.routes"));

  // CLOUDINARYCONFIG
  // app.use('/api/files', require('./files.routes'))

  app.use((req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });
};

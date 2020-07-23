module.exports = (app) => {
  // Base URLS
  app.use("/api/artists", require("./user.routes"));
  app.use("/api", require("./auth.routes"));

  // CLOUDINARYCONFIG 
  // app.use('/api/files', require('./files.routes'))
};

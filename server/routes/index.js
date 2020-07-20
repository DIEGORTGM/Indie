module.exports = app => {

    // Base URLS
    app.use('/artists', require('./user.routes'))
    app.use('/authentication', require('./auth.routes'))
}
require('babel-register')
const userAPI = require('./users')

module.exports = function RouterModule(app) {
    //define a common prefix
    app.use('/demo/user/api', userAPI)
}
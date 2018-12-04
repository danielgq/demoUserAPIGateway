require('babel-register')
const userAPI = require('./users.js')

module.exports = function RouterModule(app) {
    //define a common prefix
    app.use('/demo/user/api', userAPI)
}
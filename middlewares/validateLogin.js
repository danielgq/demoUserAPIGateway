import fs from 'fs'

const validateLogin = (req, res, next) => {
    const {adminName, adminPassword} = req.body;
    if (adminName === 'admin' && adminName === 'admin123') {
        console.log('validation pass')
        next()
    } else {
        console.log('validation failed')
        return res.status(401).json({
            msg: 'invalid admin info!!!'
        })
    }

}


module.exports = validateLogin;
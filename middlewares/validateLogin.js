import fs from 'fs'

const validateLogin = (req, res, next) => {
    const {adminName, adminPassword} = req.body;
  /*  fs.readFile('config/validation.json','utf-8',function(err,data){
        if(data){
            const {validAdminName, validAdminPassword} = JSON.parse(data);*/
            if (validAdminName === 'admin' && validAdminPassword === 'admin123') {
                console.log('validation pass')
                next()
            } else {
                console.log('validation failed')
                return res.status(401).json({
                    msg: 'invalid admin info!!!'
                })
            }
    /*}else if(err){
        console.log("error occurred when read the file")
        console.log(err)
    }
})*/

}


module.exports = validateLogin;
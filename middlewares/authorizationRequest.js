import fs from 'fs'

const validate = (req, res, next) => {
    const validationHeader  = req.header('Validation-Header')
    console.log('recieved  validationHeader -->' + validationHeader)
    fs.readFile('config/validation.json','utf-8',function(err,data){
        if(data){
            const correctHeader = JSON.parse(data).validationHeader;
            console.log('correctHeader --> ' + correctHeader)
            if (validationHeader != correctHeader) {
                console.log('validation failed')
                return res.status(401).json({
                    msg: 'invalid Validation-Header!!!'
                })
            }else{
                console.log('validation pass')
                next()
            }
        }else{
            console.log("error occurred when read the file")
        }
    })


}


module.exports = validate;
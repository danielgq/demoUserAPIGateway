const validateRequest = (req, res, next) => {
    const token = req.header('Access-Token')
    console.log('recieved  token -->' + token)
    const now = Date.now();
    let unauthorized = true;
    if (token) {
        const expired = now - token > 1000 * 10;
        if (!expired) {
            unauthorized = false;
        }
    }
    if (unauthorized) {
        console.log('token is expired !')
        res.sendStatus(401);
    } else {
        console.log('token is valid')
        next();
    }

}


module.exports = validateRequest;
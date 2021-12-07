const jwt = require('jsonwebtoken');

class TokenController {
    constructor() {

    }

    verifyAuth = (req, res, next) => {
        const token = this.getToken(req);
        jwt.verify(token, process.env.JWT_PRIVATE_KEY, (error, decode) => {
            if (error) {
                res.status(401).json({ info: 'Usuario no autorizado' });
            } else {
                next();
            }
        });
    }

    // Properties initializer

    getToken = (req) => {
        //obtener datos del token
        let token = null;
        let authorization = req.headers.authorization;
        if (authorization != null && authorization != undefined) {
            let arrayAuth = authorization.split(" ");
            token = arrayAuth[1];
        }

        return token;

    }
}

module.exports = TokenController;
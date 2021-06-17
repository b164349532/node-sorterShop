const jwt = require('jsonwebtoken')
const SIGN_KEY = '23e29%#@!r4s2w'

class JwtUtil {
    getToken(userData) {
        return jwt.sign(userData, SIGN_KEY, {expiresIn: '2d'})
    }
    verify(token) {
        return jwt.verify(token, SIGN_KEY).username
    }
}

module.exports = new JwtUtil()
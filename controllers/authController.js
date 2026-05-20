const jwt = require('jsonwebtoken');

const login = async (req, res) => {

    const { username, password } = req.body;

    // Usuario demo
    if (username !== 'admin' || password !== '123456') {

        return res.status(401).json({
            message: 'Credenciales inválidas'
        });
    }

    const token = jwt.sign(
        {
            username: username
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '1h'
        }
    );

    res.json({
        message: 'Login exitoso',
        token: token
    });
};

module.exports = {
    login
};

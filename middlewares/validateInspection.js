const validateInspection = (req, res, next) => {

    const { product, temperature, quality } = req.body;

    if (!product || !temperature || !quality) {

        return res.status(400).json({
            message: 'Todos los campos son obligatorios'
        });
    }

    if (typeof product !== 'string') {

        return res.status(400).json({
            message: 'Product debe ser texto'
        });
    }

    if (typeof temperature !== 'number') {

        return res.status(400).json({
            message: 'Temperature debe ser numérico'
        });
    }

    next();
};

module.exports = validateInspection;

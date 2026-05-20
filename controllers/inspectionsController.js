const Inspection = require('../models/Inspection');

const getInspections = async (req, res) => {

    try {

        const inspections = await Inspection.find();

        res.json(inspections);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

const createInspection = async (req, res) => {

    try {

        const inspection = new Inspection({
            product: req.body.product,
            temperature: req.body.temperature,
            quality: req.body.quality
        });

        const savedInspection = await inspection.save();

        res.status(201).json({
            message: 'Inspección creada correctamente',
            data: savedInspection
        });

    } catch (error) {

        res.status(400).json({
            message: error.message
        });
    }
};

const updateInspection = async (req, res) => {

    try {

        const updatedInspection = await Inspection.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedInspection) {

            return res.status(404).json({
                message: 'Inspección no encontrada'
            });
        }

        res.json({
            message: 'Inspección actualizada correctamente',
            data: updatedInspection
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

const deleteInspection = async (req, res) => {

    try {

        const deletedInspection = await Inspection.findByIdAndDelete(req.params.id);

        if (!deletedInspection) {

            return res.status(404).json({
                message: 'Inspección no encontrada'
            });
        }

        res.json({
            message: 'Inspección eliminada correctamente',
            data: deletedInspection
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    getInspections,
    createInspection,
    updateInspection,
    deleteInspection
};
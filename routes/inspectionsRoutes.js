const authMiddleware = require('../middlewares/authMiddleware');

const express = require('express');

const validateInspection = require('../middlewares/validateInspection');

const router = express.Router();

const {
    getInspections,
    createInspection,
    updateInspection,
    deleteInspection
} = require('../controllers/inspectionsController');

router.get('/', authMiddleware, getInspections);

router.post('/', validateInspection, createInspection);

router.put('/:id', updateInspection);

router.delete('/:id', deleteInspection);

module.exports = router;

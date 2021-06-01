import express from 'express';

import { getData, getAllData, importData, updateData, deleteData } from '../controllers/data.js';

const router = express.Router();

router.get('/', getAllData);
router.post('/', importData);
router.get('/:id', getData);
router.patch('/:id', updateData);
router.delete('/:id', deleteData);

export default router;
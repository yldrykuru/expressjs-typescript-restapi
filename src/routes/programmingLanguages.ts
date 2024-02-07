import express from 'express';
import programmingLanguagesController from '../controllers/programmingLanguages/programmingLanguages';

const router = express.Router();

router.get('/', programmingLanguagesController.get);
router.get('/:id', programmingLanguagesController.getById);
router.get('/auto/generate', programmingLanguagesController.autoGenerator);
router.post('/', programmingLanguagesController.create);
router.put('/:id', programmingLanguagesController.update);
router.delete('/:id', programmingLanguagesController.remove);

export default router;
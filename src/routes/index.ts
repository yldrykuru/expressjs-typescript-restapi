
import { Router } from 'express';
import programmingLanguagesRouter from './programmingLanguages';

const router = Router();

router.use('/programming-languages', programmingLanguagesRouter);

export default router;
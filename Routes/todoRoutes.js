import {Router} from 'express';
import { createTask,getTask,updateTask,deleteTask } from '../controllers/todoController.js';

const router = Router();

router.post('/create',createTask);
router.get('/',getTask);
router.patch('/update/:id',updateTask);
router.delete('/delete/:id',deleteTask)

export default router;
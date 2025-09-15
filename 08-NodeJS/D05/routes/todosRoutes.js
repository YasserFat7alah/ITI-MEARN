import express from 'express';

import { authentication, restrictTo } from '../middlewares/auth.js';
import validate from '../middlewares/validator.js';
import { todoSchema } from './../validators/todoValidator.js';
import {
    createTodo,
    updateTodo,
    deleteTodo,
    readAllTodos,
    readTodo
} from '../controllers/todosControllers.js';

const router = express.Router()

/* --- --- --- --- MIDDLEWARES --- --- --- --- */
router.use(authentication);           // AUTHENTICATION
/* --- --- --- --- ----------- --- --- --- --- */


/* --- --- --- --- ENDPOINTS --- --- --- --- */
router.post('/', restrictTo('user', 'admin'), validate(todoSchema), createTodo);            // CREATE
router.get('/', restrictTo('user', 'admin'), readAllTodos);                                 // READ ALL
router.get('/:id', restrictTo('user', 'admin'), readTodo);                                  // READ ONE
router.patch('/:id', restrictTo('user', 'admin'), updateTodo);                              // UPDATE
router.delete('/:id', restrictTo('admin'), deleteTodo);                                     // DELETE
/* --- --- --- --- --------- --- --- --- --- */

export default router;
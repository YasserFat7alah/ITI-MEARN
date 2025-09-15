import express from 'express';

import {
    createUser,
    deleteUser,
    getAllUsers,
    getUser,
    updateUser,
    loginUser
} from '../controllers/userControllers.js';
import validate from '../middlewares/validator.js';
import { userSchema } from '../validators/userValidator.js';



const router = express.Router();

/* --- --- --- --- ENDPOINTS --- --- --- --- */
router.route('/')
    .post(validate(userSchema), createUser)     // CREATE
    .get(getAllUsers);                          // READ ALL

router.route('/:id')
    .get(getUser)                               // READ ONE
    .patch(updateUser)                          // UPDATE
    .delete(deleteUser);                        // DELETE

router.post('/login', loginUser);
/* --- --- --- --- --------- --- --- --- --- */

export default router;
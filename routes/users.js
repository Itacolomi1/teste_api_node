import express, { response } from 'express';
import {createUser, getUser, deleteUser, patchUser, getAllUsers} from '../controllers/users.js'
const router = express.Router();


// all routes here are starting with /users
router.get('/', getAllUsers )

router.post('/',createUser);
// /users/2 => req.params {id: 2}
router.get('/:id',getUser);

router.delete('/:id',deleteUser)

router.patch('/:id', patchUser);

export default router;
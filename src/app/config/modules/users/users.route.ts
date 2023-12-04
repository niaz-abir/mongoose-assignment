import express from 'express';
import { controllers } from './users.contorller';

const router = express.Router();

router.post('/users', controllers.createUser);

router.get('/users', controllers.getAllUsers);
router.get('/users/:userId', controllers.getSingleUsers);
router.put('/users/:userId', controllers.updateSingleUser);
router.delete('/users/:userId', controllers.deleteUser);
// router.put('/users/:userId/orders', controllers.updateBooking);
// router.get('/users/:userId/orders', controllers.updateFindBooking);

export const userRoutes = router;

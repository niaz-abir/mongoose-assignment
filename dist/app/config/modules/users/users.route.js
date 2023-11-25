"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const users_contorller_1 = require("./users.contorller");
const router = express_1.default.Router();
router.post('/users', users_contorller_1.controllers.createUser);
router.get('/users', users_contorller_1.controllers.getAllUsers);
router.get('/users/:userId', users_contorller_1.controllers.getSingleUsers);
router.put('/users/:userId', users_contorller_1.controllers.updateSingleUser);
router.delete('/users/:userId', users_contorller_1.controllers.deleteUser);
router.get('/users/:userId/orders', users_contorller_1.controllers.updateBooking);
exports.userRoutes = router;

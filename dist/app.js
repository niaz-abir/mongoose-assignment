"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_route_1 = require("./app/config/modules/users/users.route");
const app = (0, express_1.default)();
// parse
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api', users_route_1.userRoutes);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;

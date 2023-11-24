import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { userRoutes } from './app/config/modules/users/users.route';
const app: Application = express();

// parse
app.use(express.json());
app.use(cors());

app.use('/api', userRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;

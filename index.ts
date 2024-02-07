import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import routes from './src/routes';
//import ErrorHandler from './src/middlewares/errorHandler';
const app = express();
const port = Number(process.env.PORT) || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(ErrorHandler);
app.use(cors({
  origin: 'http://localhost:' + port
}));
app.use('/api/v1', routes);
app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
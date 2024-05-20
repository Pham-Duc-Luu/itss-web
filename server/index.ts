import express, { Express, Request, Response, Application } from 'express';
import helmet from 'helmet';
import compression from 'compression';
import { json } from 'body-parser';
import cors from 'cors';
import { config } from 'dotenv';
import appRouter from './src/boudary/index.router';
import { connectDB } from './src/database/mongodb/connect.mongo';
import Logger from './src/lib/logger';

config();
// * innitialization
const app: Application = express();
const PORT = process.env.PORT || 5001;

// * middleware
app.use(helmet());
app.use(compression());
app.use(json());
app.use(express.urlencoded({ extended: true })); // support encoded bodies

// * Connect to database
connectDB()
  .then((_) => console.log(_))
  .catch((err) => console.log(err));

// * api version
app.use(appRouter);
const server = app.listen(PORT, () => {
  console.log(`authentication server is running on port ${PORT}`);
});

process.on('unhandledRejection', (error, promise) => {
  console.log(`Logged Error: ${error}`);
  server.close(() => process.exit(1));
});

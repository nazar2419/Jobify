import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import 'express-async-errors';
import morgan from 'morgan';

<<<<<<< HEAD
=======
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

import helmet  from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';

>>>>>>> added debounce function for search
//db and authenticateUser
import connectDB from './db/connect.js';

// routers
import authRouter from './routes/authRoutes.js';
import jobsRouter from './routes/jobsRoutes.js';

// middleware 
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import authenticateUser from './middleware/auth.js'

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

<<<<<<< HEAD
app.use(express.json());

app.get('/', (req, res) => {
  res.json({msg: 'Welcome!'});
});
app.get('/api/v1', (req, res) => {
  res.json({msg: 'Api!'});
});
=======
const __dirname= dirname(fileURLToPath(import.meta.url))
// only when ready to deploy
app.use(express.static(path.resolve(__dirname,'./client/build')))

app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
>>>>>>> added debounce function for search

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', authenticateUser, jobsRouter);

<<<<<<< HEAD
=======
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
})


>>>>>>> added debounce function for search
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server oslistening on port ${port}...`)}
    )
  } catch (error) {
    console.log(error);
  }
}

start();
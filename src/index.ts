import express, {Application} from 'express';
import dotenv from 'dotenv';
import logger from './utils/log/logger';

dotenv.config();

const app: Application = express();
const NAMESPACE = 'Server';

// Middleware
app.use(express.json());

// Routes

app.listen(process.env.PORT, () => logger.info(NAMESPACE, `Up and running on port ${process.env.PORT}`));

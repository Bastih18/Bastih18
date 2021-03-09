import express, {Application} from 'express';
import dotenv from 'dotenv';
import logger from './utils/log/logger';

dotenv.config();

//Routes

import guildRoute from "./routes/guild";

const app: Application = express();
const NAMESPACE = 'Server';

// Middleware
app.use(express.json());

// Routes
guildRoute("/guilds", app);

app.listen(process.env.PORT, () => logger.info(NAMESPACE, `Up and running on port ${process.env.PORT}`));

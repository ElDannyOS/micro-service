import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { eventBrokerController } from './controllers/events.controller.js';

dotenv.config();

const app = express();
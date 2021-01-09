#!/usr/bin/env node
import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { configureRoutes } from './controllers';
import errorMiddleware from './middleware/errorMiddleware';

const port = process.env.LCP_SERVER_PORT || 4200;
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

configureRoutes(app);

app.use(errorMiddleware);

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`LCP server listening on port ${port}`);
});

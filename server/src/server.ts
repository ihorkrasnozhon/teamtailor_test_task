import express from 'express';
import cors from 'cors';
import * as CandidateController from './Controllers/candidates.controller.js';
import {errorHandler} from "./Middleware/errorHandler.middleware.js";
import {gracefulShutdown} from "./Services/gracefulShutdown.service.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get('/candidates-with-applications', CandidateController.getCandidates);
app.get('/export-candidates-csv', CandidateController.exportCsv);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.use(errorHandler);

process.on('SIGTERM', () => gracefulShutdown('SIGTERM', server));
process.on('SIGINT', () => gracefulShutdown('SIGINT', server));

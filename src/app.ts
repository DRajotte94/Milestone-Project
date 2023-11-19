import express, { Request, Response } from 'express';
import spellsRouter from './spells/spells.routes';
import helmet from 'helmet';
import cors from 'cors';
import logger from './middleware/logger.middleware'
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

// enable all CORS requests
app.use(cors());

// parse JSON bodies
app.use(express.json());
// parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// adding set of security middleware
app.use(helmet());

console.log(process.env.MY_SQL_DB_HOST);

//MySQLConnector.initializeMySqlConnector();

if (process.env.NODE_ENV == 'development') {
    // add logger middleware
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode');
}

// Application routes
// root route
app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Welcome to the DnD API</h1>');
});
// adding router middleware
app.use('/', [spellsRouter, spellsRouter]);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});


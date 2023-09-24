import cors from 'cors';
import express from 'express';
import { createServer } from 'http';
import { CONFIG } from './constants/config';
import morgan from './libs/morgan';
import routes from './routes';

const app = express();

const { PORT } = CONFIG;

app.use(cors());
const http = createServer(app); // Criando protocolo http
app.use(express.json());
app.use(morgan);
app.use(routes);

http.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

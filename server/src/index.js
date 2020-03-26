import cors from 'cors';
import express from 'express';

import router from './routes';
import { PORT } from './config';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => console.log(`Server is up on PORT: ${PORT} 🚀`));

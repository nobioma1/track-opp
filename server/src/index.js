import cors from 'cors';
import express from 'express';

import { PORT } from './config';

const app = express();

app.use(cors());

app.listen(PORT, () => console.log(`Server is up on PORT: ${PORT} 🚀`));

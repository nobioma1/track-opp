import cors from 'cors';
import express from 'express';

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.listen(PORT, () => console.log(`Server is up on PORT: ${PORT} 🚀`));

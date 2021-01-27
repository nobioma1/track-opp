const cors = require('cors');
const express = require('express');

const router = require('./routes');
const { PORT } = require('./config');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', router);
app.use('/', (req, res) => {
  return res.status(200).json({ message: 'up' });
});

app.use((err, req, res) => {
  res.status(err.status || 500);
  return res.json({
    message: err.message,
  });
});

app.listen(PORT, () => console.log(`Server is up on PORT: ${PORT} 🚀`));

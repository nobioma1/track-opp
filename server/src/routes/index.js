import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.status(200).json({ message: 'up' });
});

router.get('/suggestions', (req, res) => {
  res.end();
});

router.post('/suggestions', (req, res) => {
  console.log(req.body.info);
  res.end();
});

export default router;

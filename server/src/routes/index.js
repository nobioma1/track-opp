const { Router } = require('express');

const redisDB = require('../db/redisClient');
const checkField = require('../middlewares/checkField');

const router = Router();

const FIELDS = [
  // 'Software Engineer',
  // 'React',
  // 'Python',
  // 'JavaScript',
  // 'FullStack Engineer',
  'Junior(Remote)',
  'All Roles',
];

router.get('/fields/:userId', async (req, res, next) => {
  try {
    const userSubscriptions = await redisDB.getValue(req.params.userId);
    const subscriptions = FIELDS.map(field => ({
      name: field,
      subscribed: !!userSubscriptions && userSubscriptions.includes(field),
    }));
    res.status(200).send({ fields: subscriptions });
  } catch (error) {
    next(error);
  }
});

router.post('/subscribe/:userId', checkField, async (req, res, next) => {
  const { field } = req.body;
  try {
    const userSubscriptions = await redisDB.getValue(req.params.userId);
    if (userSubscriptions && userSubscriptions.includes(field)) {
      return res.status(200).send({ message: 'Already subscribed' });
    }
    const success = await redisDB.setValue(req.params.userId, [
      ...(userSubscriptions || []),
      field,
    ]);
    res.status(201).send({ name: field, subscribed: !!success });
  } catch (error) {
    next(error);
  }
});

router.post('/unsubscribe/:userId', checkField, async (req, res, next) => {
  const { field } = req.body;
  try {
    const userSubscriptions = await redisDB.getValue(req.params.userId);
    const update = userSubscriptions.filter(item => item !== field);
    await redisDB.setValue(req.params.userId, update);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

router.get('/postings/:userId', async (req, res, next) => {
  try {
    const postings = await redisDB.getValue('jobPostings');
    const subscriptions = await redisDB.getValue(req.params.userId);
    // structure data
    // compare what posting user is subscribed to
    // send response to the frontend as an array
    res.status(200).end();
  } catch (error) {}
});

module.exports = router;

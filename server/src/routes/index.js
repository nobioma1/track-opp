const { Router } = require('express');

const redisDB = require('../db/redisClient');
const checkField = require('../middlewares/checkField');

const router = Router();

const FIELDS = ['Remote', 'Junior', 'Senior', 'Middle'];

router.get('/fields/:userId', async (req, res, next) => {
  try {
    const userSubscriptions = await redisDB.getValue(req.params.userId);
    const subscriptions = FIELDS.map((field) => ({
      name: field,
      subscribed: !!userSubscriptions[field],
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
    if (userSubscriptions[field]) {
      return res.status(200).send({ message: 'Already subscribed' });
    }
    const success = await redisDB.setValue(req.params.userId, {
      ...(userSubscriptions || {}),
      [field]: true,
    });
    res.status(201).send({ name: field, subscribed: !!success });
  } catch (error) {
    next(error);
  }
});

router.post('/unsubscribe/:userId', checkField, async (req, res, next) => {
  const { field } = req.body;
  try {
    const userSubscriptions = await redisDB.getValue(req.params.userId);
    delete userSubscriptions[field];
    await redisDB.setValue(req.params.userId, userSubscriptions);
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

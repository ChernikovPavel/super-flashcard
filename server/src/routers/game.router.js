const router = require('express').Router();
const { Topic, Question, Answer } = require('../../db/models');

router.get('/deck', async (req, res) => {
  try {
    const deck = await Topic.findAll({
      include: [{ model: Question, include: { model: Answer } }],
    });
    res.send(deck);
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router;

const router = require('express').Router();
const { Topic, Question, Answer } = require('../../db/models');

router.get('/deck', async (req, res) => {
  try {
    const deck = await Topic.findAll({
      include: [{ model: Question, include: { model: Answer } }],
      order: [[{model: Question}, 'score', 'ASC']]
    });
    deck.map((el, i) => {el.dataValues.topicIndex = i ;return el.dataValues.Questions.map(el2 => {el2.dataValues.avaible = true; return el2})})
    console.log(deck[0])
    res.send(deck);
  } catch (error) {
    console.log(error)
    res.sendStatus(500);
  }
});

module.exports = router;

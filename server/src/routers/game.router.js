const router = require('express').Router();
const { Topic, Question, Answer, Rating } = require('../../db/models');

router.get('/deck', async (req, res) => {
  try {
    const deck = await Topic.findAll({
      include: [{ model: Question, include: { model: Answer } }],
      order: [[{model: Question}, 'score', 'ASC']]
    });
    deck.map((el, i) => {el.dataValues.topicIndex = i ;return el.dataValues.Questions.map(el2 => {el2.dataValues.avaible = true; return el2})})
    res.send(deck);
  } catch (error) {
    console.log(error)
    res.sendStatus(500);
  }
});

router.post('/rating', async (req,res) => {
  try {
    const {UserId, score} = req.body
    const data = await Rating.create({UserId, score})
    console.log(data)
    res.status(201).json(data)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})

module.exports = router;

const router = require('express').Router();
const { User, Rating } = require('../../db/models');

router
  .get('/', async (req, res) => {
    try {
      const entries = await Rating.findAll({
        include: [
            {
              model: User,
            },
        ], order: [['score', 'DESC']],
        limit: 5    
      });
      res.json(entries);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  })
module.exports = router;
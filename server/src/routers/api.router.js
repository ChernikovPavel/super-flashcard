const router = require("express").Router();

const authRouter = require("./auth.router");
const tokenRouter = require("./token.router");
const gameRouter = require('./game.router')
const statsRouter = require("./stats.router");

router.use("/auth", authRouter);
router.use("/tokens", tokenRouter);
router.use('/game', gameRouter)
router.use("/stats", statsRouter);

module.exports = router;

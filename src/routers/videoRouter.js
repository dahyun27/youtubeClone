import express from express;

const videoRouter = express.Router();

videoRouter.use("/watch", videoRouter);
import express from express;

const globalRouter = express.Router();

globalRouter.use("/", globalRouter);

export default globalRouter;
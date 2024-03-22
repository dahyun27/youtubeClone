import express from express;

const userRouter = express.Router();

userRouter.use("/edit", userRouter);
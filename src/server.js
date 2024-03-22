import express from "express";
import morgan from "morgan";

const app = express();
const logger = morgan("dev");
app.use(logger);

const handleHome = (req, res) => {
  return res.send("Home");
};

const handleEditUser = (req, res) => {
  return res.send("Edit user");
};

const handleWatchVideo = () => {
  return res.send("Watch Video");
};

const listening = () => console.log(`listening on htttp://localhost:${PORT}`);
app.listen(PORT, listening);

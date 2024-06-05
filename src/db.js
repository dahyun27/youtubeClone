import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/youtube");

const db = mongoose.connection;

const errorFunc = (error) => console.log("❌DB error: ", error);
const openFunc = () => console.log("🔥Connected to DB");
db.on("error", errorFunc);
db.once("open", openFunc);

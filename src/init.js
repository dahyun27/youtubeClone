import "./db";
import "./models/Video";
import app from "./server";

const PORT = 4000;

const listening = () => console.log(`🔥listening on htttp://localhost:${PORT}`);
app.listen(PORT, listening);

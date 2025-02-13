require("dotenv").config({ path: "./config.env" });
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

const mongouri = process.env.MONGO_URI;
mongoose
    .connect(mongouri)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));


app.use("/api", require("./routes/index"));

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});

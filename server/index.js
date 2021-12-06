const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");

const knex = require("knex")(require("./knexfile").development);
const userRoutes = require("./routes/userRoutes");
const memoryRoutes = require("./routes/memoryRoutes");

app.use(cors());
app.use(express.json());
app.use("/profile", userRoutes);
app.use("/memories", memoryRoutes);

app.listen(PORT, () => {
  console.log("The server is live on port " + PORT);
});

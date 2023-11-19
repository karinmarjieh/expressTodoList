const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/.env" });
const port = process.env.PORT || 5001;
const appRouter = require("./routes/blogPostRoutes");

const app = express();
app.use(express.json());
app.use("/todos", appRouter);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});

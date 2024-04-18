import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import adminRouter from "./routes/adminRoutes.js";

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

// * Routes
app.use('/api/user', userRouter)
app.use('/api/admin', adminRouter)

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.sendStatus(200).send({
    message: "server is running",
  });
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is up and running on the port ${port}`);
});

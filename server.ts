import { app } from "./src/app";
import * as mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Running on port: ", port);
  console.log("--------------------------");
});

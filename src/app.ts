import * as express from "express";
import { userService, metricService } from "./libs";

export const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const user = await userService.getAllUsers();
  res.json(user);
});

app.post("/", async (req, res) => {
  const name = `foo-${Math.random()}`;
  const password = `bar-${Math.random()}`;
  const userToSave = { name, password };
  const user = await userService.saveUser(userToSave);
  metricService.userSignedUp(user._id);

  res.json(user);
});

import { Router } from "express";
import UserController from "../controllers/UserController.js";

const routes = Router();
const userController = new UserController();
routes.get("/hola", (req, res) => {
  res.send("hola mundssso");
});

routes.get("/users", userController.getAllUsers);
routes.post("/user", userController.createUser);

export default routes;

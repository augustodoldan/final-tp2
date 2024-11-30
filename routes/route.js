import { Router } from "express";
import UserController from "../controllers/UserController.js";

const routes = Router();
const userController = new UserController();

routes.get("/users", userController.getAllUsers);
routes.post("/user", userController.createUser);

routes.use((error, req, res, next) => {
  console.log("entor al middleware");

  res.status(error.status).json({ message: error.message });
});
export default routes;

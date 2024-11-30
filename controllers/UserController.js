import UserService from "../services/UserService.js";
import CustomError from "../utils/errors/CustomError.js";

class UserController {
  userService = new UserService();

  createUser = async (req, res, next) => {
    try {
      const { id, name } = req.body;
      if (!id || !name) {
        throw new CustomError("El id y el nombre son obligatorios", 400);
      }
      const user = await this.userService.addUser(id, name);
      res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  };

  getAllUsers = async (req, res, next) => {
    try {
      const users = await this.userService.getAllUsers();
      if (users) {
        throw new CustomError("No hay usuarios", 404);
      }
      res.status(200).send(users);
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;

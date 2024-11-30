import UserService from "../services/UserService.js";

class UserController {
  userService = new UserService();

  createUser = async (req, res) => {
    try {
      const { id, name } = req.body;
      if (!id || !name) {
        throw new Error("El id y el nombre son obligatorios");
      }
      const user = await this.userService.addUser(id, name);
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  getAllUsers = async (req, res) => {
    try {
      const users = await this.userService.getAllUsers();
      res.status(200).send(users);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
}

export default UserController;

import User from "../models/User.js";

class UserService {
  user = new User();

  addUser(id, name) {
    try {
      return this.user.create(id, name);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  getAllUsers() {
    return this.user.getAll();
  }
}

export default UserService;

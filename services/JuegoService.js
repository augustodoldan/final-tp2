import User from "../models/Juego.js";

class JuegoService {
  user = new User();

  addJuego(id, name) {
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

export default JuegoService;

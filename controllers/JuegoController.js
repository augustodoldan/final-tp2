import UserService from "../services/JuegoService.js";
import CustomError from "../utils/errors/CustomError.js";

class JuegoController {
  juegoService = new JuegoService();

  createJuego = async (req, res, next) => {
    try {
      const { nombre, categoria, precio, cantidadEnStock } = req.body;
      if (nombre || categoria || precio || cantidadEnStock) {
        throw new CustomError("El id y el nombre son obligatorios", 400);
      }
      const juego = await this.juegoService.addJuego(id, name);
      res.status(200).send(juego);
    } catch (error) {
      next(error);
    }
  };

  getAllJuegos = async (req, res, next) => {
    try {
      const juegos = await this.juegoService.getAllJuegos();
      if (juegos) {
        throw new CustomError("No hay usuarios", 404);
      }
      res.status(200).send(users);
    } catch (error) {
      next(error);
    }
  };
}

export default JuegoController;

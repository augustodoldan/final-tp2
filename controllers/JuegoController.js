import JuegoService from "../services/JuegoService.js";
import CustomError from "../utils/errors/CustomError.js";
import { validarJuego } from "../utils/validators/index.js";

class JuegoController {
  juegoService = new JuegoService();

  createJuego = async (req, res, next) => {
    try {
      const { nombre, categoria, precio, cantidadEnStock } = req.body;
      const juegoValidado = await validarJuego(
        nombre,
        categoria,
        precio,
        cantidadEnStock
      );
      const nuevoJuego = await this.juegoService.createJuego(juegoValidado);
      return res.status(201).json(nuevoJuego);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  registrarVenta = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { cantidadEnStock } = req.body;
      const juego = await this.juegoService.findJuegoById(id);
      if (!juego) {
        throw new CustomError("No se encontro el juego", 404);
      }
      const registrarVenta = this.juegoService.registrarVenta(
        id,
        cantidadEnStock
      );
      res.status(200).send("Juego eliminado");
    } catch (error) {
      next(error);
    }
  };
  /* getAllJuegos = async (req, res, next) => {
    try {
      const juegos = await this.juegoService.getAllJuegos();
      if (juegos) {
        throw new CustomError("No hay usuarios", 404);
      }
      res.status(200).send(juegos);
    } catch (error) {
      next(error);
    }
  }; */
}

export default JuegoController;

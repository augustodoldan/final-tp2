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
      const venta = await this.juegoService.registrarVenta(id, cantidadEnStock);
      res
        .status(200)
        .send(
          `Venta registada, te quedan ${venta.cantidadEnStock} del producto: ${venta.nombre}`
        );
    } catch (error) {
      next(error);
    }
  };
  getAllJuegos = async (req, res, next) => {
    try {
      const juegos = await this.juegoService.getAllJuegos();
      if (!juegos) {
        throw new CustomError("No hay juegos", 404);
      }
      res.status(200).send(juegos);
    } catch (error) {
      next(error);
    }
  };

  getUnidadesVendidas = async (req, res, next) => {
    try {
      const juegos = await this.juegoService.getAllJuegos();
      if (!juegos) {
        throw new CustomError("No hay juegos", 404);
      }
      const unidadesVendidas = juegos.reduce((acc, juego) => {
        return acc + juego.cantidadEnStock;
      }, 0);
      res.status(200).send({ unidadesVendidas });
    } catch (error) {
      next(error);
    }
  };

  obtenerPorCategorias = async (req, res, next) => {
    try {
      const categorias = await this.juegoService.obtenerPorCategorias();
      res.status(200).json({ cantidad: categorias });
    } catch (error) {
      console.log(error.message);
      res.status(500).send(error.message);
    }
  };
}

export default JuegoController;

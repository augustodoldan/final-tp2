import Juego from "../models/Juego.js";
import { v4 as uuidv4 } from "uuid";

class JuegoService {
  juego = new Juego();

  createJuego(juegoValidado) {
    try {
      //  @TODOAUGUSTO
      //const nuevoJuego = { ...juegoValidado, id: uuidv4() };

      const nuevoJuego = { ...juegoValidado, id: "12345" };

      return this.juego.create(nuevoJuego);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  registrarVenta(id, cantidadEnStock) {
    const registrarVenta = this.juego.registrarVenta(id, cantidadEnStock);
  }

  getAllJuegos() {
    return this.juego.getAll();
  }

  findJuegoById = (id) => {
    return this.juego.findJuegoById(id);
  };
}

export default JuegoService;

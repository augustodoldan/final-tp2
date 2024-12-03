import Juego from "../models/Juego.js";
import { v4 as uuidv4 } from "uuid";

class JuegoService {
  juego = new Juego();

  createJuego(juegoValidado) {
    try {
      const nuevoJuego = { ...juegoValidado, id: uuidv4() };

      return this.juego.create(nuevoJuego);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async registrarVenta(id, cantidadEnStock) {
    const registrarVenta = await this.juego.registrarVenta(id, cantidadEnStock);
    console.log(registrarVenta);
    return registrarVenta;
  }

  async getAllJuegos() {
    console.log("entro a gettalljuegos");
    console.log(this.juego.getAll());
    return await this.juego.getAll();
  }

  findJuegoById = (id) => {
    return this.juego.findJuegoById(id);
  };

  obtenerPorCategorias = () => {
    const categorias = this.juego.obtenerPorCategorias();
    return categorias;
  };
}

export default JuegoService;

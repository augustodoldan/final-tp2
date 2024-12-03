import CustomError from "../utils/errors/CustomError";

export const CATEGORIAS_PERMITIDAS = [
  "estrategia",
  "rol",
  "cartas",
  "familiar",
];

class Juego {
  juegos = [];

  create = async (juego) => {
    await this.juegos.push(juego);
    return juego;
  };

  findJuegoById = (id) => {
    console.log("entro a finjuyego");
    return this.juegos.find((juego) => juego.id === id);
  };

  getAll = async () => {
    return this.juegos;
  };

  registrarVenta = async (id, cantidadEnStock) => {
    const juegoEncontrado = this.juegos.find((juego) => juego.id === id);
    if (juegoEncontrado.cantidadEnStock < cantidadEnStock) {
      throw new CustomError("No hay suficiente stock");
    } else {
      juegoEncontrado.cantidadEnStock -= cantidadEnStock;
    }
  };
}

export default Juego;

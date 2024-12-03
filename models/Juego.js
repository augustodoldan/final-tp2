import CustomError from "../utils/errors/CustomError.js";

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

    return juegoEncontrado;
  };

  obtenerPorCategorias = () => {
    const categorias = {};
    this.juegos.forEach((categoria) => {
      if (categorias[categoria]) {
        categorias[categoria] += 1;
      } else {
        categorias[categoria] = 1;
        console.log(categorias[categoria], "cantidad en else");
      }
    });

    console.log(categorias);
    return categorias;
  };
}

export default Juego;

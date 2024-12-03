import { CATEGORIAS_PERMITIDAS } from "../../models/Juego.js";
import CustomError from "../errors/CustomError.js";

//const REGEX_STRING = /^[A-Za-z]+$/;

/* export const validateString = (word) => {
  console.log("entro al validaro");
  return REGEX_STRING.test(word);
}; */

export const validarJuego = async (
  nombre,
  categoria,
  precio,
  cantidadEnStock
) => {
  if (!nombre) {
    throw new CustomError("Tiene que poner un nombre de juego", 400);
  }

  if (!categoria || !CATEGORIAS_PERMITIDAS.includes(categoria)) {
    throw new CustomError("La categoría del juego es invallida", 400);
  }

  if (!precio || typeof precio !== "number" || precio <= 0) {
    throw new CustomError(
      "El precio no puede ser negativo y no puede estar vacio",
      400
    );
  }

  if (
    !cantidadEnStock ||
    typeof cantidadEnStock !== "number" ||
    cantidadEnStock < 0
  ) {
    throw new CustomError(
      "El stock no puede ser negativo y no puede estar vacio",
      400
    );
  }
  return {
    nombre,
    categoria,
    precio,
    cantidadEnStock,
  };
};

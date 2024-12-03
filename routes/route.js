import { Router } from "express";
import JuegoController from "../controllers/JuegoController.js";

const routes = Router();
const juegoController = new JuegoController();
//routes.get("/juegos", juegoController.getAllJuegos);
routes.post("/juego", juegoController.createJuego);
routes.delete("/juego/:id", juegoController.registrarVenta);
routes.use((error, req, res, next) => {
  console.log("entor al middleware");

  res.status(error.status).json({ message: error.message });
});
export default routes;

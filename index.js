import express from "express";
import routes from "./routes/route.js";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto:${PORT}`);
});

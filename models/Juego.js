class Juego {
  juegos = [];

  create = async (id, name) => {
    const juego = { id, name };
    console.log(user, "userrr en create");
    await this.juegos.push(user);
    return juego;
  };

  getAll = async () => {
    return this.juegos;
  };
}

export default Juego;

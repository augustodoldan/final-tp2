class User {
  users = [];

  create = async (id, name) => {
    const user = { id, name };
    console.log(user, "userrr en create");
    await this.users.push(user);
    return user;
  };

  getAll = async () => {
    return this.users;
  };
}

export default User;

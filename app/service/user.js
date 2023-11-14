const { Service } = require("egg");

class UserService extends Service {
  async find() {
    const query = { id: 1 };
    const user = await this.ctx.model.User.findAll(query);
    return user;
  }
}

module.exports = UserService;

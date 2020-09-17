const User = require("./models/User");

const createUser = async (_, { name, email }) => {
  const user = await User.findOne({ email });
  return user ? user : User.create({ name, email });
};

module.exports = {
  Query: {
    user: (_, { id }) => User.findById(id),
    users: () => User.find(),
  },
  Mutation: {
    createUser,
  },
};

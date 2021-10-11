const { DB_USERNAME,DB_PASSWORD,DB_CLUSTER } = require("./config");

module.exports = {
  MongoURI: `mongodb+srv://user:${DB_USERNAME}@${DB_CLUSTER}.${DB_PASSWORD}.mongodb.net/zoo_management_db?retryWrites=true&w=majority`
};

require('dotenv').config();

const knexconfig = require('./src/config/database');

module.exports = {
  local: knexconfig.local,
};

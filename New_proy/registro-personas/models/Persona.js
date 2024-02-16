const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Persona', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};

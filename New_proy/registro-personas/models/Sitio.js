const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Sitio', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    referencia: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};

const { Sequelize } = require('sequelize');
const PersonaModel = require('./Persona');
const SitioModel = require('./Sitio');
const VisitaModel = require('./Visita');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

const Persona = PersonaModel(sequelize);
const Sitio = SitioModel(sequelize);
const Visita = VisitaModel(sequelize);

Persona.belongsToMany(Sitio, { through: Visita });
Sitio.belongsToMany(Persona, { through: Visita });

module.exports = {
  Persona,
  Sitio,
  Visita,
  sequelize
};

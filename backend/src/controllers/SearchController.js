const Dev = require('../models/Dev');
const parseStringArray = require('../utils/parseStringArray');

module.exports = {
  async index(req, res) {
    const { latitude, longitude, techs } = req.query;

    const techsArray = parseStringArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });


    // Buscar todos os devs num raio de 10km
    // Filtrar por tecnologias

    return res.json({ devs });
  },
};

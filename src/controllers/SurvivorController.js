const service = require('../services/SurvivorService')

const createSurvivor = (req, res) => {
  // TODO - validate body
  service.createSurvivor(req.body)
    .then(result => {
      res.status(201).send(result.rows[0])
    })
}

module.exports = {
  createSurvivor
}

const repository = require('../repositories/SurvivorRepository')

const createSurvivor = (survivor) => {
  // TODO - validate survivor
  repository.create(survivor)
  return repository.getByName(survivor.name)
}

module.exports = {
  createSurvivor
}

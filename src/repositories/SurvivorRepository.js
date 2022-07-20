const db = require('../config/database')

const create = async (survivor) => {
  await db.query(
    'INSERT INTO survivor ' +
    ' (name, age, gender, latitude, longitude) ' +
    ' VALUES ($1, $2, $3, $4, $5)',
    [survivor.name, survivor.age, survivor.gender,
      survivor.latitude, survivor.longitude]
  )
}

const getByName = async (name) => {
  return db.query(
    ' SELECT * FROM survivor WHERE name = $1', [name]
  )
}

module.exports = {
  create,
  getByName
}

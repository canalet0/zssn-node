const { Pool } = require('pg')
const { datasource } = require('../../resources/application.json')

const pool = new Pool({
  host: datasource.host,
  port: datasource.port,
  database: datasource.name,
  user: datasource.username,
  password: datasource.password
})

pool.on('connect', () => {
  console.log('Database connected!')
})

module.exports = {
  async query (text, params) {
    try {
      const start = Date.now()
      const res = await pool.query(text, params)
      const duration = Date.now() - start
      console.log('executed query', { text, duration, rows: res.rowCount })
      console.debug('params', params)
      return res
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}

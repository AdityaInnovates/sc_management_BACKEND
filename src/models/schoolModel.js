const { pool } = require('../config/db');

class SchoolModel {
  static async create(schoolData) {
    const { name, address, latitude, longitude } = schoolData;
    const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
    const [result] = await pool.execute(query, [name, address, latitude, longitude]);
    return result.insertId;
  }

  static async getAll() {
    const query = 'SELECT * FROM schools';
    const [rows] = await pool.execute(query);
    return rows;
  }
}

module.exports = SchoolModel;

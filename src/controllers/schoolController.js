const SchoolModel = require('../models/schoolModel');
const { calculateDistance } = require('../utils/geospatial');

const addSchool = async (req, res) => {
  try {
    const schoolId = await SchoolModel.create(req.body);
    res.status(201).json({ 
      message: 'School added successfully', 
      schoolId 
    });
  } catch (err) {
    console.error('Add School Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const listSchools = async (req, res) => {
  try {
    const { lat, lon } = req.coords;
    const schools = await SchoolModel.getAll();

    const sortedSchools = schools.map(school => ({
      ...school,
      distance: calculateDistance(lat, lon, school.latitude, school.longitude)
    })).sort((a, b) => a.distance - b.distance);

    res.status(200).json(sortedSchools);
  } catch (err) {
    console.error('List Schools Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { addSchool, listSchools };

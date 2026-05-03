const { z } = require('zod');

const schoolSchema = z.object({
  name: z.string().min(1, 'Name is required').max(255),
  address: z.string().min(1, 'Address is required').max(500),
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
});

const validateSchool = (req, res, next) => {
  try {
    schoolSchema.parse(req.body);
    next();
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ 
        error: 'Validation failed', 
        details: err.errors.map(e => ({ path: e.path[0], message: e.message })) 
      });
    }
    console.error('Unexpected Error:', err);
    return res.status(500).json({ error: 'Internal Server Error', message: err.message });
  }
};

const validateCoordinates = (req, res, next) => {
  const { latitude, longitude } = req.query;
  
  const lat = parseFloat(latitude);
  const lon = parseFloat(longitude);

  if (isNaN(lat) || isNaN(lon) || lat < -90 || lat > 90 || lon < -180 || lon > 180) {
    return res.status(400).json({ 
      error: 'Invalid coordinates', 
      message: 'Latitude must be between -90 and 90, and longitude between -180 and 180.' 
    });
  }
  
  req.coords = { lat, lon };
  next();
};

module.exports = { validateSchool, validateCoordinates };

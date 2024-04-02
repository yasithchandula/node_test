const WeatherCast = require('../models/weatherCast.model');

// Controller for adding a new weather record
const addWeatherRecord = async (req, res) => {
    const { districtId, districtName, temperature, humidity, airPressure, dateTime } = req.body;

    try {
        // Check if there are any previous weather records for the district
        const previousRecords = await WeatherCast.find({ districtId });
        if (previousRecords.length > 0) {
            // Set isExpired to true for previous records
            await WeatherCast.updateMany({ districtId }, { isExpired: true });
        }

        // Create a new weather record
        const newWeatherRecord = new WeatherCast({
            districtId,
            districtName,
            temperature,
            humidity,
            airPressure,
            dateTime
        });
        await newWeatherRecord.save();
        
        res.status(201).json({ message: 'Weather record added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding weather record' });
    }
};

// Controller for deleting a weather record
const deleteWeatherRecord = async (req, res) => {
    const { id } = req.params; // Assuming the id of the weather record to delete is provided in the request parameters

    try {
        const deletedRecord = await WeatherCast.findByIdAndDelete(id);
        if (!deletedRecord) {
            return res.status(404).json({ message: 'Weather record not found' });
        }

        res.status(200).json({ message: 'Weather record deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting weather record' });
    }
};

// Controller for retrieving all expired weather forecasts
const getExpiredWeatherForecasts = async (req, res) => {
    try {
        const expiredForecasts = await WeatherCast.find({ isExpired: true });
        res.status(200).json(expiredForecasts);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving expired weather forecasts' });
    }
};

// Controller for retrieving all forecasts with isExpired set to false
const getNonExpiredWeatherForecasts = async (req, res) => {
    try {
        const nonExpiredForecasts = await WeatherCast.find({ isExpired: false });
        res.status(200).json(nonExpiredForecasts);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving non-expired weather forecasts' });
    }
};

module.exports = { addWeatherRecord, deleteWeatherRecord,getExpiredWeatherForecasts,getNonExpiredWeatherForecasts };

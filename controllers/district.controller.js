const District = require('../models/district.model');

// Controller for adding a district
const addDistrict = async (req, res) => {
    const { districtId, name, province } = req.body;

    try {
        // Check if district with the provided districtId already exists
        const existingDistrict = await District.findOne({ districtId });
        if (existingDistrict) {
            return res.status(400).json({ message: 'District already exists' });
        }

        // Create a new district
        const newDistrict = new District({ districtId, name, province });
        await newDistrict.save();
        
        res.status(201).json({ message: 'District added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding district' });
    }
};

// Controller for retrieving all districts
const getAllDistricts = async (req, res) => {
    try {
        const districts = await District.find();
        res.status(200).json(districts);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving districts' });
    }
};

module.exports = { addDistrict, getAllDistricts };

const Item = require("../models/item.model");


// Controller for adding a item
const addItem = async (req, res) => {
    const {Id,Name,Category,Link1,Link2,Link3,Description,Color,ItemSize,Price } = req.body;

    try {
        // Check if Item with the provided districtId already exists
        const existingItem = await Item.findOne({ Id });
        if (existingItem) {
            return res.status(400).json({ message: 'Item already exists' });
        }

        // Create a new Item
        const newItem = new Item({ Id,Name,Category,Link1,Link2,Link3,Description,Color,ItemSize,Price});
        console.log(newItem);
        await newItem.save();
        
        res.status(201).json({ message: 'Item added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding Item' });
    }
};

// Controller for retrieving all items
const getAllItem = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving items' });
    }
};

module.exports = {addItem, getAllItem};
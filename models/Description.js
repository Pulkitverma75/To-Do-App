const mongoose = require('mongoose');

const descriptionSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    }
});

const Description = mongoose.model("Description", descriptionSchema);

module.exports = Description;
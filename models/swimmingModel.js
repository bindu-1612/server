const mongoose = require('mongoose');

const swimmingTemplate = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    numReviews: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('Swimmingitems', swimmingTemplate)
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    userName: {
        type: String,
        unique: true
    }
});

mongoose.model('User', userSchema);

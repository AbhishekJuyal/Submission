const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    userName: {
        type: String,
        unique: true
    },
    accessToken: {
        type: String
    }
});

mongoose.model('User', userSchema);

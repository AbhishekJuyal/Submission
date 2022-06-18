
const mongoose = require("mongoose");
const express = require("express");
const bp = require('body-parser')

require('./models/Task');
require('./models/User');

const app = express();
app.use(bp.json());

require('./routes/taskRoute')(app);
require('./routes/userRoute')(app);

mongoUri = '',

mongoose.Promise = global.Promise;
mongoose.connect(mongoUri);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port`, PORT);
});

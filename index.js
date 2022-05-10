
const mongoose = require("mongoose");
const express = require("express");
const bp = require('body-parser')

require('./models/Task');
require('./models/User');

const app = express();
app.use(bp.json());

require('./routes/taskRoute')(app);
require('./routes/userRoute')(app);

mongoUri = 'mongodb://abhijuyal:KKhwgzjbXUGzZqVN@cluster0-shard-00-00.misbj.mongodb.net:27017,cluster0-shard-00-01.misbj.mongodb.net:27017,cluster0-shard-00-02.misbj.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-magpb1-shard-0&authSource=admin&retryWrites=true&w=majority',

mongoose.Promise = global.Promise;
mongoose.connect(mongoUri);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port`, PORT);
});

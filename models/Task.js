const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
  title: String,
  Description: String,
  TargetDate: { type: Date, default: Date.now },
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    Status: {
        type: String, enum: ['ToDo', 'In-progress','Done']
    }
});

mongoose.model('Task', TaskSchema);

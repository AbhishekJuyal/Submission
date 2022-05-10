
const mongoose = require("mongoose");

const Task = mongoose.model('Task');

module.exports = app => {
    app.get('/api/tasks/:id', async (req, res) => {

        const task = await Task.findOne({
            _user: req.user.id,
            _id: req.params.id
        });

        res.send(task);
    });

    app.get('/api/tasks',  async (req, res) => {

        const tasks = await Task.find({
            _user: req.user.id
        });

        res.send(tasks);
    });

    app.post('/api/tasks', async (req, res) => {
        const { title, Description, TargetDate, Status} = req.body;

        const task = new Task({
            title, Description, TargetDate, Status,
            _user: req.user.id
        });

        try {
            await task.save();
            res.send(task);

        } catch (err) {
            res.send(400, err);
        }

    });
};
const mongoose = require("mongoose");

const User = mongoose.model('User');

const jwt = require('jwt');
const secret = "a3da9772470e6e555f60aa7850588cad739789c3d10332ba85d348e0cc81a4c6a15e94a1ead5b6d4492d54303e5f35bf3af6e74da8afb814cc089375d28693e1"



    app.post('/api/user', async (req, res) => {
        console.log(req.body);
        const { userName } = req.body;

        const newUser = new User({
            userName
            
        });
        console.log(newUser);
        try {
            await newUser.save();
            res.status(200).send(newUser);

        } catch (err) {
            res.send(400, err);
        }

    });


app.post('/api/user/login',(req, res) => {
   
    const userName= req.body.userName;
    const user = { name: userName };

    const accessToken = jwt.sign(user, secret);

    res.json({ accessToken: accessToken });



});

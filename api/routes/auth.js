const router = require("express").Router();
const User = require("../models/User");
const bcryptjs = require('bcryptjs');

//Register
router.post("/register",async(req,res)=>{
    try {
        const salt = await bcryptjs.genSalt(10);
        const hashedPass = await bcryptjs.hash(req.body.password,salt)
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPass,
        });
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});  

//LOGIN
router.post("/login", async (req,res)=>{
    try {
        const user = await User.findOne({ username: req.body.username});
        !user && res.status(400).json("Wrong credentials!");

        const validated = await bcryptjs.compare(req.body.password ,user.password);
        !validated && res.status(400).json("Wrong credentials!");

        const {password,...others}= user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
}); 
module.exports = router;
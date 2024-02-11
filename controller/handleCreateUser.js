const users = require('../models/user');

async function handleCreateUser(req, res, next) {
    try {
        const userName = req.body.username;

      
        const existingUser = await users.findOne({ userName });

        if (existingUser) {
            return res.json({
                status: "error",
                message: "User already exists",
            });
        }

       
        const newUser = await users.create({
            userName: userName,
        });

        return res.json({
            status: "success",
            message: "User created successfully",
        });
    } catch (err) {
        console.error("Error creating user:", err);
        return res.status(500).json({
            status: "error",
            message: "Server error",
        });
    }
}

module.exports = { handleCreateUser };

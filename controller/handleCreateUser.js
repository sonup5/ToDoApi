const users = require('../models/user');

async function handleCreateUser(req, res, next) {
    try {
        const userName = req.body.username;
        await users.create({
            userName: userName,
        });
        return res.json({
            status: "success",
            message: "User created successfully",
        });
    } catch (err) {
        return res.json({
            status: "error",
            message: "Error creating user/user already exists",
        });
    }
}

module.exports = { handleCreateUser };

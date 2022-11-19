const User = require("../model/User");

// get all users 
exports.getAllUsers = async (req, res) => {
    try {
        let users = await User.find();
        if (users.length === 0) {
            res.status(404).json({
                success: false,
                message: "No User was found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Users found",
            count: users.length,
            users
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

// get single user
exports.getUser = async (req, res) => {
    try {
        let id = {_id: req.params.id}
        let user = await User.findOne(id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User Not Found"
            })
        }

        res.status(200).json({
            success: true,
            message: "User Found",
            user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}


// Create Users
exports.createUser = async (req, res) => {
    try {
        let user = await req.body
        let newUser = await User.create(user);

        if (!newUser) 
            return res.status(404).json({
                success: false,
                message: "User Creation Failed"
            })

            return res.status(200).json({
                success: true,
                message: "User Created Successfully",
                newUser
            })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }    
}

// Update a user
exports.updateUser = async (req, res) => {
    try {
        let id = {_id: req.params.id}
        let user = req.body;
        let update = await User.findOneAndUpdate(id, user, {new: true});

        if (!update) {
            return res.status(400).json({
                success: false,
                message: "User not updated"
            })
        }

        res.status(200).json({
            success: true,
            message: "User updated",
            update
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        })
    }
}

// Delete User
exports.deleteUser = async (req, res) => {
    try {
        let id = {_id: req.params.id};
        let deleted = await User.findOneAndRemove(id);

        if(!deleted) {
            return res.status(400).json({
                success: false,
                message: "User not deleted"
            })
        }

        res.status(200).json({
            success: true,
            message: "User deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}
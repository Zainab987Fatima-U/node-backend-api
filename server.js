const express = require("express");

const app = express();

app.use(express.json());

const users = [];

// Home Route
app.get("/", (req, res) => {
    res.send("Backend API Running");
});

// Get Users
app.get("/users", (req, res) => {
    res.json(users);
});

// Add User
app.post("/users", (req, res) => {

    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            message: "Name and Email required"
        });
    }

    users.push({
        name,
        email
    });

    res.status(201).json({
        message: "User Added Successfully",
        data: { name, email }
    });
});

app.listen(3000, () => {
    console.log("Server Running On Port 3000");
});
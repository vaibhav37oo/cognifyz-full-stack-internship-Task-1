const express = require("express");
const app = express();
const PORT = 3000;

// Set EJS as the template engine
app.set("view engine", "ejs");

// Read form data
app.use(express.urlencoded({ extended: true }));

// Serve CSS files
app.use(express.static("public"));

// Home page
app.get("/", (req, res) => {
    res.render("index");
});

// Handle registration form
app.post("/register", (req, res) => {
    const { name, email, phone, course } = req.body;

    res.render("success", {
        name: name,
        email: email,
        phone: phone,
        course: course
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
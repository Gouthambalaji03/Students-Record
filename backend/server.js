const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());

// MySQL database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'student_db'
});

//get all users
app.get('/', (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

//create a new user
app.post('/create', (req, res) => {
    const sql = "INSERT INTO users (`name`, `phone`, `email`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.phone,
        req.body.email
    ];  
    db.query(sql, [values], (err, data) => {
        if (err) return res.json(err);
        res.status(201).json("User created successfully");
    });
});

//update a user
app.put('/update/:id', (req, res) => {
    const sql = "UPDATE users SET `name` = ?, `phone` = ?, `email` = ? WHERE id = ?";
    const id = req.params.id;
    const values = [
        req.body.name,
        req.body.phone,
        req.body.email,
    ];  
    db.query(sql, [...values, id], (err, data) => {
        if (err) return res.json(err);
        res.status(200).json("User updated successfully");
    });
});

//delete a user
app.delete('/delete/:id', (req, res) => {
    const sql = "DELETE FROM users WHERE id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if (err) return res.json(err);
        res.status(200).json("User deleted successfully");
    });
});

// Start the server

app.listen(8081, () => {
    console.log("Server is running on port 8081");
});

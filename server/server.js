const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 5001;

app.use(cors());

const user = JSON.parse(fs.readFileSync('data/user.json', 'utf8'));
const cards = JSON.parse(fs.readFileSync('data/cards.json', 'utf8'));
const recentTransactions = JSON.parse(fs.readFileSync('data/recent-transactions.json', 'utf8'));
const stats = JSON.parse(fs.readFileSync('data/stats.json', 'utf8'));
const transferList = JSON.parse(fs.readFileSync('data/transfer-list.json', 'utf8'));


// USER ROUTE
app.get('/user', (req, res) => {
    res.send(JSON.stringify(user));
});

// CARDS ROUTE
app.get('/cards', (req, res) => {
    res.send(JSON.stringify(cards));
});

// TRANSFER LIST
app.get('/transfer-list', (req, res) => {
    res.send(JSON.stringify(transferList));
});

// RECENT TRANSACTIONS ROUTE
app.get('/recent-transactions', (req, res) => {
    res.send(JSON.stringify(recentTransactions));
});

// STATS
app.get('/stats', (req, res) => {
    res.send(JSON.stringify(stats));
});

app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
});
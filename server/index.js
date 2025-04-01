const express = require('express');
const cors = require('cors');

const user = require('./data/user.json');
const cards = require('./data/cards.json');
const recentTransactions = require('./data/recent-transactions.json');
const stats = require('./data/stats.json');
const transferList = require('./data/transfer-list.json');

const app = express();
app.use(cors());

// API routes
app.get('/api/user', (req, res) => res.json(user));
app.get('/api/cards', (req, res) => res.json(cards));
app.get('/api/transfer-list', (req, res) => res.json(transferList));
app.get('/api/recent-transactions', (req, res) => res.json(recentTransactions));
app.get('/api/stats', (req, res) => res.json(stats));


app.listen(5001, () => console.log("Server ready on port 5001."));

module.exports = app;

// server/index.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const emailRoute = require('./routes/email'); // ✅ import your route

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', emailRoute); // Now available at: POST /api/send-email

app.get('/', (req, res) => {
    res.send('Server is up and running!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
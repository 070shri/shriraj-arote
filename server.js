const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// File to store messages
const filePath = path.join(__dirname, 'messages.txt');

// Root route
app.get('/', (req, res) => {
    res.send('📡 Server is up! Use POST /contact to submit, and GET /messages to view.');
});

// POST /contact — save message to text file
app.post('/contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    const timestamp = new Date().toLocaleString();
    const formattedMessage = `
----------------------------
📩 New Contact Message
🕒 Time: ${timestamp}
👤 Name: ${name}
📧 Email: ${email}
📌 Subject: ${subject}
📝 Message: ${message}
----------------------------
`;

    // Append message to file
    fs.appendFile(filePath, formattedMessage, (err) => {
        if (err) {
            console.error('❌ Error saving message:', err);
            return res.status(500).send('Error saving message.');
        }
        console.log('✅ Message saved to messages.txt');
        res.status(200).send('Message received and saved!');
    });
});

// GET /messages — show raw content from messages.txt
app.get('/messages', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.send('No messages found.');
        }
        res.setHeader('Content-Type', 'text/plain');
        res.send(data);
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});

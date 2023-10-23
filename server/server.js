// Load environment variables
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;
const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const CORS_ORIGIN = IS_PRODUCTION ? 'http://your-react-app-url.com' : 'http://localhost:3000';

// Logging environment variables for debugging purposes
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("PORT:", PORT);
console.log("EMAIL:", process.env.EMAIL);
console.log("App Password exists:", !!process.env.APP_PASSWORD);

// Middleware setup
app.use(cors({
    origin: CORS_ORIGIN,
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(morgan('dev'));   // Logging
app.use(express.json());  // Parse JSON requests

// Placeholder route
app.get('/api', (req, res) => {
    res.json({ message: "Welcome to Ahmed's backend!" });
});

// Mock profile data
app.get('/api/profile', (req, res) => {
    const userData = {
        name: "Ahmed",
        email: "ahmedalraisi@gmail.com"
    };

    res.json(userData);
});

// Contact functionality
app.post('/api/contact', async (req, res) => {
    const { name, email, body } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,  
            pass: process.env.APP_PASSWORD  
        }
    });

    let mailOptions = {
        from: email, 
        to: 'ahmedalraisi@gmail.com', 
        subject: `New Contact Message from ${name}`, 
        text: body
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ message: 'Email sent!' });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: 'Failed to send the email.' });
    }
});

// Root route
app.get('/', (req, res) => {
    res.send('Root Route');
});

// Serve static assets if in production
if (IS_PRODUCTION) {
    const buildPath = path.join(__dirname, '..', 'client', 'build');
    app.use(express.static(buildPath));

    app.get('*', (req, res) => {
        res.sendFile(path.join(buildPath, 'index.html'));
    });
}

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

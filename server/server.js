const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const CORS_ORIGIN = IS_PRODUCTION ? 'http://your-react-app-url.com' : 'http://localhost:3000';

// Middleware setup
app.use(cors({
    origin: CORS_ORIGIN,
    methods: ["GET", "POST"],
    credentials: true
}));

// Additional Middleware
app.use(morgan('dev'));   // Logging
app.use(express.json());  // Parse JSON requests

// Placeholder route
app.get('/api', (req, res) => {
    res.json({ message: "Welcome to Ahmed's backend!" });
});

// User profile route
app.get('/api/profile', (req, res) => {
    res.json({
        name: 'Ahmed',
        email: 'ahmed@example.com',
        // ... other data fields
    });
});

// Root route
app.get('/', (req, res) => {
    res.send('Root Route');
});

// Optional: Favicon route
// app.get('/favicon.ico', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'path_to_your_favicon_directory', 'favicon.ico'));
// });

// Serve static assets if in production
if (IS_PRODUCTION) {
    // Set static folder
    const buildPath = path.join(__dirname, '..', 'client', 'build');
    app.use(express.static(buildPath));

    // Catch-all route to serve the React app
    app.get('*', (req, res) => {
        res.sendFile(path.join(buildPath, 'index.html'));
    });
}

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(helmet()); // Helmet adds security headers to HTTP responses
app.use(morgan('combined')); // Morgan for request logging

// Routes
app.use("/api/v1/dalle", dalleRoutes);

// Default route
app.get('/', (req, res) => {
  res.status(200).json({ message: "Welcome to Fashionify's T-shirt Design Service. Let your creativity flourish!" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}. Ready to design amazing T-shirts!`));

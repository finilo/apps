import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Health check interface
interface HealthResponse {
  status: string;
  timestamp: string;
  uptime: number;
}

// API response interface
interface ApiResponse {
  message: string;
  version?: string;
}

// Routes
app.get('/', (req: Request, res: Response<ApiResponse>) => {
  res.json({ 
    message: 'Finilo API Server is running!',
    version: '1.0.0'
  });
});

app.get('/health', (req: Request, res: Response<HealthResponse>) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Finilo API server running on port ${PORT}`);
  console.log(`📊 Health check available at http://localhost:${PORT}/health`);
});


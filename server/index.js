import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { OAuth2Client } from 'google-auth-library';


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Initialize Google OAuth client
const oauth2Client = new OAuth2Client(
  process.env.VITE_GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET
);

// Endpoint to fetch calendar events
app.get('/api/events', async (req, res) => {
  try {
    const { token } = req.headers;
    
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    oauth2Client.setCredentials({ access_token: token });

    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
    
    const response = await calendar.events.list({
      calendarId: 'primary',
      timeMin: (new Date()).toISOString(),
      maxResults: 100,
      singleEvents: true,
      orderBy: 'startTime',
    });

    res.json(response.data.items);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
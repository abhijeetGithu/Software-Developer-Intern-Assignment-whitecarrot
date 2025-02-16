import { useState, useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Calendar } from 'lucide-react';
import { LoginButton } from './components/LoginButton';
import { EventsTable } from './components/EventsTable';
import { DateFilter } from './components/DateFilter';
import type { CalendarEvent, DateRange } from './types';

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

function App() {
  const [token, setToken] = useState<string | null>(null);
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<CalendarEvent[]>([]);
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: null,
    endDate: null,
  });

  useEffect(() => {
    if (!token) return;

    const fetchEvents = async () => {
      try {
        const response = await fetch(`${API_URL}/api/events`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        if (!response.ok) throw new Error('Failed to fetch events');
        
        const data = await response.json();
        setEvents(data);
        setFilteredEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, [token]);

  useEffect(() => {
    let filtered = [...events];

    if (dateRange.startDate) {
      filtered = filtered.filter(
        (event) => new Date(event.start.dateTime) >= dateRange.startDate!
      );
    }

    if (dateRange.endDate) {
      filtered = filtered.filter(
        (event) => new Date(event.end.dateTime) <= dateRange.endDate!
      );
    }

    setFilteredEvents(filtered);
  }, [events, dateRange]);

  if (!GOOGLE_CLIENT_ID) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <Calendar className="w-16 h-16 text-red-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Configuration Required
          </h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Please add your Google Client ID to the .env file:
            <br />
            <code className="bg-gray-200 px-2 py-1 rounded mt-2 block">
              VITE_GOOGLE_CLIENT_ID=your_client_id_here
            </code>
          </p>
        </div>
      </div>
    );
  }

  if (!token) {
    return (
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
          <div className="text-center mb-8">
            <Calendar className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Google Calendar Viewer
            </h1>
            <p className="text-gray-600">
              Sign in with Google to view your calendar events
            </p>
          </div>
          <LoginButton onSuccess={setToken} />
        </div>
      </GoogleOAuthProvider>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Your Calendar Events
          </h1>
          <div className="mb-6">
            <DateFilter
              dateRange={dateRange}
              onDateRangeChange={setDateRange}
            />
          </div>
          <EventsTable events={filteredEvents} />
        </div>
      </div>
    </div>
  );
}

export default App;
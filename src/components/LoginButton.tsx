import { useGoogleLogin } from '@react-oauth/google';
import { Calendar } from 'lucide-react';

interface LoginButtonProps {
  onSuccess: (token: string) => void;
}

export function LoginButton({ onSuccess }: LoginButtonProps) {
  const login = useGoogleLogin({
    onSuccess: (response) => onSuccess(response.access_token),
    scope: 'https://www.googleapis.com/auth/calendar.readonly',
  });

  return (
    <button
      onClick={() => login()}
      className="flex items-center gap-2 bg-white text-gray-800 px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <Calendar className="w-5 h-5" />
      <span>Sign in with Google</span>
    </button>
  );
}
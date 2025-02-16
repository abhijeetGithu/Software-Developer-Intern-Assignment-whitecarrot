# Google Calendar Events Web Application

This project is developed as part of the Software Developer Intern assignment for Whitecarrot.io. The application demonstrates skills in backend development, frontend development, API integration, UI/UX design, and overall code quality.

---

## 📚 Overview

This is a web application that allows users to:
- **SSO Login with Google:** Securely log in using Google Single Sign-On.
- **Display Google Calendar Events:** Fetch and display all Google Calendar events for the authenticated user in a table format with the most recent events displayed at the top.
- **Filter Functionality:** Filter events by date for better user experience.

The UI/UX design is focused on providing a clean and user-friendly interface.

---

## 📂 Project Structure

```
project-root/
│   ├── dist/               # Distribution folder for the build
│   ├── node_modules/       # Node.js dependencies
│   ├── server/             # Backend server files
│       └── index.js        # Main server file
│   ├── src/                # Frontend source files
│       └── components/     # React components
│       └── App.tsx         # Main App component
│       └── main.tsx        # ReactDOM rendering
│   ├── .env                # Environment variables (not committed)
│   ├── package.json        # Node.js dependencies and scripts
│   └── README.md           # Project documentation (this file)
```

---

## ⚙️ Tech Stack and Design Choices

- **Frontend:** React.js with TypeScript for maintainable and scalable UI components.
- **Backend:** Node.js with Express for handling server-side logic and API requests.
- **API Integration:** Integration with Google Calendar API to fetch events.
- **UI/UX Design:** Tailwind CSS for a responsive and modern user interface.

---

## 🚀 Features

1. **Google SSO Login:**  
   Secure Single Sign-On using Google OAuth 2.0.
2. **Fetch and Display Events:**  
   Fetches events from Google Calendar and displays them in a table format.
3. **Filter by Date:**  
   Users can filter events by date for better event management.

---
## 🌐 Deployment Link

You can check out the deployed application at: [Google Calendar Events App](https://assignment-whitecarrot.netlify.app/)

> **Note:** The link may not work as my Google Cloud credits have ended. You need to replace the secrets with your own for it to function properly in your environment.

## 🔧 Installation and Setup

### 1. Clone the Repository
```sh
git clone https://github.com/abhijeetGithu/Software-Developer-Intern-Assignment-whitecarrot.git
cd Software-Developer-Intern-Assignment-whitecarrot
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory and add the following secrets:

```
VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_API_URL=http://localhost:3000
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

> **Note:** My Google Cloud credits have ended, so you need to replace the above values with your own secrets.

### 4. Run the Backend
```sh
cd server
npm run server
```

### 5. Run the Frontend
```sh
npm run dev
```

The frontend will be available at `http://localhost:5173` by default.

---

## 📜 License
This project is licensed under the MIT License.

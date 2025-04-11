# HandsOn - Community-Driven Social Volunteering Platform

![HandsOn Logo](./frontend/public/logo.png)

HandsOn is a web platform designed to connect volunteers with community service opportunities, track volunteer hours, and build a supportive community of like-minded individuals dedicated to making a positive impact.

## Features

- **User Authentication**: Secure registration and login system with JWT
- **Profile Management**: Add skills, interests, and profile photo
- **Community Dashboard**: View and join volunteer communities
- **Events Calendar**: Browse and register for upcoming volunteer events
- **Help Posts**: Request assistance or offer help within the community
- **Leaderboard**: Gamified volunteer tracking with points system
- **Team Formation**: Create or join teams for collaborative volunteering

## Tech Stack

### Frontend

- **React.js** - Component-based UI library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Context API** - State management
- **Axios** - HTTP client for API requests

### Backend

- **Node.js** - JavaScript runtime
- **Express** - Web application framework
- **MongoDB** - NoSQL database
- **JWT** - Authentication with HTTP-only cookies
- **Multer & Sharp** - File uploads and image optimization

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/HandsOn.git
   cd HandsOn
   ```

2. **Set up environment variables**

   Create a `.env` file in the backend directory:

   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   NODE_ENV=development
   ```

3. **Install dependencies**

   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

4. **Start the development servers**

   ```bash
   # Start backend server (from backend directory)
   npm run dev

   # Start frontend development server (from frontend directory)
   npm run dev
   ```

5. **Access the application**
   - Frontend: <http://localhost:5173>
   - Backend API: <http://localhost:5000>

## Project Structure

```
HandsOn/
├── backend/                # Node.js backend
│   ├── authentication/     # Auth controllers
│   ├── database/           # MongoDB schemas and connection
│   ├── middleware/         # Express middleware
│   └── upload/             # File upload storage
├── frontend/               # React frontend
│   ├── public/             # Static assets
│   └── src/
│       ├── components/     # Reusable UI components
│       ├── layout/         # Page layouts
│       └── provider/       # Context providers
```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/check` - Verify authentication status
- `POST /api/auth/upload` - Upload profile picture and information

## Future Enhancements

- Mobile application
- Real-time notifications
- Analytics dashboard
- Integration with social media platforms
- Volunteer certification system

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Developed with ❤️ by [Faysal Ahmed Fahim](https://github.com/0xFaysal)

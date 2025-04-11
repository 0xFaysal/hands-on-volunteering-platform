# HandsOn - Volunteer Community Platform

![HandsOn Logo](./public/logo.png)

HandsOn is a web platform designed to connect volunteers with community service opportunities, track volunteer hours, and build a supportive community of like-minded individuals dedicated to making a positive impact.

## Features

- **User Authentication**: Secure registration and login system
- **Profile Management**: Add skills and profile photo
- **Community Dashboard**: View and join volunteer communities
- **Events Calendar**: Browse and register for upcoming volunteer events
- **Leaderboard**: Gamified volunteer tracking with points system
- **Help Posts**: Request or offer assistance within the community

## Tech Stack

- **Frontend**: React.js, Tailwind CSS, React Router, React Icons
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT with HTTP-only cookies
- **File Handling**: Multer, Sharp for image optimization
- **State Management**: React Context API

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB account
- Git

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/handson.git
cd handson
```

2. **Install frontend dependencies**

```bash
cd frontend
npm install
```

3. **Install backend dependencies**

```bash
cd ../backend
npm install
```

4. **Configure environment variables**

Create a `.env` file in the backend directory with the following variables:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

5. **Start the development servers**

Backend:

```bash
cd backend
npm start
```

Frontend:

```bash
cd frontend
npm run dev
```

## Project Structure

```
HandsOn/
├── backend/              # Express server
│   ├── authentication/   # Auth controllers
│   ├── database/         # MongoDB models and connection
│   ├── middleware/       # Custom middleware
│   └── upload/           # Uploaded files
├── frontend/             # React frontend
│   ├── public/           # Static assets
│   └── src/
│       ├── components/   # Reusable components
│       ├── layout/       # Page layouts
│       └── provider/     # Context providers
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Project Link: [https://github.com/yourusername/handson](https://github.com/yourusername/handson)

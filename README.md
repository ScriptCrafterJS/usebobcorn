# usePopcorn
[Go Live](https://usebobcorn.vercel.app/)

🍿 **usePopcorn** is a React application for searching movies, viewing details, and managing your watched list. It leverages the OMDb API to fetch movie data and provides a user-friendly interface for movie enthusiasts.

## Features

- **Movie Search:** Search for movies by title using the OMDb API.
- **Movie Details:** View detailed information about selected movies.
- **Watched List:** Add movies to your watched list and rate them.
- **Persistent Storage:** Your watched list is saved in your browser's local storage.
- **Star Rating:** Rate movies with a custom star rating component.
- **UI:** Clean and modern interface built with React.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd usepopcorn
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm start` - Run the app in development mode.
- `npm run build` - Build the app for production.
- `npm test` - Run tests.
- `npm run eject` - Eject configuration (not reversible).

## API

This project uses the [OMDb API](https://www.omdbapi.com/) for fetching movie data.

## Features in Detail

### Movie Search

- Real-time search functionality
- Error handling for API requests
- Loading states for better UX

### Movie Details

- Comprehensive movie information display
- Add to watched list functionality
- Custom rating system

### Watched Movies

- Persistent storage using localStorage
- Delete functionality
- Average rating calculation

## License

This project is for educational purposes.

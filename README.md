# What2Watch 🎬

A modern, interactive web application that helps two people find movies they both want to watch together. Built with React and Vite, featuring a Tinder-like swipe interface for movie selection.

🌐 **Live Demo:** [https://what2watchh.netlify.app/](https://what2watchh.netlify.app/)

## ✨ Features

- **Dual User Experience**: Separate interfaces for Person 1 and Person 2 to independently select movies
- **Genre-Based Selection**: Choose from Action, Drama, or Top 250 movies
- **Swipe Deck Interface**: Tinder-like card swiping experience for browsing movies
- **Keyboard Navigation**: Use arrow keys (← →) for quick movie selection
- **Common Movies Discovery**: Automatically finds movies both users want to watch
- **Movie Details**: View ratings, descriptions, genres, runtime, and more
- **Trailer Links**: Direct links to YouTube trailers for selected movies
- **Responsive Design**: Fully responsive UI that works on desktop and mobile devices
- **Modern UI**: Beautiful dark theme with Tailwind CSS and Material-UI components

## 🚀 Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Routing**: React Router DOM 7.13.0
- **Styling**: 
  - Tailwind CSS 4.1.18
  - Material-UI (MUI) 7.3.7
  - Emotion (for MUI styling)
- **UI Components**: 
  - Headless UI
  - Heroicons
- **HTTP Client**: Axios 1.13.3
- **State Management**: React Context API
- **Deployment**: Netlify

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd what2watch
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🎮 Usage

### Demo Login Credentials
- **Email**: `saiyedk@gmail.com`
- **Password**: `Admin@123`

### How It Works

1. **Login**: Use the demo credentials to access the application

2. **Person 1 - Select Genre & Movies**:
   - Navigate to the "Person 1" page
   - Choose a genre (Action, Drama, or Top 250)
   - Swipe right (or press →) on movies you want to watch
   - Swipe left (or press ←) on movies you don't want to watch

3. **Person 2 - Review & Select**:
   - Navigate to the "Person 2" page
   - You'll see the same genre that Person 1 selected
   - Swipe through the same movies and make your selections

4. **View Results**:
   - Navigate to the "Result" page
   - See all movies that both Person 1 and Person 2 selected
   - Click on trailer links to watch previews on YouTube

## 📁 Project Structure

```
what2watch/
├── public/
│   ├── netlify.toml          # Netlify configuration
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── action.js         # Action genre movie data
│   │   ├── drama.js          # Drama genre movie data
│   │   ├── genres.js         # Available genres list
│   │   ├── top250.js         # Top 250 movies data
│   │   └── myLogo.png        # Application logo
│   ├── components/
│   │   ├── DropDown.jsx      # Genre selection component
│   │   ├── Footer.jsx        # Footer component
│   │   ├── Navbar.jsx        # Navigation bar
│   │   └── SwipeDeck.jsx     # Movie card swiping interface
│   ├── context/
│   │   └── SelectionContext.jsx  # Global state management
│   ├── pages/
│   │   ├── Login.jsx         # Login page
│   │   ├── Movies.jsx        # Person 1 movie selection page
│   │   ├── Person2.jsx      # Person 2 movie selection page
│   │   └── WatchedMovies.jsx # Results page showing common movies
│   ├── App.jsx               # Main app component with routing
│   ├── App.css               # App-specific styles
│   ├── index.css             # Global styles
│   └── main.jsx              # Application entry point
├── dist/                     # Build output directory
├── package.json              # Project dependencies and scripts
├── vite.config.js           # Vite configuration
└── README.md                 # Project documentation
```

## 🎨 Key Components

### SwipeDeck
Interactive card-based interface for browsing movies with:
- Swipe gestures (via buttons)
- Keyboard navigation (arrow keys)
- Movie details display
- Like/dislike functionality

### SelectionContext
Global state management using React Context API for:
- Storing Person 1's genre selection
- Managing Person 1's watchlist
- Managing Person 2's watchlist
- Sharing state across components

### DropDown
Genre selection component with toggle buttons for:
- Action movies
- Drama movies
- Top 250 movies

## 🚀 Deployment

This project is deployed on Netlify. The `netlify.toml` configuration file handles SPA routing by redirecting all routes to `index.html`.

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Netlify Deployment

1. Push your code to a Git repository
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎯 Features in Detail

### Movie Information Display
- Movie poster/image
- Title and type
- Average rating (out of 10)
- Number of votes
- Runtime in minutes
- Genres
- Content rating
- Release year
- Countries of origin
- Description
- YouTube trailer links

### User Experience
- Smooth card transitions
- Visual feedback on interactions
- Progress indicator (X / Total movies)
- Responsive design for all screen sizes
- Dark theme for comfortable viewing

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and all rights reserved.

## 👤 Author

**Saiyed Kounain**

- Instagram: [@saiyedkounain](https://instagram.com/saiyedkounain)
- GitHub: [@saiyedkounain](https://www.github.com/saiyedkounain)
- YouTube: [@skowdedits](https://www.youtube.com/@skowdedits/videos)

---

Made with ❤️ by Saiyed Kounain

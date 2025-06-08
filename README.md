# ListFlix 🎬

**ListFlix** is a modern React-based movie search and watchlist app that uses the OMDb API. It allows you to search for movies, view detailed information, rate them, and maintain a persistent list of watched movies using your browser's local storage.

---

## ✨ Features

- **Movie Search:** Search for movies in real-time using the OMDb API.
- **Movie Details:** View detailed info like IMDb rating, plot, actors, and runtime.
- **User Rating:** Rate movies and compare them with IMDb ratings.
- **Watched List:** Keep a list of watched movies and see average stats.
- **LocalStorage:** Automatically saves and retrieves watched list from localStorage.

---

## 📸 Preview

> https://ah4md.github.io/listflix/ 

---

## 🔧 Tech Stack

- **React (Hooks)** – useState, useEffect for state & side effects
- **CSS** – App styling
- **OMDb API** – For fetching movie data
- **LocalStorage** – For persisting watched list

---

## 🚀 Getting Started

Clone and run the project locally:

```bash
git clone https://github.com/yourusername/listflix.git
cd listflix
npm install
npm run dev



---

## 🔑 API Key

ListFlix uses the OMDb API. The default key used is `98245f11`. If you want to use your own:

1. Register at [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx)
2. Replace the API key in `App.js` and `MovieDetails.js` where it's used:

   ```js
   http://www.omdbapi.com/?s=${query}&apikey=YOUR_API_KEY
   ```

---

## 📁 Project Structure

```
src/
├── App.js              # Main App component
├── StarRating.js       # Star rating UI
├── App.css             # Global styles
├── components/         # (Optional modularization)
public/
└── logo.svg            # App logo
```

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

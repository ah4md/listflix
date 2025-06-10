# 🎬 ListFlix

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

**ListFlix** is a modern React-based movie search and watchlist app powered by the OMDb API. It allows you to search for movies, view detailed info, rate them, and maintain a persistent watched list using your browser's local storage.

---

## ✨ Features

- 🔍 **Movie Search:** Real-time search using the OMDb API.
- 🎞️ **Movie Details:** View plot, actors, IMDb rating, runtime, etc.
- ⭐ **User Rating:** Rate movies and compare with IMDb scores.
- ✅ **Watched List:** Track watched movies with average stats.
- 💾 **LocalStorage:** Persistent storage of watched list.

---

## 📸 Live Preview

👉 [Visit the App](https://listflix-theta.vercel.app/)

---

## 🔧 Tech Stack

- **React (Hooks)** – `useState`, `useEffect`
- **CSS** – Styling
- **OMDb API** – Fetching movie data
- **LocalStorage** – Persistent watched list

---

## 🚀 Getting Started

```bash
git clone https://github.com/yourusername/listflix.git
cd listflix
npm install
npm run dev
```
---

## 🔑 API Key

ListFlix uses the OMDb API. A demo key `98245f11` is included, but for your own:

1. Register at [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx)
2. Replace the key in your project files (e.g. `App.js`, `MovieDetails.js`):

```js
http://www.omdbapi.com/?s=${query}&apikey=YOUR_API_KEY
```

---

## 📁 Project Structure

```
src/
├── App.js              # Main App component
├── StarRating.js       # Star rating logic
├── App.css             # App styling
├── components/         # Optional component files
public/
└── logo.svg            # App logo
```

---

## 📄 License

This project is licensed under the **MIT License**.  
See the [LICENSE](./LICENSE) file for more details.


# 🎬 CineScope – Movie Discovery App

CineScope is a modern and responsive React web application that allows users to search and explore movies in real time using The Movie Database (TMDb) API. It features a clean UI, search history tracking powered by Appwrite, and trending movie insights—all designed to enhance your movie discovery experience.

---

## 🌐 Live Demo  
👉 [Demo](https://react-vite-movie-app-six.vercel.app/)

---

## 📖 About

CineScope simplifies the way users discover movies by offering:
- Instant search with debounce optimization.
- Search history tracking using Appwrite.
- Trending movie rankings based on popularity.
- A clean and responsive interface that works across all devices.

---

## ✨ Features

✅ **Real-Time Search** — Search for movies instantly with debounced input.  
📈 **Trending Section** — View top trending movies based on search frequency.  
📚 **Search History Tracking** — Tracks and ranks most searched movies using Appwrite.  
🎨 **Responsive Design** — Fully mobile-friendly and desktop-ready.  
🔁 **Smooth UX** — Intuitive transitions and loader while fetching data.  
🛠️ **Appwrite Integration** — Backend functionality to store and rank search terms.

---

## 🔍 Technologies Used

- ⚛️ **React** – Component-based UI framework  
- 💨 **Tailwind CSS** – Utility-first CSS styling  
- 📡 **TMDb API** – For movie data and search  
- 🔄 **React Hooks** – `useState`, `useEffect`, `useDebounce`  
- 💽 **Appwrite** – Database service for tracking popular searches  
- ⚡ **Vite** – Blazing-fast dev server & bundler

---

## 🧠 Folder Structure

```

src/
├── components/
│   ├── MovieCard.jsx
│   ├── Search.jsx
│   └── Spinner.jsx
├── utils/
│   └── appwrite.js
├── App.jsx
└── main.jsx

````

---

## 🛠 Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/cinescope.git
cd cinescope
````

2. **Install dependencies**

```bash
npm install
```

3. **Setup environment variables**
   Create a `.env` file in the root with the following:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
```

4. **Start development server**

```bash
npm run dev
```

---

## 🔌 Sample TMDb API Response

```json
{
  "results": [
    {
      "id": 12345,
      "title": "Inception",
      "poster_path": "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      "overview": "A mind-bending thriller about dreams within dreams.",
      "release_date": "2010-07-16"
    }
  ]
}
```

---

## 📸 Screenshots

### 🔍 Search Page

![HomePage](https://github.com/user-attachments/assets/4e85b655-dafc-441b-aafb-0e32eb28bcef)

### ⚡ Trending Section
![Trending](https://github.com/user-attachments/assets/9507cd8b-cb24-4220-bb3a-e2f375b965da)


---

## 🙏 Acknowledgements

* [TMDb API](https://www.themoviedb.org/documentation/api) – Real-time movie data.
* [Appwrite](https://appwrite.io/) – Open-source backend for tracking data.
* [Tailwind CSS](https://tailwindcss.com/) – Fast and modern styling.
* [React](https://reactjs.org/) – UI library.
* [React Use](https://github.com/streamich/react-use) – Hooks like `useDebounce`.

---

## 👨‍💻 About the Author

This project was created by **Dheeraj Ananth Kumar**.
📫 Feel free to connect with me on:

* [GitHub](https://github.com/DheerajAnanthKumar)

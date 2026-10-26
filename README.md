# Photo Gallery Web App

A clean, responsive photo gallery built with **React + Vite** and styled with **Tailwind CSS**, fetching photos from the Picsum Photos API.

Built as part of the **Celebrare Frontend Internship Pre-Screening Assignment**.

---

## Tech Stack

- **React (Functional Components + Hooks)**
- **Vite** (JavaScript, no TypeScript)
- **Tailwind CSS** (for styling)
- **Plain Fetch API** (no Axios)
- **Inline SVG** (no external icon libraries)

---

## Features

1. **API Integration**: Fetches 30 photos on load from `https://picsum.photos/v2/list?limit=30` using a custom hook `useFetchPhotos`. Shows a loading spinner while fetching and an error banner if the request fails.
2. **Responsive Grid**:
   - Desktop (>= 1024px): 4 columns
   - Tablet (>= 768px): 2 columns
   - Mobile: 1 column
3. **Real-time Search Filter**: Filters photos by author name in real-time as the user types without making additional API calls.
4. **Favourites with useReducer & Persistence**: Mark photos as favourites via the heart icon button. State is managed with `useReducer` and persisted in `localStorage` across page refreshes.
5. **Performance Optimization**:
   - `useCallback` on the search change handler to prevent unnecessary function recreation.
   - `useMemo` on the filtered photos list to prevent unnecessary recomputation on unrelated renders.

---

## Project Structure

```text
src/
  components/
    Gallery.jsx            # Main container: uses hook, manages search and favourites state
    PhotoCard.jsx          # Individual card displaying image, author, and heart button
    SearchBar.jsx          # Controlled search input for real-time author filtering
    Spinner.jsx            # Animated loading spinner with Tailwind CSS
  hooks/
    useFetchPhotos.js      # Custom hook returning { photos, loading, error }
  reducers/
    favouritesReducer.js   # Reducer for toggling favourites and syncing with localStorage
  App.jsx                  # Root component layout and header
  main.jsx                 # React DOM mount point
  index.css                # Tailwind directives and base styles
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### 3. Build for production

```bash
npm run build
```

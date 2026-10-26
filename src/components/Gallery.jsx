import { useState, useReducer, useCallback, useMemo } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import { favouritesReducer, getInitialFavourites } from "../reducers/favouritesReducer";
import PhotoCard from "./PhotoCard";
import SearchBar from "./SearchBar";
import Spinner from "./Spinner";

// Main Gallery component
function Gallery() {
  // 1. Fetch photos using our custom hook (Gallery does not call fetch directly)
  const { photos, loading, error } = useFetchPhotos();

  // 2. Manage the search input state
  const [searchTerm, setSearchTerm] = useState("");

  // 3. Manage favourites state using useReducer (NOT useState)
  // getInitialFavourites loads any previously saved favourites from localStorage
  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    [],
    getInitialFavourites
  );

  // 4. useCallback memoizes the search input handler
  // This ensures the function is NOT recreated on every render
  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  // 5. useMemo recalculates the filtered photo list only when 'photos' or 'searchTerm' changes
  // This avoids running the filter logic unnecessarily during other re-renders
  const filteredPhotos = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    // If search is empty, return the full list of photos
    if (!query) {
      return photos;
    }

    // Filter photos by matching author name with the search query
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(query)
    );
  }, [photos, searchTerm]);

  // 6. Function to toggle a photo as favourite by dispatching an action to the reducer
  const handleToggleFavourite = (photoId) => {
    dispatch({ type: "TOGGLE_FAVOURITE", payload: photoId });
  };

  // Condition 1: If data is still loading, display the Spinner
  if (loading) {
    return <Spinner />;
  }

  // Condition 2: If an error occurred, display a friendly error message
  if (error) {
    return (
      <div className="max-w-md mx-auto my-12 p-4 bg-red-50 border border-red-200 rounded-lg text-center">
        <p className="text-red-700 font-semibold mb-1">Error Loading Photos</p>
        <p className="text-red-600 text-sm">{error}</p>
      </div>
    );
  }

  // Condition 3: When data is loaded successfully, render SearchBar and Responsive Grid
  return (
    <div className="w-full">
      {/* Search Bar at the top */}
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />

      {/* If no photos match the search query, show a helper message */}
      {filteredPhotos.length === 0 ? (
        <p className="text-center text-gray-500 py-12">
          No photos found matching &quot;{searchTerm}&quot;.
        </p>
      ) : (
        /* Responsive Grid: 1 column on mobile, 2 columns on tablet, 4 columns on desktop */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavourite={favourites.includes(photo.id)}
              onToggleFavourite={handleToggleFavourite}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;

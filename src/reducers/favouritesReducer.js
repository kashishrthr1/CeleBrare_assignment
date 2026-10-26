// Key name for storing favourites in browser localStorage
const STORAGE_KEY = "favourite_photos";

// Function to safely load saved favourites from localStorage when the app starts
export function getInitialFavourites() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    // If saved data exists, parse it from JSON string to array, otherwise return empty array
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Failed to load favourites from localStorage:", error);
    return [];
  }
}

// Reducer function that manages changes to the favourites state
// state: array of favourited photo IDs (e.g. ["0", "1", "10"])
// action: object containing type and payload (e.g. { type: "TOGGLE_FAVOURITE", payload: "1" })
export function favouritesReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_FAVOURITE": {
      const photoId = action.payload;
      const isAlreadyFavourite = state.includes(photoId);

      let updatedFavourites;

      if (isAlreadyFavourite) {
        // If the photo is already in favourites, remove it by filtering it out
        updatedFavourites = state.filter((id) => id !== photoId);
      } else {
        // If the photo is not in favourites, add its ID to the array
        updatedFavourites = [...state, photoId];
      }

      // Save the updated array to localStorage so it stays saved after page refresh
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFavourites));
      } catch (error) {
        console.error("Failed to save favourites to localStorage:", error);
      }

      return updatedFavourites;
    }

    default:
      // Return existing state if action type is unknown
      return state;
  }
}

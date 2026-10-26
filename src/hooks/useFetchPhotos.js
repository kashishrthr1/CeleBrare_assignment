import { useState, useEffect } from "react";

// API endpoint to fetch 30 photos
const API_URL = "https://picsum.photos/v2/list?limit=30";

// Custom hook to fetch photo data from the Picsum API
// Returns: photos (array), loading (boolean), error (string or null)
export function useFetchPhotos() {
  // State to store the fetched list of photos
  const [photos, setPhotos] = useState([]);

  // State to indicate whether the data is currently being fetched
  const [loading, setLoading] = useState(true);

  // State to store any error message if the fetch request fails
  const [error, setError] = useState(null);

  // useEffect runs once when the component mounts because the dependency array is empty []
  useEffect(() => {
    // Flag to prevent state updates if the component unmounts during the fetch
    let isMounted = true;

    async function fetchPhotosData() {
      try {
        // Start loading and clear any previous error
        setLoading(true);
        setError(null);

        // Fetch data from Picsum API
        const response = await fetch(API_URL);

        // If the server responded with an error status (like 404 or 500), throw an error
        if (!response.ok) {
          throw new Error(`Failed to fetch photos (Status: ${response.status})`);
        }

        // Parse response body as JSON
        const data = await response.json();

        // Save data to state if component is still on screen
        if (isMounted) {
          setPhotos(data);
        }
      } catch (err) {
        // Catch any network failure or thrown error and save the message to error state
        if (isMounted) {
          setError(err.message || "Something went wrong while fetching photos.");
        }
      } finally {
        // Set loading to false whether the fetch succeeded or failed
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchPhotosData();

    // Cleanup function when component unmounts
    return () => {
      isMounted = false;
    };
  }, []);

  // Return the three states so the calling component can use them
  return { photos, loading, error };
}

export default useFetchPhotos;

// Search input component at the top of the gallery
// Receives the current search text and the change handler as props
function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="w-full max-w-md mx-auto mb-8">
      {/* Search text input */}
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Search photos by author name..."
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400 text-sm transition"
      />
    </div>
  );
}

export default SearchBar;

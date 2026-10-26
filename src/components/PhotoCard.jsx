// Individual photo card component
// Displays the image, author name, and a heart button to toggle favourite
function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
  // Use a resized image URL (500x350) for fast loading in the gallery grid
  const imageUrl = `https://picsum.photos/id/${photo.id}/500/350`;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
      {/* Photo Image */}
      <div className="w-full h-52 bg-gray-100 overflow-hidden">
        <img
          src={imageUrl}
          alt={`Photo by ${photo.author}`}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Card Footer: Author Name & Favourite Heart Button */}
      <div className="p-4 flex items-center justify-between gap-2">
        {/* Author Name */}
        <p className="text-sm font-semibold text-gray-800 truncate" title={photo.author}>
          {photo.author}
        </p>

        {/* Heart Icon Button (Inline SVG - no external icon library) */}
        <button
          type="button"
          onClick={() => onToggleFavourite(photo.id)}
          aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
          className="p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={`w-6 h-6 transition-colors ${
              isFavourite
                ? "fill-red-500 stroke-red-500"
                : "fill-none stroke-gray-400 hover:stroke-red-500"
            }`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default PhotoCard;

// Loading spinner component shown while photos are being fetched
function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center py-20" role="status">
      {/* Spinning circular border created with Tailwind */}
      <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
      
      {/* User-friendly text indicator */}
      <p className="mt-4 text-gray-600 text-sm font-medium">
        Loading photos, please wait...
      </p>
    </div>
  );
}

export default Spinner;

import Gallery from "./components/Gallery";

// Root App component
function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Page Header */}
      <header className="border-b border-slate-200 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Photo Gallery
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Explore photos from Picsum, search by author, and save your favourites.
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Gallery />
      </main>
    </div>
  );
}

export default App;

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Park App
          </div>
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
            React + Vite + Tailwind CSS + GraphQL
          </h1>
          <div className="mt-4">
            <div className="mt-2 p-3 bg-blue-100 border border-blue-400 text-blue-700 rounded">
              <p className="font-semibold">🚀 Ready for development!</p>
              <p className="text-sm">
                GraphQL Code Generator configured with TypeScript types
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

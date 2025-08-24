import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

const TEST_QUERY = gql`
  query TestConnection {
    __schema {
      types {
        name
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(TEST_QUERY);

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
            <h2 className="text-md font-semibold text-gray-700">
              GraphQL Connection Status:
            </h2>
            {loading && (
              <p className="mt-2 text-blue-500">Testing connection...</p>
            )}
            {error && (
              <div className="mt-2 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                <p className="font-semibold">Connection Error:</p>
                <p className="text-sm">{error.message}</p>
              </div>
            )}
            {data && (
              <div className="mt-2 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                <p className="font-semibold">✅ Connected successfully!</p>
                <p className="text-sm">
                  Found {data.__schema.types.length} GraphQL types
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

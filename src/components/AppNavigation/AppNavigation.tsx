import { MapPin, LayoutGrid, CarFront, Wallet, FileText } from 'lucide-react';

export const AppNavigation = () => {
  return (
    <div className="bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around items-center max-w-md mx-auto">
        <button className="p-3 text-gray-400">
          <MapPin className="w-6 h-6" />
        </button>

        <button className="p-3 text-gray-400">
          <LayoutGrid className="w-6 h-6" />
        </button>

        <button className="p-3 text-gray-400">
          <CarFront className="w-6 h-6" />
        </button>

        <button className="p-3 text-gray-400">
          <Wallet className="w-6 h-6" />
        </button>

        <button className="p-3 text-blue-900 bg-blue-50 rounded-lg">
          <FileText className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

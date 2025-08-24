import { useState } from 'react';
import styles from '../PilotDashboard/PilotDashboard.module.css';

export const PilotController = () => {
  const [selectedZone, setSelectedZone] = useState('D');
  const [currentPage, setCurrentPage] = useState(1);

  const pilots = [
    { id: '1', name: 'Szlaban Grzybowska 1', zone: 'A' },
    { id: '2', name: 'Brama Garażowa 1', zone: 'B' },
    { id: '3', name: 'Brama Wyjazdowa Śląska', zone: 'C' },
    { id: '4', name: 'Szlaban Pomorska 32', zone: 'D' },
  ];

  return (
    <div className="flex-1 relative pr-6 bg-white">
      <div className={`${styles.section} grid gap-1 h-full mt-10`}>
        <div>
          <img
            src="/img/pilot.png"
            alt="pilot"
            className="w-90 h-auto object-contain absolute top-50 left-0 "
          />
        </div>

        <div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Długa nazwa pilota
            </h3>

            {pilots.map(pilot => (
              <button
                key={pilot.id}
                className={`w-full p-3 rounded-xl border-2 text-left transition-all text-center ${
                  pilot.zone === selectedZone
                    ? 'bg-blue-900 text-white border-blue-900'
                    : 'bg-white text-gray-800 border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedZone(pilot.zone)}
              >
                <span className="font-medium">{pilot.name}</span>
              </button>
            ))}
            <p className="text-gray-600 font-medium">
              Wybierz bramę, by otworzyć
            </p>
          </div>
        </div>
      </div>
      <div className="flex mt-20 justify-center items-center gap-3">
        {[1, 2, 3, 4].map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`${styles.paginationDot} ${
              currentPage === page ? styles.paginationDotActive : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
};

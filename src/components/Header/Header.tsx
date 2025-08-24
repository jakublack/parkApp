import { ArrowLeftCircle } from 'lucide-react';
import styles from '../PilotDashboard/PilotDashboard.module.css';

export const Header = () => {
  return (
    <div className={`${styles.header} px-4 py-6 relative`}>
      <div className="absolute bottom-10 right-0 w-64 h-64 z-10">
        <img
          src="/img/key.png"
          alt="key"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className={`flex relative z-10 mt-10`}>
        <button className="w-10 h-10 rounded-full flex items-center justify-center mr-4">
          <ArrowLeftCircle className="w-12 h-12 text-blue-900" />
        </button>
        <h1 className="text-2xl font-bold text-blue-900">
          Otwórz
          <br />
          bramę
        </h1>
      </div>
    </div>
  );
};

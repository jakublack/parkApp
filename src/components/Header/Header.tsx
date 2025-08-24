import { ArrowLeftCircle } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import styles from '../PilotDashboard/PilotDashboard.module.css';

export const Header = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.replace('/login');
  };
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
        <button
          onClick={handleLogout}
          className="w-10 h-10 rounded-full flex items-center justify-center mr-4 hover:bg-white/20 transition-colors"
        >
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

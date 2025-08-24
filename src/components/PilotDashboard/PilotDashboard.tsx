import { Header } from '../Header';
import { PilotController } from '../PilotController';
import { AppNavigation } from '../AppNavigation';

export const PilotDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <PilotController />
      <AppNavigation />
    </div>
  );
};

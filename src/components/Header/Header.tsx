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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-12"
            color="#15215C"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
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

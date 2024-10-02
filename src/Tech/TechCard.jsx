export const TechCard = ({ icon, title }) => {
    return (
      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="w-16 h-16 flex items-center justify-center">{icon}</div>
        <h4 className="text-center text-lg font-medium text-white">{title}</h4>
      </div>
    );
  };
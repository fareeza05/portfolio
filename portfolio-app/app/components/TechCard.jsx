const TechCard = ({ title, content }) => {
    return (
      <div className="flex flex-col items-center justify-center p-2 bg-opacity-75 rounded-lg shadow-lg h-full w-[300px]"> {/* Set fixed width for square cards */}
        <div className="bg-gradient-to-br from-blue-500 via-purple-400 to-pink-400 rounded-lg p-4 h-full w-full flex items-center justify-center"> {/* Gradient as background */}
          <span className="bg-black bg-opacity-75 rounded-lg p-4"> {/* Inner content container */}
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <div className="text-center">{content}</div>
          </span>
        </div>
      </div>
    );
  };
  
  export default TechCard;
  
  
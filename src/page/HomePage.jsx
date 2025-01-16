import React, { useState } from "react";
import useAgentDeatils from "../hooks/useAgentDetails";
import Loading from "../components/Loading";

const Home = () => {
  const { data, isLoading, error } = useAgentDeatils();
  const [selectedAgent, setSelectedAgent] = useState(null);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  const handleAgentClick = (agent) => {
    setSelectedAgent(agent);
  };

  const currentAgent = selectedAgent || data[0];

  const gradientStyle = {
    background: `linear-gradient(135deg, #${currentAgent.backgroundGradientColors.join(
      ", #"
    )})`,
    transition: "background 0.8s ease",
  };

  return (
    <div>
      <div
        className="relative flex flex-col items-center md:flex-row md:items-start md:justify-between gap-8 h-screen p-5"
        style={gradientStyle}
      >
        {/* Agent Info */}
        <div
          className="w-full md:w-1/3 text-center md:text-left px-4 py-4 rounded-2xl"
          style={{
            background: "rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <h1 className="text-3xl font-semibold text-slate-900">
            {currentAgent.displayName}
          </h1>
          <h2 className="text-md font-light text-slate-700">
            {currentAgent.role.displayName}
          </h2>
          <span className="font-bold text-slate-700">Description</span>
          <p className="text-slate-600 font-semibold pt-1">
            {currentAgent.role.description}
          </p>
          <p className="text-slate-600 mt-4">{currentAgent.description}</p>
          <button className="btn btn-success mt-2 btn-sm text-white">
            Learn More
          </button>
        </div>

        {/* Agent Image */}
        <div className="relative w-full md:w-2/3 h-full">
          <figure>
            {/* Background */}
            <img
              src={currentAgent.background}
              alt={`${currentAgent.displayName}_background`}
              className="absolute h-[100%] w-[100%] top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 max-w-auto z-0 opacity-[0.7]"
            />
            {/* Portrait */}
            <img
              src={currentAgent.fullPortraitV2}
              alt={`${currentAgent.displayName}_portrait`}
              className="relative z-10 mx-auto w-[70%] md:w-[50%] lg:w-[70%] h-full rounded-lg transition-transform duration-500 ease-in-out transform -translate-y-2 hover:scale-105"
            />
          </figure>
        </div>
      </div>
      <div className="w-full h-auto flex flex-wrap justify-center gap-4 mt-2 bg-white py-4">
        {data.map((agent) => (
          <img
            key={agent.uuid}
            src={agent.displayIconSmall}
            alt={agent.displayName}
            className={`w-16 h-16 rounded-full cursor-pointer transition-all duration-500 ease-in-out ${
              currentAgent.uuid === agent.uuid
                ? "scale-110 border-4 border-gray-300"
                : "hover:scale-105 hover:border-2 hover:border-gray-200"
            }`}
            onClick={() => handleAgentClick(agent)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

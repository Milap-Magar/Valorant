import React, { useState } from "react";
import { motion } from "framer-motion";
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
    <motion.div
      style={gradientStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="relative flex flex-col items-center md:items-start md:justify-between gap-8 h-full pt-24 pb-4 px-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="w-full h-full text-center md:text-left flex flex-col md:flex-row gap-4">
          {/* Agent Details Section */}
          <motion.div
            className="w-full md:w-1/2 md:h-[100%] text-center md:text-left rounded-2xl px-4 py-4"
            style={{
              background: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
            <button className="btn btn-success mt-2 btn-sm text-slate-200">
              Learn More
            </button>
          </motion.div>

          {/* Abilities Section */}
          <motion.div
            className="w-full md:w-1/4 text-center rounded-2xl flex flex-col gap-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ul className="flex flex-col md:flex-row md:flex-wrap gap-5">
              {currentAgent.abilities.map((ability, index) => (
                <li
                  key={index}
                  style={{
                    background: "rgba(255, 255, 255, 0.3)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                  className="rounded-xl px-2 py-2"
                >
                  <motion.img
                    src={ability.displayIcon}
                    alt={`${currentAgent.displayName}`}
                    className="w-24 h-auto mx-auto"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  />
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Agent Image Section */}
          <motion.div
            className="w-full h-auto text-center rounded-2xl"
            style={{
              background: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-[90%]">
              <figure>
                <img
                  src={currentAgent.background}
                  alt={`${currentAgent.displayName}_background`}
                  className="absolute h-full w-full left-1/2 transform -translate-x-1/2 -translate-y-2 max-w-auto z-0 opacity-[0.7]"
                />
                <motion.img
                  src={currentAgent.fullPortraitV2}
                  alt={`${currentAgent.displayName}_portrait`}
                  className="relative z-10 mx-auto w-[70%] md:w-[50%] lg:w-[70%] h-full rounded-lg transition-transform duration-500 ease-in-out transform -translate-y-2 hover:scale-105"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              </figure>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Agent List */}
      <motion.div
        className="w-full h-auto p-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="w-full h-auto text-center rounded-2xl"
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <h1 className="text-center text-slate-950 font-mono font-black text-[2em]">
            List of AGENTS
          </h1>
          <div className="flex flex-wrap justify-center gap-4 py-4">
            {data.map((agent) => (
              <motion.img
                key={agent.uuid}
                src={agent.displayIconSmall}
                alt={agent.displayName}
                className={`w-16 h-16 rounded-full cursor-pointer transition-all duration-500 ease-in-out ${
                  currentAgent.uuid === agent.uuid
                    ? "scale-110 border-4 border-gray-300"
                    : "hover:scale-105 hover:border-2 hover:border-gray-200"
                }`}
                onClick={() => handleAgentClick(agent)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;

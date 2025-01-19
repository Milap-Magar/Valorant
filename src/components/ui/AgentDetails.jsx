import React from "react";
import { motion } from "framer-motion";
import useAgentDeatils from "../../hooks/useAgentDetails";
import useAgentData from "../../hooks/useAgentData.js";
import bg_valo from "../../assets/valo_bg.jpg";
import Loading from "../Loading.js";

const AgentDetails = ({ agentId }) => {
  const { data, isLoading, error, isError } = useAgentData(agentId);
  console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error loading agent data: {error.message}</div>;
  }

  return (
    <div className="w-full bg-white text-black h-screen mt-16 text-center relative">
      {/* Background Image */}
      <figure className="w-full h-screen">
        <img
          src={bg_valo}
          alt="Background"
          className="w-full h-screen object-cover"
        />
      </figure>

      {/* Glassmorphic Container */}
      <motion.div
        className="absolute left-10 top-12 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[60vh] flex flex-col items-center justify-center rounded-lgz"
        style={{
          background: "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Grid Layout for Agent Details */}
        <motion.div
          className="grid grid-cols-1 gap-4 w-full p-6 text-left"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delayChildren: 0.2,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {/* Example Data */}
          <motion.div
            className="bg-white/50 p-4 rounded-lg shadow-md"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h2 className={`font-extrabold`}>{data.displayName}</h2>
          </motion.div>

          <motion.div
            className="bg-white/50 p-4 rounded-lg shadow-md"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="text-lg font-bold">Description:</h3>
            <p>{data.description}</p>
          </motion.div>

          {/* Add more fields as needed */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AgentDetails;

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
        className="absolute left-10 top-12 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-96 flex flex-col items-center justify-center rounded-lg"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
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
          className="grid grid-cols-1 gap-4 w-full px-6 py-2 text-left"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.2 },
            visible: {
              opacity: 0.8,
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
            className="bg-white/10 p-2 rounded-lg shadow-md flex gap-4 items-center justify-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 0.9, y: 0 },
            }}
          >
            <img
              src={data.displayIconSmall}
              alt="display Icon"
              className="h-10 w-10"
            />
            <h2 className={`font-bold text-2xl text-white`}>
              {data.displayName}
            </h2>
          </motion.div>

          <motion.div
            className="bg-white/30 p-4 rounded-lg shadow-md"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 0.9, y: 0 },
            }}
          >
            <h3 className="text-lg text-white font-bold">Description:</h3>
            <p className="text-white">{data.description}</p>
          </motion.div>

          <motion.div
            className="bg-white/30 p-4 rounded-lg shadow-md flex justify-between px-9"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 0.9, y: 0 },
            }}
          >
            <img src={data.abilities[0].displayIcon} alt="" className="h-7 w-7" />
            <img src={data.abilities[1].displayIcon} alt="" className="h-7 w-7" />
            <img src={data.abilities[2].displayIcon} alt="" className="h-7 w-7" />
            <img src={data.abilities[3].displayIcon} alt="" className="h-7 w-7" />
          </motion.div>

          {/* Add more fields as needed */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AgentDetails;

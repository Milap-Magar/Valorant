import React from "react";
import { motion } from "framer-motion";
import useAgentData from "../../hooks/useAgentData.js";
import bg_valo from "../../assets/valo_bg.jpg";
import Loading from "../Loading.js";

const AgentDetails = ({ agentId }) => {
  const { data, isLoading, error, isError } = useAgentData(agentId);
  // console.log(data);

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
      <div>
        <motion.div
          className="absolute left-1 md:left-10 lg:left-12 xl:left-14 top-12 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-96 flex flex-col items-center justify-center rounded-lg"
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
              className="bg-white/30 p-2 rounded-lg shadow-md flex gap-4 items-center justify-center"
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
              <img
                src={data.abilities[0].displayIcon}
                alt=""
                className="h-7 w-7"
              />
              <img
                src={data.abilities[1].displayIcon}
                alt=""
                className="h-7 w-7"
              />
              <img
                src={data.abilities[2].displayIcon}
                alt=""
                className="h-7 w-7"
              />
              <img
                src={data.abilities[3].displayIcon}
                alt=""
                className="h-7 w-7"
              />
            </motion.div>

            {/* Add more fields as needed */}
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute right-10 top-12 transform -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[700px] h-96 hidden lg:flex xl:flex md:flex flex-col items-center justify-center rounded-lg"
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
            <motion.div
              className="bg-white/40 p-2 rounded-lg shadow-md flex gap-2 items-center justify-center w-[180px]"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img
                src={data.role.displayIcon}
                alt="display Icon"
                className="h-7 w-7 "
              />
              <h2 className={`font-bold text-2xl text-slate-950`}>
                {data.role.displayName}
              </h2>
            </motion.div>

            <motion.div
              className="bg-white/40 p-4 rounded-lg shadow-md"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="text-lg text-white font-bold">Deatils :</h3>
              <p className="text-slate-950">{data.role.description}</p>
            </motion.div>

            <motion.div
              className="bg-white/40 p-4 rounded-lg shadow-md flex justify-between px-4 text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 0.9, y: 0 },
              }}
            >
              <figure className="flex flex-col  justify-center items-center w-[150px] text-xs">
                <img
                  src={data.abilities[0].displayIcon}
                  alt=""
                  className="h-7 w-7"
                />
                <h3 className="text-lg font-black text-black">
                  {data.abilities[0].displayName}
                </h3>
                <h3 className="text-slate-950 max-h-14 overflow-auto ">
                  {data.abilities[0].description}
                </h3>
              </figure>
              <figure className="flex flex-col  justify-center items-center w-[150px] text-xs">
                <img
                  src={data.abilities[1].displayIcon}
                  alt=""
                  className="h-7 w-7"
                />
                <h3 className="text-lg font-black text-black">
                  {data.abilities[1].displayName}
                </h3>
                <h3 className="text-slate-950 max-h-14 overflow-auto ">
                  {data.abilities[1].description}
                </h3>
              </figure>
              <figure className="flex flex-col  justify-center items-center w-[150px] text-xs">
                <img
                  src={data.abilities[2].displayIcon}
                  alt=""
                  className="h-7 w-7"
                />
                <h3 className="text-lg font-black text-black">
                  {data.abilities[2].displayName}
                </h3>
                <h3 className="text-slate-950 max-h-14 overflow-auto ">
                  {data.abilities[2].description}
                </h3>
              </figure>
              <figure className="flex flex-col  justify-center items-center w-[150px] text-xs">
                <img
                  src={data.abilities[3].displayIcon}
                  alt=""
                  className="h-7 w-7"
                />
                <h3 className="text-lg font-black text-black">
                  {data.abilities[3].displayName}
                </h3>
                <h3 className="text-slate-950 max-h-14 overflow-auto ">
                  {data.abilities[3].description}
                </h3>
              </figure>
            </motion.div>

            {/* Add more fields as needed */}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AgentDetails;

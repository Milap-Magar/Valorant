import React from "react";
import { motion } from "framer-motion";
import useWeaponData from "../hooks/useWeaponData";
import Loading from "../components/Loading.js";
import weapon from "../assets/weapon_gb.jpg";
import GuiButton from "../components/ui/GuiButton.jsx";
import { useNavigate } from "react-router-dom";

const Weapons = () => {
  const { data, isLoading, error } = useWeaponData();
  const navigate = useNavigate();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div className="text-center text-error">Error: {error}</div>;
  }

  return (
    <div className="w-full py-16 overflow-hidden relative">
      {/* Background Image with Blur */}
      <figure
        className="w-full min-h-full absolute top-0 left-0 bg-repeat"
        style={{
          backgroundImage: `url(${weapon})`,
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
        }}
      >
        {/* Optional: Empty Content */}
      </figure>

      {/* Content Overlay */}
      <div className="relative z-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-violet-950">
          Valorant Weapons
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {data.map((item) => (
            <motion.div
              key={item.uuid}
              className="cursor-pointer card bg-base-100 shadow-lg bg-white/70 backdrop-blur-lg"
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => navigate(`/weapons/${item.uuid}`)}
            >
              <figure>
                <img
                  src={item.displayIcon}
                  alt={item.displayName}
                  className="w-full h-40 object-contain p-4"
                />
              </figure>
              <div className="card-body text-center flex justify-center items-center">
                <h2 className="card-title text-center text-slate-950">
                  {item.displayName}
                  <GuiButton />
                </h2>
                <p className="text-sm text-slate-900">
                  {item.category.replace("EEquippableCategory::", "")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weapons;

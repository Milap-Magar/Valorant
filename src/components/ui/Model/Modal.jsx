import React from "react";
import { motion } from "framer-motion";

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

// Modal Component
const Modal = ({ isOpen, closeModal, weaponDetails }) => {
  if (!isOpen || !weaponDetails) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-xl relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-xl text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
        <motion.div
          className="p-6 text-center text-gray-900"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Weapon: <span className=""> {weaponDetails.displayName}</span>
          </h2>
          <p className="text-lg text-gray-700">
            Category:{" "}
            <span className="text-gray-500 font-semibold">
              {weaponDetails.category.replace("EEquippableCategory::", "")}
            </span>
          </p>
          <p className="text-lg text-gray-700 mt-2">
            Fire Rate:{" "}
            <span className="text-gray-500 font-semibold">
              {weaponDetails.weaponStats?.fireRate} Rounds/Second
            </span>
          </p>
          <p className="text-lg text-gray-700 mt-2">
            Magazine Size:{" "}
            <span className="text-gray-500 font-semibold">
              {weaponDetails.weaponStats?.magazineSize} Rounds
            </span>
          </p>
          <p className="text-lg text-gray-700 mt-2">
            Reload Time:{" "}
            <span className="text-gray-500 font-semibold">
              {weaponDetails.weaponStats?.reloadTimeSeconds} Seconds
            </span>
          </p>
          <p className="text-lg text-gray-700 mt-2">
            Wall Penetration:{" "}
            <span className="text-gray-500 font-semibold">
              {weaponDetails.weaponStats?.wallPenetration.replace(
                "EWallPenetrationDisplayType::",
                ""
              )}
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Modal;

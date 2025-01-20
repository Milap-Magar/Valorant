import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { motion, AnimatePresence } from "framer-motion";
import bg from "../assets/backgorund_valo.jpg";

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const WeaponsDetails = () => {
  const { id } = useParams();

  const [weaponDetails, setWeaponDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  useEffect(() => {
    const fetchWeapons = async () => {
      try {
        const response = await axios.get(
          `https://valorant-api.com/v1/weapons/${id}`
        );
        setWeaponDetails(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchWeapons();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const weaponSkins = weaponDetails.skins || [];

  const handleImageClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === weaponSkins.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getPrevIndex = (index) => {
    return index === 0 ? weaponSkins.length - 1 : index - 1;
  };

  const getNextIndex = (index) => {
    return index === weaponSkins.length - 1 ? 0 : index + 1;
  };

  return (
    <div className="w-full min-h-full py-16 flex flex-col items-center px-4 md:px-16 lg:px-32">
      {/* Background Image */}
      <figure
        className="w-full h-full absolute top-0 left-0 z-0"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
        }}
      ></figure>
      <div className="z-10">
        <h1 className="font-mono text-white">
          / Weapons / {weaponDetails.displayName}
        </h1>
      </div>
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-200 z-10">
        {weaponSkins[currentIndex]?.displayName}
      </h1>

      {/* Image Slider */}
      <div className="relative flex items-center justify-center w-full h-full">
        {/* Previous Image */}
        <div
          className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] flex items-center justify-center overflow-hidden bg-slate-200 shadow-lg rounded-lg cursor-pointer relative"
          onClick={() => setCurrentIndex(getPrevIndex(currentIndex))}
        >
          {weaponSkins[getPrevIndex(currentIndex)]?.chromas[0]?.fullRender && (
            <div>
              <FaArrowAltCircleLeft className="h-10 w-10 absolute text-slate-900" />
              <motion.img
                key={`prev-${getPrevIndex(currentIndex)}`}
                src={
                  weaponSkins[getPrevIndex(currentIndex)]?.chromas[0]
                    ?.fullRender || ""
                }
                alt="Previous Weapon Skin"
                className="w-full h-full object-contain blur"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          )}
        </div>

        {/* Current Image */}
        <div
          onClick={handleImageClick}
          className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center overflow-hidden bg-slate-200 shadow-lg rounded-lg cursor-pointer"
        >
          {weaponSkins[currentIndex]?.chromas[0]?.fullRender && (
            <AnimatePresence>
              <motion.img
                key={`current-${currentIndex}`}
                src={weaponSkins[currentIndex]?.chromas[0]?.fullRender || ""}
                alt="Weapon Skin"
                className="w-full h-full object-contain"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          )}
        </div>

        {/* Next Image */}
        <div
          className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] flex items-center justify-center overflow-hidden bg-slate-200 shadow-lg rounded-lg cursor-pointer relative"
          onClick={() => setCurrentIndex(getNextIndex(currentIndex))}
        >
          {weaponSkins[getNextIndex(currentIndex)]?.chromas[0]?.fullRender && (
            <div>
              <FaArrowAltCircleRight className="h-10 w-10 absolute text-slate-950 right-0" />
              <motion.img
                key={`next-${getNextIndex(currentIndex)}`}
                src={
                  weaponSkins[getNextIndex(currentIndex)]?.chromas[0]
                    ?.fullRender || ""
                }
                alt="Next Weapon Skin"
                className="w-full h-full object-contain blur"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          )}
        </div>
      </div>
      {/* Modal Trigger Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-6 py-2 px-6 bg-blue-600 text-white font-semibold rounded-lg"
      >
        Show Weapon Details
      </button>
      {/* Modal Component */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">
              Weapon: {weaponDetails.displayName}
            </h2>
            <p>Category: {weaponDetails.category}</p>
            <p>
              Fire Rate: {weaponDetails.weaponStats?.fireRate} Rounds/Second
            </p>
            <p>
              Magazine Size: {weaponDetails.weaponStats?.magazineSize} Rounds
            </p>
            <p>
              Reload Time: {weaponDetails.weaponStats?.reloadTimeSeconds}{" "}
              Seconds
            </p>
            <p>
              Wall Penetration:{" "}
              {weaponDetails.weaponStats?.wallPenetration.replace(
                "EWallPenetrationDisplayType::",
                ""
              )}
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 py-2 px-6 bg-red-600 text-white font-semibold rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeaponsDetails;

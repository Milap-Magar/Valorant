import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useAgentDeatils from "../hooks/useAgentDetails";
import Loading from "../components/Loading";

const Home = () => {
  const { data, isLoading, error } = useAgentDeatils();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  return (
    <div className="px-4 py-8">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.uuid}>
            <div className="relative flex flex-col items-center md:flex-row md:items-start md:justify-between gap-8 h-screen">
              {/* Agent Info */}
              <div className="w-full md:w-1/3 text-center md:text-left">
                <h2 className="text-2xl font-semibold">{item.displayName}</h2>
                <p className="text-gray-700 mt-4">{item.description}</p>
              </div>

              {/* Agent Image */}
              <div className="relative w-full md:w-2/3 h-auto">
                {/* Background */}
                <img
                  src={item.background}
                  alt={`${item.displayName}_background`}
                  className="absolute  top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2  max-w-auto z-0 opacity-[0.7]"
                />
                {/* Portrait */}
                <img
                  src={item.fullPortraitV2}
                  alt={`${item.displayName}_portrait`}
                  className="relative z-10 mx-auto w-auto h-96 rounded-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
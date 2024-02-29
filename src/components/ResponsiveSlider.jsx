import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ResponsiveSlider = ({ children }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      className="mySwiper"
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        100: {
          slidesPerView: 5,
        },
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 6,
        },
      }}
    >
      {children}
    </Swiper>
  );
};

export default ResponsiveSlider;

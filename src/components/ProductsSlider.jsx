import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProdcutCard from "./shared/ProdcutCard";

const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];
const ProductsSlider = ({ children }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      className="mySwiper"
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        100: {
          slidesPerView: 2,
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
      {products.map((i, idx) => (
        <SwiperSlide key={idx}>
          <ProdcutCard />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductsSlider;

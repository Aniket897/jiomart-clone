import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProdcutCard from "./shared/ProdcutCard";

const ProductsSlider = ({ products = [] }) => {
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
          <ProdcutCard product={i} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductsSlider;

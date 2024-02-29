import { SwiperSlide } from "swiper/react";
import { fruitsSliderImages } from "../../data";
import PrimarySlider from "../PrimarySlider";

const FruitsSlider = () => {
  return (
    <div className="mt-4">
      <PrimarySlider>
        {fruitsSliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img loading="lazy" src={image} alt="" />
          </SwiperSlide>
        ))}
      </PrimarySlider>
    </div>
  );
};

export default FruitsSlider;

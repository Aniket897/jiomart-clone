import { SwiperSlide } from "swiper/react";
import { categorySlider1Images, categorySlider2Images } from "../../data";
import ResponsiveSlider from "../ResponsiveSlider";

const CategorySlider = () => {
  return (
    <div className="mt-4 space-y-3 w-[99%] mx-auto">
      <ResponsiveSlider>
        {categorySlider1Images.map((image, index) => (
          <SwiperSlide key={index}>
            <img loading="lazy" src={image} key={index} alt="" />
          </SwiperSlide>
        ))}
      </ResponsiveSlider>
      <ResponsiveSlider>
        {categorySlider2Images.map((image, index) => (
          <SwiperSlide key={index}>
            <img loading="lazy" src={image} key={index} alt="" />
          </SwiperSlide>
        ))}
      </ResponsiveSlider>
    </div>
  );
};

export default CategorySlider;

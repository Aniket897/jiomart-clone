import { SwiperSlide } from "swiper/react";
import { topCategories } from "../../data";
import ResponsiveSlider from "../ResponsiveSlider";

const TopCategories = () => {
  return (
    <div>
      <ResponsiveSlider>
        {topCategories.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} alt="" />
          </SwiperSlide>
        ))}
      </ResponsiveSlider>
    </div>
  );
};

export default TopCategories;

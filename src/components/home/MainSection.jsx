import { SwiperSlide } from "swiper/react";
import { mainSliderImages, paymentFlexImages } from "../../data";
import PrimarySlider from "../PrimarySlider";
import FlexBanner from "./FlexBanner";
import Banner from "./Banner";
import Section from "../Section";
import TopCategories from "./TopCategories";
import FruitsSlider from "./FruitsSlider";
import CategorySlider from "./CategorySlider";
import ProductsSlider from "../ProductsSlider";
import TopDeals from "./TopDeals";
import TopSeller from "./TopSeller";
import TopElectronics from "./TopElectronics";

const MainSection = () => {
  return (
    <>
      <div className="mt-4">
        <PrimarySlider>
          {mainSliderImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img loading="lazy" src={image} alt="" />
            </SwiperSlide>
          ))}
        </PrimarySlider>
      </div>
      <FlexBanner images={paymentFlexImages} />
      <Banner
        image={
          "https://www.jiomart.com/images/cms/aw_rbslider/slides/1708945475_home_page_1240x209.jpg?im=Resize=(1240,150)"
        }
      />
      <div className="w-[99%] mx-auto rounded-md overflow-hidden flex items-center gap-x-2 mt-2 max-sm:flex-col max-sm:gap-y-2">
        <img
          loading="lazy"
          className="sm:w-[50%]"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1708707961_Month_End_Deals_on_Home_and_Lifestyle_1240x209.jpg?im=Resize=(1241,195)"
          alt=""
        />
        <img
          loading="lazy"
          className="sm:w-[50%] rounded-md"
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1709100427_Slim_banner_fw-webzvv.jpg?im=Resize=(1241,195)"
          alt=""
        />
      </div>
      <Section title={"Shop From Top Categories"}>
        <TopCategories />
      </Section>
      <FruitsSlider />
      <CategorySlider />
      <TopDeals />
      <Banner
        image={
          "https://www.jiomart.com/images/cms/aw_rbslider/slides/1707988225_Global_Store_Desktop.jpg?im=Resize=(1240,150)"
        }
      />
      <TopSeller />
      <TopElectronics />
      <Banner
        image={
          "https://www.jiomart.com/images/cms/aw_rbslider/slides/1708754252_D1.jpg?im=Resize=(1240,150)"
        }
      />
      <Banner
        image={
          "https://www.jiomart.com/images/cms/aw_rbslider/slides/1675955392_Jio_Cares_1240x194.jpg?im=Resize=(1240,150)"
        }
      />
    </>
  );
};

export default MainSection;

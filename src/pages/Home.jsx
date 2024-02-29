import { SwiperSlide } from "swiper/react";
import PrimarySlider from "../components/PrimarySlider";
import Navbar from "../components/shared/Navbar";
import { mainSliderImages, paymentFlexImages } from "../data";
import TopCategories from "../components/home/TopCategories";
import Section from "../components/Section";
import FlexBanner from "../components/home/FlexBanner";
import Banner from "../components/home/Banner";
import FruitsSlider from "../components/home/FruitsSlider";
import CategorySlider from "../components/home/CategorySlider";
import ProdcutCard from "../components/shared/ProdcutCard";
import ProductsSlider from "../components/ProductsSlider";

const Home = () => {
  return (
    <div>
      <Navbar />
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
      <Section title={"Top deals in Grocery"}>
        <div className="w-[95%] mx-auto">
          <ProductsSlider />
        </div>
      </Section>
      <Banner
        image={
          "https://www.jiomart.com/images/cms/aw_rbslider/slides/1707988225_Global_Store_Desktop.jpg?im=Resize=(1240,150)"
        }
      />
      <Section title={"Top deals in Grocery"}>
        <div className="w-[95%] mx-auto">
          <ProductsSlider />
        </div>
      </Section>
      <Section title={"Top deals in Grocery"}>
        <div className="w-[95%] mx-auto">
          <ProductsSlider />
        </div>
      </Section>
    </div>
  );
};

export default Home;

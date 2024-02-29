import Section from "../Section";

const Banner = ({ image }) => {
  return (
    <div className="w-[99%] mx-auto mt-4 rounded-md overflow-hidden">
      <img loading="lazy" className="w-full" src={image} alt="" />
    </div>
  );
};

export default Banner;

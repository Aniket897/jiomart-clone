const Section = ({ title, children }) => {
  return (
    <div className="w-[99%] mx-auto mt-3">
      <p className="py-3 pl-5 font-extrabold">{title}</p>
      <div>{children}</div>
    </div>
  );
};

export default Section;

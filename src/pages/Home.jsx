import { Suspense, lazy } from "react";
import FallBack from "../components/shared/FallBack";
// import MainSection from "../components/home/MainSection";
const MainSection = lazy(() => import("../components/home/MainSection"));
const Home = () => {
  return (
    <Suspense fallback={<FallBack />}>
      <MainSection />
    </Suspense>
  );
};

export default Home;

import About from "../../components/layout/About";
import Contact from "../../components/layout/Contact";
import Featured from "../../components/layout/Featured";
import Showcase from "../../components/layout/Showcase";

export const metadata = {
  title: "Home",
  description: "Home Page For Razak Mo",
};

const Home = () => {
  return (
    <>
      <Showcase />
      <About />
      <Featured />
      <Contact />
    </>
  );
};

export default Home;

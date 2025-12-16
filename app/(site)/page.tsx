// import Projects from "@/components/layout/Projects";
import About from "../../components/layout/about";
import Contact from "../../components/layout/Contact";
import Featured from "../../components/layout/Featured";
import Showcase from "../../components/layout/showcase";

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
      {/* <Projects /> */}
      <Contact />
    </>
  );
};

export default Home;

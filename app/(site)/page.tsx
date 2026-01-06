import About from "../../components/layout/about";
import Contact from "../../components/layout/contact";
import Featured from "../../components/layout/featured";
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
      <Contact />
    </>
  );
};

export default Home;

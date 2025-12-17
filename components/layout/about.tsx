import { skills } from "../../config/site";

const About = () => {
  return (
    <section id="about" className="px-4 pt-20 lg:mx-auto lg:max-w-7xl lg:px-0">
      <h1 className="text-center font-bold text-3xl text-primary">About Me</h1>
      <div className="my-4 text-center">
        <p className="text-xl">A little about myself and my capabilities</p>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-[4fr_3fr]">
        <div>
          <p>
            Hello! My name is Razak. I&apos;m a versatile software engineer with
            diverse experience designing and building both frontend and backend
            systems. Over the years, I have built robust frontends, developed
            REST APIs and designed database systems for various applications.
            <br />
            <br />
            My collaboration with cross-functional teams has been key to
            transforming creative concepts into measurable business successes.
            Whether deploying applications in cloud environments or architecting
            REST APIs and database systems, I thrive on turning complex
            challenges into effective, scalable solutions.
          </p>
          <div className="mt-6">
            <a
              href="#contact"
              className="inline-block cursor-pointer rounded-md border-none bg-alert px-6 py-3 text-background text-lg hover:scale-[0.98] hover:bg-primary-hover"
            >
              Get In touch
            </a>
          </div>
        </div>
        <div className="my-8 md:relative md:my-0">
          <p>
            Listed below are some of the technologies I currently work with:
          </p>
          <ul className="mt-4 grid list-none grid-cols-[repeat(2,minmax(140px,200px))] gap-x-2.5 gap-y-0 overflow-hidden p-0">
            {skills?.map((skill, i) => (
              <li
                className="relative mb-4 pl-6 before:absolute before:left-0 before:text-2xl before:text-alert before:leading-[1.0] before:content-['▹']"
                key={i}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

import Image from "next/image";

import { featuredProjects } from "../../config/site";
import { Icons } from "../icons";

const Featured = () => {
  return (
    <section
      id="projects"
      className="px-4 pt-20 lg:mx-auto lg:max-w-7xl lg:px-0"
    >
      <h1 className="text-center font-bold text-3xl text-primary">
        Featured Projects
      </h1>
      <div className="my-4 text-center">
        <p className="text-xl">
          Here are some of projects I&apos;ve worked on.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {featuredProjects?.map((project, index) => (
          <div key={index} className="relative rounded-[5px]">
            <div className="flex flex-col rounded-md p-8 shadow-[0_10px_30px_-15px_var(--box-shadow)] transition-all duration-300 hover:shadow-[0_20px_30px_-15px_var(--box-shadow)]">
              <div className="hidden sm:block">
                <Image
                  src={project.image}
                  alt="Project Image"
                  loading="lazy"
                  width={600}
                  height={100}
                  className="h-82 w-full rounded-md object-cover mix-blend-multiply brightness-90 contrast-100 grayscale-[40%] hover:brightness-100 hover:grayscale-0"
                />
              </div>
              <div>
                <a href={project.external} target="_blank" rel="noreferrer">
                  <h3 className="mt-3 mb-2 font-bold text-primary text-xl">
                    {project.title}
                  </h3>
                </a>
                <p className="mb-4 text-base text-primary">
                  {project.description}
                </p>

                <div className="flex justify-between">
                  <ul className="relative z-[2] flex w-[70%] list-none flex-wrap text-secondary">
                    {project.tech.map((item) => (
                      <li
                        key={`project-${item}`}
                        className="mr-5 mb-1 whitespace-nowrap text-base"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-pointer pr-4"
                      >
                        <Icons.github className="h-6 w-6 text-primary hover:text-alert" />
                      </a>
                    )}
                    {project.external && (
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-pointer pr-4"
                      >
                        <Icons.external className="h-6 w-6 text-primary hover:text-secondary" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;

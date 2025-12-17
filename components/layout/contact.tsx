"use client";

import { socialMedia } from "../../config/site";
import { Icons } from "../icons";

const Contact = () => {
  return (
    <section
      id="contact"
      className="px-4 pt-20 lg:mx-auto lg:max-w-7xl lg:px-0"
    >
      <h1 className="text-center font-bold text-3xl text-primary">Contact</h1>
      <div className="my-4 text-center">
        <p className="text-xl">
          Whether you&apos;d like to work together, or just have a chat.
          Don&apos;t hesitate to get in touch
        </p>
      </div>
      <div className="my-8 flex w-full flex-col items-center">
        <div className="h-72 w-full border border-gray-100 p-8 shadow-[0_10px_30px_-15px_var(--box-shadow)] transition-all hover:shadow-[0_20px_30px_-15px_var(--box-shadow)] md:w-[80%]">
          <div className="mb-10 flex items-start">
            <div>
              <h3 className="font-bold text-xl">Email</h3>
              <a
                href="mailto:razakmoapps@gmail.com"
                className="text-primary hover:text-alert"
              >
                razakmoapps@gmail.com
              </a>
            </div>
          </div>
          <div className="mb-10 flex items-start">
            <div>
              <h3 className="font-bold text-xl">Connect</h3>
              <ul className="m-0 flex list-none items-center gap-3 p-0">
                {socialMedia.map((item) => {
                  const Icon = item.icon ? Icons[item.icon] : Icons.external;
                  return (
                    <li key={`social-${item.name}`}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 [&>svg]:h-[30px] [&>svg]:w-[30px] [&>svg]:text-primary [&>svg]:hover:text-alert [&>svg]:focus:text-alert"
                      >
                        <Icon />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

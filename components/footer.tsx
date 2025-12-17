import { Icons } from "./icons";
import { footerLinks, navLinks, socialMedia } from "../config/site";

export function Footer() {
  return (
    <footer className="overflow-hidden bg-primary py-16 text-gray-600">
      <div className="grid h-full grid-cols-1 items-center justify-center gap-5 px-4 sm:grid-cols-2 lg:mx-auto lg:max-w-7xl lg:grid-cols-4 lg:p-0">
        <div>
          <h2 className="mb-2 font-bold text-2xl text-background">Razak Mo</h2>
          <p className="text-gray-600 text-xl">Software Developer</p>
          <ul className="m-0 flex list-none items-center gap-3 p-0 [&_svg]:h-[30px] [&_svg]:w-[30px] [&_svg]:hover:text-alert [&_svg]:focus:text-alert">
            {socialMedia.map((item) => {
              const Icon = item.icon ? Icons[item.icon] : Icons.external;
              return (
                <li key={`<social-${item.name}`}>
                  <a
                    className="p-1.5"
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon />
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="mt-8 text-lg text-transparent-color">
            &copy; 2025 Razak Mo
          </p>
        </div>
        <div>
          <ul>
            {navLinks.map((item) => (
              <li className="p-1.5" key={`link-${item.name}`}>
                <a
                  className="text-transparent-color capitalize hover:text-background"
                  href={item.url}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {footerLinks.map((item) => (
              <li className="p-1.5" key={`link-${item.name}`}>
                <a
                  className="text-transparent-color capitalize hover:text-background"
                  href={item.url}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-2 font-semibold text-2xl text-background">
            Contact
          </h2>
          <p className="w-62 pb-12 text-lg text-transparent-color">
            Are you interested in working together?
          </p>
          <a
            href="#contact"
            className="inline-block cursor-pointer rounded-md border-none bg-alert px-5 py-3 text-background hover:scale-[0.98] hover:bg-primary-hover"
          >
            Get In touch
          </a>
        </div>
      </div>
    </footer>
  );
}

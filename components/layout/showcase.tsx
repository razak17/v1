const Showcase = () => {
  return (
    <div className="showcase relative h-[calc(100vh-140px)] bg-primary text-background md:h-[calc(100vh-180px)]">
      <div className="mx-auto grid h-full max-w-7xl grid-cols-[75%_auto] items-center justify-center gap-8 overflow-visible md:grid-cols-[55%_auto]">
        <div>
          <h1 className="font-bold text-7xl md:leading-[1.2]">
            Full Stack Software Developer
          </h1>
          <p className="mt-4 text-gray-600 text-lg md:text-2xl md:leading-[1.6]">
            Full Stack Software Developer with 4+ years of experience designing,
            building, and optimizing scalable web applications.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block cursor-pointer rounded-md border-none bg-alert px-6 py-3 text-lg hover:scale-[0.98] hover:bg-primary-hover"
          >
            Get In touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Showcase;

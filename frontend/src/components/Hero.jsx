import heroImg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-[500px] md:h-[619px]">

      
      <img
        src={heroImg}
        alt="hero"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

      
      <div className="absolute top-1/2 left-6 md:left-16 transform -translate-y-1/2 text-white max-w-xl">

        <h1 className="text-4xl md:text-6xl font-light leading-tight">
          VISION <br />
          <span className="text-[#E5C89A]">BY KPIXELS</span>
        </h1>

        <p className="text-sm tracking-widest mt-2 text-gray-200">
          WHERE VISION MEETS REALITY
        </p>

        <p className="mt-4 text-gray-200 text-sm md:text-base">
          Premium Photography & Videography <br />
          for Every Occasion
        </p>

        <div className="mt-6 flex gap-4">

          <a href="#membership">
            <button
              className="
                bg-black
                hover:bg-white/30
                text-white
                px-5
                py-3
                rounded-md
                text-sm
                transition
                duration-300
              "
            >
              VIEW PACKAGES
            </button>
          </a>

          <a href="#services">
            <button
              className="
                bg-black
                hover:bg-white/30
                text-white
                px-5
                py-3
                rounded-md
                text-sm
                transition
                duration-300
              "
            >
              OUR SERVICES
            </button>
          </a>

        </div>
      </div>

    </section>
  );
};

export default Hero;
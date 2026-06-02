import logo from "../assets/logo.jpeg";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#EDE5DA] px-6 md:px-12 py-4 flex items-center justify-between">

      <a
        href="#home"
        className="flex items-center gap-3"
      >
        <img
          src={logo}
          alt="Vision By Kpixels Logo"
          className="
            h-12
            w-12
            md:h-14
            md:w-14
            rounded-full
            object-cover
            border-2
            border-[#C89B5E]
          "
        />

        <div>
          <h1
            className="
              text-lg 
              md:text-xl
              font-bold 
              tracking-wide
              text-[#1A1A1A]
            "
          >
            VISION
          </h1>

          <p
            className="
              text-[10px]
              md:text-xxs
              tracking-[0.2em]
              text-gray-600
            "
          >
            BY KPIXELS
          </p>
        </div>
      </a>

      <ul className="hidden md:flex gap-8 text-[#1A1A1A] font-medium">

        <li>
          <a
            href="#about"
            className="hover:text-[#C89B5E] transition"
          >
            ABOUT
          </a>
        </li>

        <li>
          <a
            href="#services"
            className="hover:text-[#C89B5E] transition"
          >
            SERVICES
          </a>
        </li>

        <li>
          <a
            href="#gallery"
            className="hover:text-[#C89B5E] transition"
          >
            GALLERY
          </a>
        </li>

        <li>
          <a
            href="#team"
            className="hover:text-[#C89B5E] transition"
          >
            OUR TEAM
          </a>
        </li>

      </ul>

      <a href="#enquiry">
        <button
          className="
            bg-[#C89B5E]
            hover:bg-[#A87B3E]

            text-white

            px-4
            py-2

            rounded-md

            text-sm

            transition
          "
        >
          ENQUIRE NOW
        </button>
      </a>

    </nav>
  );
};

export default Navbar;
const Footer = () => {
  return (
    <footer className="bg-[#EDE5DA] border-t border-[#D8C9B3]">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          <div>

            <h2 className="text-3xl font-serif text-[#C89B5E]">
              VISION
            </h2>

            <p className="text-sm tracking-[0.25em] text-gray-600 mt-1">
              BY KPIXELS
            </p>

            <p className="mt-6 text-gray-600 leading-7">
              Premium Photography & Videography
              crafted to transform moments into
              timeless visual stories.
            </p>

            <p className="mt-4 italic text-[#A87B3E]">
              Where Vision Meets Reality
            </p>

          </div>

          <div>

            <h3 className="text-xl font-serif text-[#C89B5E] mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-gray-700">

              <a
                href="#home"
                className="hover:text-[#C89B5E] transition"
              >
                Home
              </a>

              <a
                href="#about"
                className="hover:text-[#C89B5E] transition"
              >
                About Us
              </a>

              <a
                href="#services"
                className="hover:text-[#C89B5E] transition"
              >
                Services
              </a>

              <a
                href="#gallery"
                className="hover:text-[#C89B5E] transition"
              >
                Gallery
              </a>

              <a
                href="#team"
                className="hover:text-[#C89B5E] transition"
              >
                Our Team
              </a>

              <a
                href="#membership"
                className="hover:text-[#C89B5E] transition"
              >
                Membership Plans
              </a>


            </div>

          </div>

          <div>

            <h3 className="text-xl font-serif text-[#C89B5E] mb-6">
              Contact Information
            </h3>

            <div className="space-y-4 text-gray-700">

              <a
                href="https://www.google.com/maps?q=19.46308708190918,72.77468872070312&z=17&hl=en"
              >
                📍 Radha Niwas Building, Agashi Bhandarwada, Virar(W), 401301.
              </a>
              
              <p className="mt-4">
                📞 +91-7972871684
              </p>

              <p>
                ✉️ visionbykpixels@gmail.com
              </p>

            </div>

            <div className="mt-8">

              <h4 className="text-lg font-serif text-[#C89B5E] mb-4">
                Follow Us
              </h4>

              <div className="flex gap-6 text-gray-700">

                <a
                  href="https://www.instagram.com/vision_by_kpixels?igsh=YjE0cm1neHh1MHFs"
                  className="hover:text-[#C89B5E] transition"
                >
                  Instagram
                </a>

                <a href="https://www.facebook.com/share/1QNkdt4gTe/?mibextid=wwXIfr" className="hover:text-[#C89B5E] transition">
                  Facebook
                </a>


              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-[#D8C9B3]">

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6">

          <div className="flex flex-col md:flex-row justify-center items-center gap-3">

            <p className="text-sm text-gray-600 text-center">
              © {new Date().getFullYear()} Vision By Kpixels.
              All Rights Reserved.
            </p>

           

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
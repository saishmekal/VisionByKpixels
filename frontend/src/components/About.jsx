import { useEffect, useState } from "react";
import aboutImg from "../assets/about.jpg";

const services = [
  "Wedding Photography & Cinematic Wedding Films",
  "Pre-Wedding & Engagement Shoots",
  "Events & Celebrations",
  "Brand Shoots & Product Photography",
  "Reels, Short Videos & Social Media Content",
  "Portraits & Lifestyle Sessions",
];

const About = () => {

  const [showServices, setShowServices] = useState(false);


  useEffect(() => {

    const handleScroll = () => {

      const section = document.getElementById("about");

      if (section) {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {
          setShowServices(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <section
      id="about"
      className="w-full bg-[#EDE5DA] py-16 px-6 md:px-12 overflow-hidden"
    >

      <div className="max-w-7xl mx-auto">

        
        <h2 className="text-center text-4xl md:text-6xl font-serif text-[#B88A44] mb-16">
          About Us
        </h2>

        
        <div className="relative flex flex-col md:flex-row items-start gap-10">

          
          <div
            className="
              w-full
              md:w-[320px]
              h-[400px]
              md:h-[540px]
              rounded-[20px]
              overflow-hidden
              shrink-0
              shadow-[0_12px_35px_rgba(0,0,0,0.12)]
            "
          >

            <img
              src={aboutImg}
              alt="about"
              className="
                w-full
                h-full
                object-cover
              "
            />

          </div>

          
          <div className="flex-1 w-full">

            
            <div
              className="
                text-[#2A2A2A]
                text-sm
                md:text-base
                leading-8
                md:leading-9
                space-y-5
              "
            >

              <p>
                <span className="font-semibold text-[#B88A44]">
                  Vision by Kpixels
                </span>{" "}
                founded by Kaushik Shinde, is a creative photography and
                videography studio dedicated to transforming real moments into
                cinematic visual stories.
              </p>

              <p>
                With a strong focus on emotion, artistry, and precision,
                we craft timeless images and films that reflect the true
                essence of every story.
              </p>

            </div>

            
            <h3
              className="
                mt-10
                text-2xl
                md:text-3xl
                font-serif
                text-[#B88A44]
                mb-6
              "
            >
              Our Services
            </h3>

            
            <div className="flex flex-col gap-3 overflow-hidden">

              {services.map((service, index) => (
                <div
                  key={index}
                  className={`
                    transition-all
                    duration-700
                    ease-out

                    ${
                      showServices
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-20 opacity-0"
                    }
                  `}
                  style={{
                    transitionDelay: `${index * 120}ms`,
                  }}
                >

                  <p
                    className="
                      text-xs
                      sm:text-sm
                      md:text-[15px]
                      text-[#4A4A4A]
                      leading-7
                      tracking-wide
                      border-l-2
                      border-[#C89B5E]
                      pl-4
                      hover:text-[#B88A44]
                      cursor-pointer
                    "
                  >
                    {service}
                  </p>

                </div>
              ))}

            </div>

            
            <p
              className="
                mt-5
                italic
                text-[#5A5A5A]
                text-sm
                md:text-base
                leading-8
              "
            >
              “At Vision by Kpixels, every frame is created with intention —
              where vision meets reality.”
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
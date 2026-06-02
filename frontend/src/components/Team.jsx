import { useState } from "react";
import member1 from "../assets/Swayam_Nagavkar.jpg";
import member2 from "../assets/Riti_Poojari.jpg";
import member3 from "../assets/Aditi_Poojari.jpg";
import member4 from "../assets/Jay_Khandekar.jpg";
import member5 from "../assets/Aditya_Kolambekar.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Swayam Nagavkar",
    role: "BTS Content Specialist",
    image: member1,
  },
  {
    id: 2,
    name: "Riti Poojari",
    role: "Finance Manager",
    image: member2,
  },
  {
    id: 3,
    name: "Aditi Poojari",
    role: "Pose Director",
    image: member3,
  },
  {
    id: 4,
    name: "Jay Khandekar",
    role: "Production Assistant",
    image: member4,
  },
  {
    id: 5,
    name: "Aditya Kolambekar",
    role: "Lead Post-Production Editor",
    image: member5,
  },
];

const Team = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    if (startIndex < teamMembers.length - 3) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleMembers = teamMembers.slice(
    startIndex,
    startIndex + 3
  );

  return (
    <section
      id="team"
      className="w-full bg-[#F5EFE7] py-20 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-6xl font-serif text-[#C89B5E] tracking-wide">
            MEET OUR TEAM
          </h2>

          <p className="text-gray-500 mt-4 text-sm md:text-base">
            The creative minds behind Vision By Kpixels
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {visibleMembers.map((member) => (
            <div
              key={member.id}
              className="
                group
                h-[430px]
                bg-[#FAF7F2]
                border-2
                border-[#D8D0C4]
                rounded-2xl
                p-6

                flex
                flex-col
                items-center
                justify-center

                shadow-[0_8px_20px_rgba(0,0,0,0.05)]

                hover:border-[#C89B5E]
                hover:-translate-y-3
                hover:shadow-[0_18px_40px_rgba(200,155,94,0.20)]

                transition-all
                duration-500
              "
            >

              {/* Image */}
              <div
                className="
                  w-36
                  h-36
                  rounded-full
                  overflow-hidden
                  border-4
                  border-[#C89B5E]
                  mb-8
                  shadow-[0_4px_15px_rgba(200,155,94,0.15)]
                "
              >

                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  loading="lazy"
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />

              </div>

              {/* Name */}
              <h3
                className="
                  text-2xl
                  md:text-3xl
                  font-serif
                  text-[#1A1A1A]
                  text-center

                  transition-colors
                  duration-500

                  group-hover:text-[#C89B5E]
                "
              >
                {member.name}
              </h3>

              {/* Role */}
              <p
                className="
                  mt-3
                  text-sm
                  md:text-base
                  text-gray-500
                  tracking-wide
                  text-center
                "
              >
                {member.role}
              </p>

            </div>
          ))}

        </div>

        {/* Navigation Buttons BELOW Cards */}
        <div className="flex justify-center gap-4 mt-10 md:mt-12">

          <button
            onClick={prevSlide}
            disabled={startIndex === 0}
            className="
              w-12
              h-12
              rounded-full
              bg-[#C89B5E]
              text-white

              flex
              items-center
              justify-center

              shadow-[0_4px_15px_rgba(200,155,94,0.20)]

              hover:bg-[#B88445]
              hover:scale-110
              hover:shadow-[0_8px_25px_rgba(200,155,94,0.35)]

              disabled:opacity-50
              disabled:hover:scale-100

              transition-all
              duration-300
            "
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            disabled={startIndex >= teamMembers.length - 3}
            className="
              w-12
              h-12
              rounded-full
              bg-[#C89B5E]
              text-white

              flex
              items-center
              justify-center

              shadow-[0_4px_15px_rgba(200,155,94,0.20)]

              hover:bg-[#B88445]
              hover:scale-110
              hover:shadow-[0_8px_25px_rgba(200,155,94,0.35)]

              disabled:opacity-50
              disabled:hover:scale-100

              transition-all
              duration-300
            "
          >
            →
          </button>

        </div>

      </div>
    </section>
  );
};

export default Team;
import { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Priya & Rohit",
    review:
      "Vision By Kpixels beautifully captured our wedding moments. Every photo felt magical and cinematic.",
  },

  {
    id: 2,
    name: "Anjali Sharma",
    review:
      "The team was extremely professional and friendly. The pictures came out amazing and natural.",
  },

  {
    id: 3,
    name: "Kunal Mehta",
    review:
      "Absolutely loved the cinematic video and edits. Highly recommended for weddings and events.",
  },

  {
    id: 4,
    name: "Neha Verma",
    review:
      "Their photography style is elegant and premium. We loved every single picture delivered.",
  },
];

const Testimonials = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="w-full bg-[#F5EFE7] py-20 px-6 md:px-10">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-6xl font-serif text-[#C89B5E] leading-tight">
            What Our Client’s Say
          </h2>

        </div>

        <div
          className="
            flex
            md:grid
            md:grid-cols-4
            gap-6
            overflow-x-auto
            md:overflow-visible
            snap-x
            snap-mandatory
            pb-4
          "
        >

          {reviews.map((review, index) => (
            <div
              key={review.id}

              onMouseEnter={() => setActiveIndex(index)}

              className="
                min-w-[240px]
                md:min-w-0
                min-h-[280px]
                bg-[#E8D1A7]
                border-[3px]
                border-[#D09A67]
                rounded-[40px]
                p-5 md:p-6
                flex
                flex-col
                justify-between
                snap-center
                shadow-[0_8px_25px_rgba(200,155,94,0.12)]
                hover:shadow-[0_10px_35px_rgba(200,155,94,0.22)]
                transition
                duration-300
              "
            >

              <h3
                className="
                  text-2xl
                  md:text-3xl
                  font-serif
                  text-white
                "
              >
                {review.name}
              </h3>

              <p
                className="
                  text-xs
                  sm:text-sm
                  md:text-base
                  text-[#5F5F5F]
                  leading-relaxed
                  mt-4
                "
              >
                {review.review}
              </p>

              <div className="flex gap-1 text-[#C89B5E] text-lg md:text-xl mt-5">
                ★ ★ ★ ★ ★
              </div>

            </div>
          ))}

        </div>

        <div className="flex justify-center gap-3 mt-10">

          {reviews.map((_, index) => (
            <div
              key={index}
              className={`
                w-3
                h-3
                rounded-full
                transition
                duration-300

                ${
                  activeIndex === index
                    ? "bg-[#C89B5E] scale-125"
                    : "bg-[#E0C89E]"
                }
              `}
            ></div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
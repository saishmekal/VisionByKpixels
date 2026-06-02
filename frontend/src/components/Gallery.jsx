import gallery1 from "../assets/lt.jpg";
import gallery2 from "../assets/rt.jpg";
import gallery3 from "../assets/lb.jpg";
import gallery4 from "../assets/rb.jpg";
import gallery5 from "../assets/br.jpg";
import gallery6 from "../assets/temp2.jpeg";
import gallery7 from "../assets/bottom1.jpeg";
import gallery8 from "../assets/b2.jpeg";
import cinematic from "../assets/cinematic.mp4";

const Gallery = () => {
  return (
    <section id="gallery" className="w-full bg-[#FFE7C7]/60 py-16 px-4 md:px-10">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-serif text-[#C89B5E]">
            Gallery
          </h2>
        </div>

        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-4
            auto-rows-[140px]
            md:auto-rows-[180px]
          "
        >

          <div className="hidden md:block rounded-md overflow-hidden group">
            <img
              src={gallery1}
              alt="gallery"
              className="
                w-full
                h-full
                object-cover
                transition
                duration-500
                group-hover:scale-105
              "
            />
          </div>

          <div
            className="
              col-span-2
              row-span-2
              rounded-md
              overflow-hidden
              group
            "
          >
            <video
              src={cinematic}
              autoPlay
              muted
              loop
              playsInline
              className="
                w-full
                h-full
                object-cover
                transition
                duration-500
                group-hover:scale-105
              "
            />
          </div>

          <div className="rounded-md overflow-hidden group">
            <img
              src={gallery2}
              alt="gallery"
              className="
                w-full
                h-full
                object-cover
                transition
                duration-500
                group-hover:scale-105
              "
            />
          </div>

          <div className="rounded-md overflow-hidden group">
            <img
              src={gallery3}
              alt="gallery"
              className="
                w-full
                h-full
                object-cover
                transition
                duration-500
                group-hover:scale-105
              "
            />
          </div>

            <div className="hidden md:block rounded-md overflow-hidden group">
            <img
                src={gallery4}
                alt="gallery"
                className="
                w-full
                h-full
                object-cover
                transition
                duration-500
                group-hover:scale-105
                "
            />
            </div>

          <div
            className="
              col-span-2
              rounded-md
              overflow-hidden
              group
            "
          >
            <img
              src={gallery6}
              alt="gallery"
              className="
                w-full
                h-full
                object-cover
                transition
                duration-500
                group-hover:scale-105
              "
            />
          </div>

          <div
            className="
              col-span-2
              row-span-2
              rounded-md
              overflow-hidden
              group
            "
          >
            <img
              src={gallery5}
              alt="gallery"
              className="
                w-full
                h-full
                object-cover
                transition
                duration-500
                group-hover:scale-105
              "
            />
          </div>

          <div className="rounded-md overflow-hidden group">
            <img
              src={gallery7}
              alt="gallery"
              className="
                w-full
                h-full
                object-cover
                transition
                duration-500
                group-hover:scale-105
              "
            />
          </div>

          <div className="rounded-md overflow-hidden group">
            <img
              src={gallery8}
              alt="gallery"
              className="
                w-full
                h-full
                object-cover
                transition
                duration-500
                group-hover:scale-105
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;
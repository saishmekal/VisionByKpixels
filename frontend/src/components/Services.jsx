import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import service4 from "../assets/service4.jpg";
import service5 from "../assets/service5.jpg";
import service6 from "../assets/service6.jpg";

const servicesData = [
  {
    id: 1,
    image: service1,
    title: "Wedding Shoots",
  },
  {
    id: 2,
    image: service2,
    title: "Baby Shower",
  },
  {
    id: 3,
    image: service3,
    title: "Baby Shoots",
  },
  {
    id: 4,
    image: service4,
    title: "Pre Wedding",
  },
  {
    id: 5,
    image: service5,
    title: "Model Shoots",
  },
  {
    id: 6,
    image: service6,
    title: "Coming Soon",
  },
];

const Services = () => {
  return (
    <section id="services" className="w-full bg-[#EDE5DA] py-16 px-6 md:px-12">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-serif text-[#B88A44]">
            Our Services
          </h2>

          <p className="text-gray-500 mt-4 text-sm md:text-lg">
            Premium photography services <br />
            tailored for your unique style
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-md border-[3px] border-[#D1B48C] bg-[#F5EFE7] h-[280px] shadow-sm"
            >

              {service.image ? (
                <>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500"></div>

                  
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white text-lg font-semibold drop-shadow-lg">
                      {service.title}
                    </h3>
                  </div>
                </>
              ) : (

                
                <div className="w-full h-full flex items-center justify-center p-6 text-center">
                  <h3 className="text-[#4A4A4A] text-lg font-medium leading-8">
                    {service.title}
                  </h3>
                </div>

              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;
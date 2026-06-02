import bronzeBadge from "../assets/bronze-badge.png";
import silverBadge from "../assets/silver-badge.png";
import goldBadge from "../assets/gold-badge.png";

const plans = [
  {
    id: 1,
    name: "Silver",
    icon: silverBadge,
    border: "border-[#C9C5C5]",
    bg: "bg-[#D9D5D5]",
    button: "bg-[#B7B2B2]",
    popular: false,
    details: [
      "15% OFF",
      "Table Calendar",
      "Mini Photo Book",
      "Premium Frame",
      "1 Edited Reel",
    ],
  },

  {
    id: 2,
    name: "Gold",
    icon: goldBadge,
    border: "border-[#E2C16B]",
    bg: "bg-[#F0D890]",
    button: "bg-[#D4B45C]",
    popular: true,
    details: [
      "20% OFF",
      "Table Calendar",
      "Mini Photo Book",
      "Premium Frame",
      "2 Edited Reels",
    ],
  },

  {
    id: 3,
    name: "Bronze",
    icon: bronzeBadge,
    border: "border-[#C89B5E]",
    bg: "bg-[#E8D1A7]",
    button: "bg-[#C89B5E]",
    popular: false,
    details: [
      "10% OFF",
      "Table Calendar",
      "Mini Photo Book",
    ],
  },
];

const Membership = () => {

  const handleChoosePlan = (planName) => {

    const phoneNumber = "917972871684";

    const message = `Hey, I was interested in the ${planName} package for [Event Name]`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section
      id="membership"
      className="w-full bg-[#F5EFE7] py-20 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-6xl font-serif text-[#C89B5E] leading-tight">
            Membership <br />
            Plans
          </h2>

          <p className="text-gray-500 mt-5 text-sm md:text-base">
            Join our exclusive membership
            <br />
            program and enjoy premium benefits
          </p>

        </div>

        {/* Cards */}
        <div
          className="
            flex
            md:grid
            md:grid-cols-3
            gap-8

            overflow-x-auto
            md:overflow-visible

            snap-x
            snap-mandatory

            pb-4
          "
        >

          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`
                relative

                min-w-[280px]
                md:min-w-0

                h-[520px]

                rounded-2xl

                border-[3px]
                ${plan.border}

                bg-[#FAF7F2]

                p-8

                flex
                flex-col
                items-center
                justify-between

                snap-center

                shadow-[0_8px_20px_rgba(0,0,0,0.08)]

                hover:-translate-y-2
                hover:shadow-[0_20px_35px_rgba(200,155,94,0.22)]

                transition-all
                duration-300
              `}
            >

              {/* Popular Badge */}
              {plan.popular && (
                <div
                  className="
                    absolute
                    top-3
                    right-3

                    bg-[#C89B5E]

                    text-black
                    text-xs

                    px-4
                    py-1

                    rounded-full

                    font-medium
                  "
                >
                  POPULAR
                </div>
              )}

              {/* Top Section */}
              <div className="flex flex-col items-center">

                {/* Badge */}
                <div
                  className={`
                    w-24
                    h-24

                    rounded-full

                    ${plan.bg}

                    mb-6

                    flex
                    items-center
                    justify-center

                    shadow-[0_8px_20px_rgba(0,0,0,0.08)]
                  `}
                >

                  <img
                    src={plan.icon}
                    alt={`${plan.name} Membership`}
                    loading="lazy"
                    className="
                      w-14
                      h-14
                      object-contain
                    "
                  />

                </div>

                {/* Plan Name */}
                <h3 className="text-4xl font-serif text-[#1A1A1A]">
                  {plan.name}
                </h3>

              </div>

              {/* Details */}
              <div className="text-center space-y-3">

                {plan.details.map((detail, index) => (
                  <p
                    key={index}
                    className="
                      text-gray-500
                      text-sm
                      md:text-base
                    "
                  >
                    {detail}
                  </p>
                ))}

              </div>

              {/* Button */}
              <button
                onClick={() => handleChoosePlan(plan.name)}
                className={`
                  ${plan.button}

                  text-black

                  px-8
                  py-3

                  rounded-full

                  font-medium

                  hover:scale-105

                  transition
                `}
              >
                Choose {plan.name}
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Membership;
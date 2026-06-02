import axios from "axios";
import { useState } from "react";

const Enquiry = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    eventDate: "",
    eventDays: "",
    location: "",
    budget: "",
    eventType: "Wedding",
  });

  const [errors, setErrors] = useState({});

  const [showPopup, setShowPopup] = useState(false);

  const validateField = (name, value) => {

    let error = "";

    if (name === "fullName") {

      if (/\d/.test(value)) {
        error = "Please type characters only";
      }
    }

    if (name === "contact") {

      if (/[^0-9]/.test(value)) {
        error = "Please type numbers only";
      }

      else if (value.length > 10) {
        error = "Contact number cannot exceed 10 digits";
      }
    }

    if (name === "budget") {

      if (/[^0-9]/.test(value)) {
        error = "Please type numbers only";
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.contact.length < 10) {
      setErrors((prev) => ({
        ...prev,
        contact: "Contact number must be 10 digits",
      }));
      return;
    }

    const hasErrors = Object.values(errors).some(
      (error) => error !== ""
    );

    if (hasErrors) return;

    try {
      const response = await axios.post(
        "http://localhost:5000/api/leads",
        formData
      );

      console.log("SUCCESS:", response.data);

      setShowPopup(true);

      setFormData({
        fullName: "",
        contact: "",
        eventDate: "",
        eventDays: "",
        location: "",
        budget: "",
        eventType: "Wedding",
      });

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);

    } catch (error) {

      console.error("ERROR:", error);

      console.error("Response:", error.response);

      alert(
        error.response?.data?.message ||
        error.message ||
        "Something went wrong"
      );
    }
  };

  return (
    <section id="enquiry" className="w-full bg-[#F5EFE7] py-20 px-6 md:px-10">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">

          <h2 className="text-4xl md:text-6xl font-serif text-[#C89B5E]">
            ENQUIRE NOW
          </h2>

        </div>

        <div
          className="
            bg-[#DEC27D]
            rounded-md
            px-6
            py-12
            md:px-16
            md:py-16
            shadow-[0_8px_30px_rgba(200,155,94,0.15)]
          "
        >

          <form
            onSubmit={handleSubmit}
            className="
              flex
              flex-col
              items-center
              gap-5
            "
          >

            <div className="w-full max-w-sm">

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="
                  w-full
                  px-4
                  py-2
                  rounded-xl
                  border-[3px]
                  border-[#F5EFE7]
                  bg-[#E8D7AA]
                  outline-none
                  text-[#3A3A3A]
                  placeholder:text-[#5A5A5A]
                "
              />

              {errors.fullName && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.fullName}
                </p>
              )}

            </div>

            <div className="w-full max-w-sm">

              <input
                type="text"
                name="contact"
                placeholder="Contact"
                value={formData.contact}
                onChange={handleChange}
                maxLength={11}
                className="
                  w-full
                  px-4
                  py-2
                  rounded-xl
                  border-[3px]
                  border-[#F5EFE7]
                  bg-[#E8D7AA]
                  outline-none
                  text-[#3A3A3A]
                "
              />

              {errors.contact && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.contact}
                </p>
              )}

            </div>

            <div className="w-full max-w-sm">

              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className="
                  w-full
                  px-4
                  py-2
                  rounded-xl
                  border-[3px]
                  border-[#F5EFE7]
                  bg-[#E8D7AA]
                  outline-none
                  text-[#3A3A3A]
                "
              />

            </div>

            <div className="w-full max-w-sm">

              <input
                type="text"
                name="eventDays"
                placeholder="Event Days"
                value={formData.eventDays}
                onChange={handleChange}
                className="
                  w-full
                  px-4
                  py-2
                  rounded-xl
                  border-[3px]
                  border-[#F5EFE7]
                  bg-[#E8D7AA]
                  outline-none
                  text-[#3A3A3A]
                "
              />

            </div>

            <div className="w-full max-w-sm">

              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                className="
                  w-full
                  px-4
                  py-2
                  rounded-xl
                  border-[3px]
                  border-[#F5EFE7]
                  bg-[#E8D7AA]
                  outline-none
                  text-[#3A3A3A]
                "
              />

            </div>

            <div className="w-full max-w-sm">

              <input
                type="text"
                name="budget"
                placeholder="Budget"
                value={formData.budget}
                onChange={handleChange}
                className="
                  w-full
                  px-4
                  py-2
                  rounded-xl
                  border-[3px]
                  border-[#F5EFE7]
                  bg-[#E8D7AA]
                  outline-none
                  text-[#3A3A3A]
                "
              />

              {errors.budget && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.budget}
                </p>
              )}

            </div>

            <div className="w-full max-w-sm">

              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="
                  w-full
                  px-4
                  py-2
                  rounded-xl
                  border-[3px]
                  border-[#F5EFE7]
                  bg-[#E8D7AA]
                  outline-none
                  text-[#3A3A3A]
                "
              >

                <option>Wedding</option>
                <option>Pre-wedding</option>
                <option>Baby shower</option>
                <option>Baby shoot</option>
                <option>Model shoot</option>
                <option>Other</option>

              </select>

            </div>

            <button
              type="submit"
              className="
                mt-4
                bg-[#3A3A3A]
                text-white
                px-10
                py-3
                rounded-xl
                hover:scale-105
                transition
                duration-300
              "
            >
              Submit
            </button>

          </form>

        </div>

      </div>

      {showPopup && (
        <div
          className="
            fixed
            top-6
            right-6
            bg-[#3A3A3A]
            text-white
            px-6
            py-4
            rounded-xl
            shadow-lg
            z-50
            animate-bounce
          "
        >
          Thanks for submitting! <br />
          Our team will contact you shortly.
        </div>
      )}

    </section>
  );
};

export default Enquiry;
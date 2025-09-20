import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";
import illustration1 from "../../assets/contact/illustration1.png";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // new state for button

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic JS validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill all the fields!");
      return;
    }

    setLoading(true); // disable button while sending

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          toast.error("Failed to send message. Try again later.");
          console.error(error);
        }
      )
      .finally(() => setLoading(false)); // enable button after sending
  };

  return (
    <div className="mt-14 px-4 bg-gray-50">
      <Toaster position="top-right" />
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 min-h-[600px] sm:min-h-[700px] lg:min-h-[500px]">
        {/* Left Image */}
        <div className="hidden sm:block lg:w-[600px]">
          <img src={illustration1} alt="Contact Us" className="w-full h-auto" />
        </div>

        {/* Form */}
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-xl mb-12 mt-12 shadow-md">
          <form onSubmit={handleSubmit} noValidate>
            {/* Full Name */}
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full rounded-md border-2 border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-700 focus:shadow-md"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@domain.com"
                className="w-full rounded-md border-2 border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-700 focus:shadow-md"
                required
              />
            </div>

            {/* Subject */}
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter your subject"
                className="w-full rounded-md border-2 border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-700 focus:shadow-md"
                required
              />
            </div>

            {/* Message */}
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message"
                className="w-full resize-none rounded-md border-2 border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-purple-700 focus:shadow-md"
                required
              ></textarea>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                disabled={loading} // disable button while sending
                className={`hover:shadow-form rounded-md bg-purple-700 py-3 px-8 text-base font-semibold text-white outline-none ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;

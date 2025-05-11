"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import SubjectIcon from "@mui/icons-material/Subject";
import SendIcon from "@mui/icons-material/Send";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState({
    text: "",
    isError: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.name) errs.name = "Name is required";
    if (!formData.email) errs.email = "Email is required";
    if (!formData.subject) errs.subject = "Subject is required";
    if (!formData.message) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_ipbmjk9",
        "template_3kvwx3z",
        formData,
        "WdtpEMWw4VFIUpHeP"
      );
      setSubmitMessage({ text: "Message sent successfully!", isError: false });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      setSubmitMessage({
        text: "Failed to send message. Try again later.",
        isError: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#333] text-white flex flex-col items-center py-24 px-4 sm:px-8 lg:px-16">
      {/* Header Section */}
      <header className="text-center w-full max-w-4xl mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Contact <span className="text-yellow-400">Us</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Have questions or feedback? We'd love to hear from you! Fill out the
          form below and we'll get back to you as soon as possible.
        </p>
      </header>

      {/* Contact Form Section */}
      <section className="w-full max-w-3xl bg-[#444] rounded-xl overflow-hidden shadow-xl p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium flex items-center">
              <PersonIcon className="mr-2 text-yellow-400" fontSize="small" />
              Name*
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-yellow-400"
              }`}
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="text-red-500 mt-1 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium flex items-center">
              <EmailIcon className="mr-2 text-yellow-400" fontSize="small" />
              Email Address*
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-yellow-400"
              }`}
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="text-red-500 mt-1 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium flex items-center">
              <PhoneIcon className="mr-2 text-yellow-400" fontSize="small" />
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 ${
                errors.phone
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-yellow-400"
              }`}
              placeholder="(123) 456-7890"
            />
            {errors.phone && (
              <p className="text-red-500 mt-1 text-sm">{errors.phone}</p>
            )}
          </div>

          {/* Subject Field */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium flex items-center">
              <SubjectIcon className="mr-2 text-yellow-400" fontSize="small" />
              Subject*
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 ${
                errors.subject
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-yellow-400"
              }`}
              placeholder="What's this about?"
            />
            {errors.subject && (
              <p className="text-red-500 mt-1 text-sm">{errors.subject}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium flex items-center">
              <MessageIcon className="mr-2 text-yellow-400" fontSize="small" />
              Message*
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className={`w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 ${
                errors.message
                  ? "border-red-500 focus:ring-red-500"
                  : "focus:ring-yellow-400"
              }`}
              placeholder="Your message here..."
            ></textarea>
            {errors.message && (
              <p className="text-red-500 mt-1 text-sm">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-colors ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? (
                <span className="inline-flex items-center">Sending...</span>
              ) : (
                <span className="inline-flex items-center">
                  <SendIcon className="mr-2" fontSize="small" />
                  Submit
                </span>
              )}
            </button>
          </div>

          {/* Success/Error Message */}
          {submitMessage.text && (
            <div
              className={`mt-4 p-3 rounded-lg ${
                submitMessage.isError
                  ? "bg-red-900 text-red-200"
                  : "bg-green-900 text-green-200"
              }`}
            >
              {submitMessage.text}
            </div>
          )}
        </form>
      </section>

      {/* Contact Information Section */}
      <section className="w-full max-w-3xl mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-[#444] p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <EmailIcon className="mr-2 text-yellow-400" />
            Email Us
          </h3>
          <p className="text-gray-300">support@mochinutspringhill.com</p>
        </div>

        <div className="bg-[#444] p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <PhoneIcon className="mr-2 text-yellow-400" />
            Call Us
          </h3>
          <p className="text-gray-300">(615)-424-3176</p>
          <p className="text-gray-300 text-sm mt-2">Mon-Sat: 11am - 9pm</p>
          <p className="text-gray-300 text-sm">Sunday: 12pm - 7pm</p>
        </div>
      </section>
    </div>
  );
}

import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import axios from "axios";

const Contact = () => {

  // ✅ State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/send-message", formData);
      alert("Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      alert("Failed to send message");
    }
  };

  return (
    <section className="w-full min-h-screen bg-gray-50 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[#0145F2] uppercase tracking-[3px] text-sm">
            Get In Touch
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have questions or need customized steel solutions? Reach out to us
            and our team will get back to you shortly.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Left - Contact Info */}
          <div className="bg-white rounded-xl shadow-md p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Contact Information
            </h2>

            <div className="space-y-4 text-gray-600">
              
              <div className="flex flex-col items-left gap-3">
                <span className="font-bold text-black">Head Office & Works</span>
                
                <span>
                  D-80 Road - 7, Vishwakarma Industrial Area, Jaipur, Rajasthan
                  - 302013
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-[#0145F2]" />
                <div>
                  <div>Sales: +91 99290 63443</div>
                  <div>Commercial [General]: +91 83020 69970</div>
                  <div>Ph: +91 141 233 2269</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-[#0145F2]" />
                <span>info@rmscoindia.com</span>
              </div>
            </div>

            {/* Map */}
            <div className="mt-6 rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d888.8763387535046!2d75.77683491956809!3d26.982559348537844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e2!4m3!3m2!1d26.9826056!2d75.7774768!4m3!3m2!1d26.982608199999998!2d75.7774791!5e0!3m2!1sen!2sin!4v1775476096197!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Send a Message
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-[#0145F2]"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-[#0145F2]"
              />

              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-[#0145F2]"
              />

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-[#0145F2]"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#0145F2] text-white py-3 rounded-md font-semibold hover:bg-[#0135C2] transition duration-300"
              >
                Send Message →
              </button>

              <div>
                <h1 className="font-bold pt-4">Career</h1>
                <h2>
                  We regularly hire candidates for Job.
                  <br /> Contact Us / Share your CV on: <br />
                  <h3 className="text-blue-500">
                    job@rmscoindia.com <br />
                    +91 8290233909
                  </h3>
                </h2>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
const About = () => {
  return (
    <section id="about" className="w-full py-20 bg-white">
      
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <div className="relative group overflow-hidden rounded-xl">
          <img
            src="./images/about/a5.png"
            alt="About RMSCO"
            className="w-full h-[400px] object-cover rounded-xl transform group-hover:scale-105 transition duration-500"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
        </div>

        {/* Right Content */}
        <div>
          
          {/* Tagline */}
          <p className="text-[#0145F2] uppercase tracking-[3px] text-sm mb-4">
            Welcome to RMSCO
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Delivering Strength, <br /> Reliability & Innovation
          </h2>

          {/* Description */}
          <p className="text-gray-600 mt-6 leading-relaxed">
            With over five decades of excellence, RMSCO has been a trusted name
            in manufacturing customized Steel Products for Power,
            infrastructure, Solder & Heavy-Industrial. Our commitment to
            quality and innovation ensures long-lasting performance in every
            project we deliver.
          </p>

          {/* Button */}
          <button className="mt-6 bg-[#0145F2] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#0135C2] transition">
            Learn More →
          </button>

        </div>

      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-[#0145F2]">55+</h3>
          <p className="text-gray-600 mt-2">Years Experience</p>
        </div>

        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-[#0145F2]">500+</h3>
          <p className="text-gray-600 mt-2">Projects Completed</p>
        </div>

        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-[#0145F2]">12K+</h3>
          <p className="text-gray-600 mt-2">Tonnes Supplied</p>
        </div>

        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-[#0145F2]">100%</h3>
          <p className="text-gray-600 mt-2">Quality Assurance</p>
        </div>

      </div>

    </section>
  );
};

export default About;
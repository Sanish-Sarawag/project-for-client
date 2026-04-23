const clients = [
  { name: "Client 1", logo: "/images/LOGOS/logo_0.png" },
  { name: "Client 2", logo: "/images/LOGOS/National_Thermal_Power_logo.svg.png" },
  { name: "Client 3", logo: "/images/LOGOS/indianoil.jpg" },
  { name: "Client 4", logo: "/images/LOGOS/eil.jpg" },
  { name: "Client 5", logo: "/images/LOGOS/airport png.webp" },
  { name: "Client 6", logo: "/images/LOGOS/hpcl.png" },
];

const ClientMarquee = () => {
  const doubled = [...clients, ...clients, ...clients];

  return (
    <section className="bg-[#f8f9fc] border-y border-gray-200 py-9 overflow-hidden">

      <p className="text-center text-[12px] font-semibold tracking-[3px] uppercase text-gray-500 mb-7">
        Trusted by India's leading industries
      </p>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-30 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #f8f9fc, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-30 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #f8f9fc, transparent)" }}
        />

        <div
          className="flex w-max"
          style={{ animation: "marqueeScroll 20s linear infinite" }}
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
        >
          {doubled.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-16 h-28 border-r border-gray-200 flex-shrink-0 group cursor-default"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-20 w-auto object-contain opacity-100 group-hover:opacity-100  transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
      <div className="items-center space-y-2 text-2xl justify-center text-center font-bold mt-10">
        <h1 className="text-5xl">RMSCO</h1> <br />
        <p>Reliability of Material & Satisfaction of Customer</p>
        <p className="text-blue-400">ISO - 9001, 14001, 45001 - Certified</p>
      </div>

    </section>
  );
};

export default ClientMarquee;


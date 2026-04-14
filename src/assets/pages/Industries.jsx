import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom"; // ✅ ADD THIS
import gsap from "gsap";

const data = [
   {
    category: "Power",
    products: [
      {
        name: "Rural/City Electrification",
        img: "/images/Industries/rural.png",
        desc: "This is one of the important agenda of Govt. of India. We manufacture high-quality Transmission Line Towers designed for efficient and reliable power transmission across long distances. Built using premium-grade steel and advanced fabrication techniques, our towers ensure durability, strength, and resistance to harsh environmental conditions. Our transmission towers are engineered to support high-voltage power lines, providing structural stability and optimal performance in diverse terrains such as plains, hills, and coastal regions. Each tower is fabricated with precision to meet industry standards and client specifications. We offer a wide range of tower types including lattice towers, suspension towers, tension towers, and angle towers, suitable for various transmission requirements. All components are hot-dip galvanized to ensure long-term corrosion resistance and minimal maintenance. With a focus on quality, safety, and reliability, our manufacturing process includes strict quality checks, accurate design calculations, and adherence to international standards. Our team ensures timely delivery and customization based on project needs.",
      },
      
      {
        name: "High Voltage / Transmission Line",
        img: "/images/Industries/Tower.png",
        desc: "High quality steel sheets.",
      },
    ],
  },
  {
    category: "Solar",
    products: [
    
      {
        name: "Solar Structures",
        img: "/images/Industries/solar.png",
        desc: `Rural Deployment of RMSCO Solar Pump Steel Structure. We specialize in manufacturing high-quality Solar Infrastructure Steel Fabrication solutions designed to support solar power systems with maximum efficiency and durability. Our structures are engineered to provide robust support for solar panels in various applications, including ground-mounted systems, rooftop installations, and large-scale solar farms.

Using premium-grade steel and advanced fabrication processes, we ensure that our solar mounting structures deliver excellent strength, stability, and long service life. All components are precisely fabricated and hot-dip galvanized to withstand corrosion, extreme weather conditions, and long-term environmental exposure.

Our solar infrastructure solutions are designed for easy installation, optimal panel alignment, and minimal maintenance, ensuring enhanced energy output and operational efficiency. We offer customized designs tailored to project-specific requirements, terrain conditions, and load specifications. `,
      },
      
    ],
  },
  
  {
    category: "Infrastructure",
    products: [
      {
        name: "RMSCO HAPO Chamber",
        img: "/images/Industries/Hypo.png",
        desc: "Strong and durable defence material.",
      },
      {
        name: "RMSCO Fence",
        img: "/images/Industries/Fence.png",
        desc: "Strong and durable Fence material.",
      },
    ],
  },
  {
    category: "Telecommunications",
    products: [
      {
        name: "RMSCO Telecom Tower",
        img: "/images/Industries/Tower.png",
        desc: "Producing various heights of Towers (Pipe/Lattice) Lattice/Pipe Mast Producing as BSNL specification also.",
      },
    ],
  },
  {
    category: "Waste Management",
    products: [
      {
        name: "RMSCO Waste Management Rickshaw",
        img: "/images/Industries/Ricksaw.png",
        desc: "Reliable waste management components.",
      },
      {
        name: "Cubic MTR Garbage Container",
        img: "/images/Industries/CubicMTR.png",
        desc: "Reliable cubic MTR garbage components.",
      },
      {
        name: "Cubic MTR Garbage Container",
        img: "/images/Industries/MTRGarbage.png",
        desc: "Reliable railway components.",
      },
      {
        name: "RMSCO Waste Management Bin",
        img: "/images/Industries/WasteManagement.png",
        desc: "Reliable RMSCO Waste Management Bin.",
      },
    ],
  },
 
];

const Industries = () => {
  const location = useLocation(); // ✅ ADD
  const [activeCategory, setActiveCategory] = useState(data[0]);
  const contentRef = useRef(null);

  // ✅ NAVBAR SYNC
  useEffect(() => {
    if (location.state?.industry) {
      const found = data.find(
        (d) => d.category === location.state.industry
      );
      if (found) {
        setActiveCategory(found);
      }
    }
  }, [location.state]);

  // animation
  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 0.5 }
    );
  }, [activeCategory]);

  return (
    <section className="relative bg-gradient-to-b from-[#f8f9fb] via-[#eef1f6] to-[#f8f9fb] py-28 px-4">

      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-5xl md:text-6xl font-bold mt-4 text-gray-900">
          Industries <span className="text-orange-500">We Serve</span>
        </h2>

        <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
          Have a good setup for your industrial needs
        </p>

        {/* LAYOUT */}
        <div className="flex mt-10 gap-6 text-left">

          {/* LEFT SIDEBAR */}
          <div className="w-[280px] bg-white rounded-xl shadow p-4 space-y-2">
            {data.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat)}
                className={`w-full text-left p-3 rounded-md transition ${
                  activeCategory.category === cat.category
                    ? "bg-orange-100 text-orange-600 font-semibold"
                    : "hover:bg-gray-100"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div
            ref={contentRef}
            className="flex-1 bg-white rounded-xl shadow p-8"
          >
            {activeCategory.products.map((product, i) => (
              <div key={i} className="mb-12 border-b pb-8 last:border-none">

                <h3 className="text-2xl font-semibold mb-4">
                  {product.name}
                </h3>

                <div className="w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                  <img
                    src={product.img}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-gray-600">
                  {product.desc}
                </p>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Industries;
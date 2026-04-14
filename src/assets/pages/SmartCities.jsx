import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { Link } from "react-router-dom";

const data = [
  {
    category: "Smart City",
    shortDesc: "Urban infrastructure",
    items: [
      {
        title: "Transform your Infrastructure",
        desc: ` Smart City – framework for tomorrow’s cities`,
        title2: "Build a Smart City Without Starting From Scratch",
        desc2: `
        

        <h3 class="text-xl font-medium mb-3">
          Transform your infrastructure
        </h3>

        <p class="mb-4">
          Municipalities today grapple with the need to integrate new technologies with existing infrastructure in order to ease financial pressures, develop strategic approaches to sustainability, increase economic development and protect the long-term wellbeing of their citizens.
        </p>

        <h3 class="text-xl font-medium mb-3">
          Build a smart city without starting from scratch
        </h3>

        <p class="mb-4">
          <strong>Infrastructure as a Platform</strong> addresses the essentials for smart cities that can provide agility for budgets, scalability for demand and flexibility for technology choices.
        </p>

      
        `,
        img: "/images/SmartCities/smart.png",
      },
    ],
  },
  {
    category: "Power Optimisation",
    shortDesc: "Smart grid & energy",
    items: [
      {
        title: "Smart City Power Optimisation",
        desc: `Smart City Power Optimisation`,
        title2: "  ",
        desc2: `
        

<p class="mb-4">
  Smart grids are capable of generating, transmitting and distributing power more efficiently, while also collecting valuable data points that can improve management of utilities. Reliable and efficient power is a critical foundation for cities to achieve sustainability despite increasing urban density.
</p>

<h3 class="text-xl font-medium">
  Sustainable Power Chain
</h3>
<p class="mb-4">
  Infrastructure as a Platform by RMSCO provides a practical, configurable and integrated approach to optimising power throughout your city.
</p>

<img src="/images/SmartCities/s3.png" className="my-6 rounded-xl" />
        
        `,
        img: "/images/SmartCities/s2.png",
        img2: "/images/SmartCities/s3.png",
      },
    ],
  },
  {
    category: "Smart Poles",
    shortDesc: "Multi-functional poles",
    items: [
      {
        title: "Smart Poles For Smart Cities",
        desc: `
        <h2 class="text-2xl font-semibold mb-3">
  Smart Poles for Smart Cities
</h2>

<p class="mb-2 font-medium">
  Smart Pole / Street Light Pole / CCTV Pole / Surveillance Pole
</p>

<p class="mb-2">
  Count the number of poles the next time you walk through the city. Most have only one function: lighting, signage, or security. With multi-functional poles, you can create smarter and greener cities by integrating multiple applications into a single pole.
</p>

<p class="mb-2">
  Our multi-functional poles are designed with modular components from the ground up. There is no limit to the features and functions that can be integrated into a single pole.
</p>

<p class="mb-2">
  We manufacture steel circular/tubular poles for various applications such as:
</p>

<ul class="list-disc pl-5 mb-2 space-y-1">
  <li>Street Light Poles</li>
  <li>Surveillance Poles</li>
  <li>Solar Street Lights</li>
  <li>Smart Poles</li>
</ul>

<p class="mb-2">
  We manufacture various types of smart poles as per user requirements.
</p>

<p class="mb-2">
  Our poles are primarily tubular and can be painted or hot dip galvanized to prevent rusting and enhance durability.
</p>

<p class="mb-2">
  We provide complete fabrication and design solutions, supported by full logistics services.
</p>

<p class="mb-2">
  We also offer arrangements for necessary attachments such as solar module mounting systems, battery boxes, CCTV mounts, lamps, WiFi units, junction boxes, etc.
</p>

<p class="mb-2">
  We supply suitable foundation bolts and hardware as well.
</p>

<p class="mb-2">
  With more than 7 years of experience, we have consistently delivered successful projects and are capable of designing and manufacturing as per customer requirements.
</p>

<p class="mb-1">
  Our experienced engineering team ensures strong design, quality control, and production supervision, guaranteeing strength, reliability, and timely delivery.
</p>

<p>
  Our engineers understand today’s infrastructure needs.
</p>
        
        `,
        img: "/images/SmartCities/p1.png",
      },
    ],
  },
  {
    category: "Waste Management",
    shortDesc: "City-scale solutions",
    items: [
      {
        title: "Solid Waste Management Solution",
        desc: `
        <p class="mb-2">
  RMSCO provides smart enterprise-grade waste management solutions for cities and businesses to cost-efficiently manage the waste lifecycle and improve the environment and well-being of people.
</p>
        `,
        img: "/images/SmartCities/p2.png",
      },
    ],
  },
  {
    category: "Smart Bin",
    shortDesc: "IoT-enabled bins",
    items: [
      {
        title: "Solar Panel Smart Bin",
        desc: `Smart Bins are an essential component...`,
        img: "/images/SmartCities/bin.png",
      },
    ],
  },
];

const SmartCities = () => {
  const location = useLocation();

  const [activeCat, setActiveCat] = useState(data[0]);
  const [activeItem, setActiveItem] = useState(data[0].items[0]);
  const contentRef = useRef(null);

  useEffect(() => {
    if (location.state?.category) {
      const found = data.find(
        (d) => d.category === location.state.category
      );
      if (found) {
        setActiveCat(found);
        setActiveItem(found.items[0]);
      }
    }
  }, [location.state]);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.5 }
    );
  }, [activeItem]);

  const selectCat = (cat) => {
    setActiveCat(cat);
    setActiveItem(cat.items[0]);
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-[#f0f2f7]">
      
      <div className="flex flex-1 pt-8 flex-col md:flex-row">
        
        {/* Sidebar */}
        <div className="md:w-[400px] w-full rounded-xl bg-white border-r border-gray-200 flex flex-col">
          <div className="flex md:flex-col gap-2 py-4 px-2 rounded-xl overflow-x-auto md:overflow-visible">
            {data.map((cat) => {
              const isActive = activeCat.category === cat.category;
              return (
                <button
                  key={cat.category}
                  onClick={() => selectCat(cat)}
                  className={`flex items-center md:flex-col md:items-start gap-2 p-3 rounded-lg transition ${
                    isActive ? "bg-blue-50" : "hover:bg-gray-100"
                  }`}
                >
                  <div>
                    <p className={`text-lg font-semibold ${
                      isActive ? "text-blue-600" : "text-gray-700"
                    }`}>
                      {cat.category}
                    </p>
                    <p className="text-xs text-gray-400 hidden md:block">
                      {cat.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-auto w-3/4 mx-4 mb-4">
            <div className="rounded-xl p-4 bg-[#0b1220]">
              <p className="text-xs font-bold text-white mb-1">
                Need a Custom Solution?
              </p>
              <p className="text-xs text-white/50 mb-3">
                Talk to our smart city experts.
              </p>
              <Link to="/contact">
                <button className="w-full text-white text-xs font-semibold py-2 rounded-md bg-[#0145F2]">
                  Contact Us →
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 md:p-8">
          <div ref={contentRef} className="max-w-3xl mx-auto">
            
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              {activeItem.title}
            </h2>

            <img src={activeItem.img} className="mb-6 rounded-xl" />

            {/* ✅ FIXED DESC */}
            <div
              className="text-gray-600 whitespace-pre-line"
              dangerouslySetInnerHTML={{
                __html: activeItem.desc,
              }}
            />

            {/* ✅ FIXED DESC2 */}
            {activeItem.title2 && (
              <>
                <h3 className="mt-6">{activeItem.title2}</h3>

                <div
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: activeItem.desc2,
                  }}
                />
              </>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default SmartCities;
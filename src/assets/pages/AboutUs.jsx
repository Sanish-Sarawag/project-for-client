import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function AboutUs() {
  const location = useLocation();

  // CSR Slider Images
const csrImages = [
  "/images/csr/csr1.png",
  "/images/csr/csr2.png",
  "/images/csr/csr3.png",
  "/images/csr/csr4.png",
];


const [selected, setSelected] = useState("Profile");
const [isOpen, setIsOpen] = useState(true);
const [subSelected, setSubSelected] = useState(0);

const [currentSlide, setCurrentSlide] = useState(0);

// Auto slide only for CSR
useEffect(() => {
  if (selected === "Corporate Social Responsibility") {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === csrImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }
}, [selected]);
  const aboutData = {
    Profile: [
      {
        title: "Leadership",
        img: "/images/about/a4.png",
        desc: `
          <h3 class="text-xl font-semibold mb-2 text-blue-500">
            Raj Kumar Tibrewala - A Legacy of Vision and Excellence
          </h3>

          <h2 class="text-lg font-medium mb-4">
            Early Life and Background
          </h2>
          <p class="mb-4">
            Raj Kumar Tibrewala was born in 1954 in Kolkata, into a respected and traditional Indian business family.
            His family was renowned for supplying general products to textile mills, establishing a foundation of business acumen and industry insight from an early age.
          </p>

          <h2 class="text-lg font-medium mb-4">
            Educational and Professional Foundation
          </h2>
          <p class="mb-4">
            Raj Kumar Tibrewala pursued his education at Bhawanipur College, where he graduated with a degree in Commerce. This academic background provided him with a solid understanding of business principles and financial management, laying the groundwork for his future endeavors.
          </p>

          <h2 class="text-lg font-medium mb-4">
            Career Development 
          </h2>
          <p class="mb-4">
            Drawing on his natural aptitude for building relationships and his keep understanding of market dynamics, Raj Kumar Tibrewala took charge of the Sales and Marketing department of the family business. His exceptional skills in networking and customer engagement enabled him to steer the company towards new opportunities and growth.
          </p>

          <h2 class="text-lg font-medium mb-4">
            Expansion and Innovation
          </h2>
          <p class="mb-4">
           Under his visionary leadership, the company expanded its reach significantly. Raj Kumar Tibrevala was instrumental in securing contracts to supply products to the Defence forces, a testament to his strategic foresight and industry knowledge. His innovative approach and commitment to excellence allowed the company to establish a strong presence across various regions of India.
          </p>

          <h2 class="text-lg font-medium mb-4">
            Public Relations and Industry Impact
          </h2>
          <p class="mb-4">
            Raj Kumar Tibrevala’s remarkable public relations skills played a crucial role in the company’s success. His ability to forge strong connections and navigate complex approval processes led to the successful approval of over 100 items for Defence forces. This achievement underscored his expertise in meeting rigorous standards and delivering quality products to critical sectors.
          </p>

          <h2 class="text-lg font-medium mb-4">
            Legacy and Contribution
          </h2>
          <p class="mb-4">
          With decades of experience and a proven track record of excellence, Raj Kumar Tibrevala’s contributions have been invaluable to the company. His deep industry knowledge, strategic vision, and dedication to customer satisfaction continue to drive the company’s growth and success. His legacy of leadership and innovation remains a cornerstone of the company’s operations and achievements.
          </p>

          <h2 class="text-lg font-medium mb-4">
            In Summary
          </h2>
          <p class="mb-4">
          Raj Kumar Tibrewala’s journey from a traditional business background to a leader in the industry is marked by his exceptional skills, strategic vision, and unwavering commitment. His ability to build relationships, expand the company’s market presence, and secure critical contracts has left an enduring impact on the business. His rich experience and insights continue to be a tremendous asset, guiding the company towards future success and growth.
          </p>
        `,
      },
     
    ],

    Infrastructure: {
      title: "Infrastructure",
      img: "/images/about/a1.png",
      desc: `
        <p class="mb-4">
At RMSCO, our manufacturing infrastructure is designed to ensure precision, efficiency, and excellence in every aspect of metal fabrication. Our state-of-the-art facility combines advanced technology with skilled craftsmanship to deliver high-quality metal products that meet the diverse needs of our clients. Here's a detailed look at our comprehensive manufacturing infrastructure:
</p>

<h2 class="text-xl font-medium mb-4">1. State-of-the-Art Machinery and Equipment</h2>

<h3 class="text-lg font-medium mb-4">Plasma Cutters:</h3>
<p class="mb-4">
Our plasma cutting equipment provides efficient and high-speed cutting of thick metals. This technology is ideal for handling large sheets and complex shapes with speed and accuracy.
</p>

<h3 class="text-lg font-medium mb-4">Press Brakes:</h3>
<p class="mb-4">
We use advanced press brakes for bending and shaping metal sheets into various angles and profiles. Our press brakes ensure precise bending and consistent results across different batch sizes.
</p>

<h3 class="text-lg font-medium mb-4">Welding Stations:</h3>
<p class="mb-4">
Our welding stations are equipped with the latest MIG (Metal Inert Gas), TIG (Tungsten Inert Gas), and arc welding machines. Our skilled welders adhere to stringent quality standards to produce strong, durable welds.
</p>

<h3 class="text-lg font-medium mb-4">Sheet Metal Forming Machines:</h3>
<p class="mb-4">
We employ a range of sheet metal forming machines, including roll formers and hydraulic presses, to shape and form metal sheets into custom profiles and parts.
</p>

<h2 class="text-xl font-medium mb-4">2. Quality Control Facilities</h2>

<h3 class="text-lg font-medium mb-4">Inspection Stations:</h3>
<p class="mb-4">
Dedicated quality control stations are set up throughout the manufacturing process. Our quality control team uses precision measurement tools such as calipers, micrometers, and laser scanners to verify dimensions and ensure adherence to specifications.
</p>

<h3 class="text-lg font-medium mb-4">Testing Equipment:</h3>
<p class="mb-4">
We perform various tests, including stress tests and non-destructive testing (NDT), to assess the structural integrity and reliability of our fabricated products.
</p>

<h3 class="text-lg font-medium mb-4">Material Testing Labs:</h3>
<p class="mb-4">
Our on-site labs conduct material testing to check for properties like hardness, tensile strength, and corrosion resistance. This ensures that the materials used meet the required standards and specifications.
</p>

<h2 class="text-xl font-medium mb-4">3. Advanced Design and Planning Software</h2>

<h3 class="text-lg font-medium mb-4">CAD/CAM Systems:</h3>
<p class="mb-4">
We use advanced Computer-Aided Design (CAD) and Computer-Aided Manufacturing (CAM) software to create detailed designs and production plans. These systems allow us to visualize complex projects, optimize manufacturing processes, and ensure precision.
</p>

<h3 class="text-lg font-medium mb-4">ERP Software:</h3>
<p class="mb-4">
Our Enterprise Resource Planning (ERP) system integrates various functions within the manufacturing process, including inventory management, production scheduling, and order tracking, ensuring smooth and efficient operations.
</p>

<h2 class="text-xl font-medium mb-4">4. Skilled Workforce</h2>

<h3 class="text-lg font-medium mb-4">Experienced Technicians:</h3>
<p class="mb-4">
Our team consists of highly skilled technicians and engineers with expertise in various aspects of metal fabrication. Their experience ensures that every project is executed with precision and professionalism.
</p>

<h3 class="text-lg font-medium mb-4">Ongoing Training:</h3>
<p class="mb-4">
We invest in continuous training and development for our workforce to keep them updated with the latest technologies, techniques, and industry best practices.
</p>

<h2 class="text-xl font-medium mb-4">5. Efficient Workflow and Layout</h2>

<h3 class="text-lg font-medium mb-4">Streamlined Production Line:</h3>
<p class="mb-4">
Our facility is designed with an efficient workflow in mind. The layout ensures smooth transitions between different stages of production, from raw material handling to final assembly and inspection.
</p>

<h3 class="text-lg font-medium mb-4">Material Handling Systems:</h3>
<p class="mb-4">
We use advanced material handling systems, including conveyors, hoists, and automated storage solutions, to manage the flow of materials and components throughout the manufacturing process.
</p>

<h2 class="text-xl font-medium mb-4">6. Sustainability Practices</h2>

<h3 class="text-lg font-medium mb-4">Waste Management:</h3>
<p class="mb-4">
We implement robust waste management practices to minimize scrap and recycle metal offcuts. Our goal is to reduce our environmental footprint and promote sustainability.
</p>

<h3 class="text-lg font-medium mb-4">Energy Efficiency:</h3>
<p class="mb-4">
Our manufacturing infrastructure incorporates energy-efficient technologies and practices to reduce energy consumption and support eco-friendly operations.
</p>
<h2 class="text-xl font-medium mb-4">7. Safety Measures</h2>

<h3 class="text-lg font-medium mb-4">Safety Equipment:</h3>
<p class="mb-4">
Our facility is equipped with advanced safety systems, including fire suppression systems, ventilation, and personal protective equipment (PPE) to ensure a safe working environment for our employees.
</p>

<h3 class="text-lg font-medium mb-4">Safety Protocols:</h3>
<p class="mb-4">
We adhere to stringent safety protocols and conduct regular safety training to prevent accidents and ensure compliance with health and safety regulations.
</p>

<h2 class="text-xl font-medium mb-4">Why Choose Us?</h2>

<p class="mb-4">
Our manufacturing infrastructure is designed to deliver superior metal fabrication solutions with precision, efficiency, and quality. At RMSCO, we leverage advanced technology, skilled craftsmanship, and rigorous quality control to meet and exceed your project requirements. Whether you need custom metal parts or large-scale production runs, our state-of-the-art facility is equipped to handle it all.
</p>

<p class="mb-4">
For more information about our manufacturing capabilities or to discuss your next project, contact us today. Let’s work together to bring your vision to life with excellence and precision!
</p>
      `,
    },

    "Quality Control": {
      title: "Quality Control",
      img: "/images/about/a2.png",
      desc: `
        <h2 class="text-xl font-medium mb-4">
Ensuring Excellence Through Rigorous Quality Control in Metal Fabrication
</h2>

<p class="mb-4">
At RMSCO, we understand that the foundation of any successful metal fabrication project is unwavering quality. Our commitment to excellence is deeply embedded in our quality control processes, which ensure that every piece of metal we fabricate meets the highest industry standards and exceeds our clients’ expectations. Here’s how we uphold superior quality in every stage of our metal fabrication services:
</p>

<h3 class="text-lg font-medium mb-4">1. Precision from Start to Finish</h3>
<p class="mb-4">
From initial design to final production, precision is our top priority. Our team uses state-of-the-art technology and equipment to ensure that every measurement, cut, and weld is executed with exacting accuracy. Our CNC machines, laser cutters, and high-tech welding tools are calibrated regularly to maintain precision and consistency.
</p>

<h3 class="text-lg font-medium mb-4">2. Rigorous Material Inspection</h3>
<p class="mb-4">
Quality control begins with selecting the right materials. We source our metals from reputable suppliers and perform thorough inspections to verify their composition and quality. This includes checking for any defects, ensuring compliance with industry standards, and confirming that the material properties meet the specifications of your project.
</p>

<h3 class="text-lg font-medium mb-4">3. Comprehensive In-Process Monitoring</h3>
<p class="mb-4">
Throughout the fabrication process, our skilled technicians continuously monitor and inspect the work to ensure it adheres to our stringent quality standards. We utilize advanced quality assurance tools to conduct real-time checks on dimensions, angles, and welds, addressing any issues immediately to prevent defects.
</p>

<h3 class="text-lg font-medium mb-4">4. Detailed Post-Fabrication Testing</h3>
<p class="mb-4">
Once fabrication is complete, each product undergoes a series of rigorous post-fabrication tests. This includes structural integrity tests, stress and load assessments, and visual inspections. Our quality control team meticulously examines each piece to ensure it meets both safety standards and client specifications.
</p>

<h3 class="text-lg font-medium mb-4">5. Strict Adherence to Standards and Regulations</h3>
<p class="mb-4">
We adhere to national and international standards, including ISO 9001, ASTM, and AWS, to guarantee that our fabrication processes are up to code. Our quality management system is designed to align with these standards, ensuring compliance and delivering products that are both reliable and durable.
</p>

<h3 class="text-lg font-medium mb-4">6. Continuous Improvement</h3>
<p class="mb-4">
Quality control is not just a set of procedures; it’s a continuous process. We regularly review and refine our quality control measures to adapt to new technologies and industry best practices. Feedback from our clients is invaluable, and we use it to enhance our processes and ensure continuous improvement.
</p>

<h3 class="text-lg font-medium mb-4">7. Transparent Reporting and Documentation</h3>
<p class="mb-4">
We believe in transparency and provide detailed documentation for every project, including quality control reports, inspection certificates, and test results. This documentation not only assures our clients of the quality of their products but also serves as a reference for future projects.
</p>

<h3 class="text-lg font-medium mb-4">8. Expert Team</h3>
<p class="mb-4">
Our quality control team comprises experienced professionals with extensive knowledge in metal fabrication. Their expertise ensures that each project is scrutinized with a keen eye for detail, and any potential issues are addressed promptly.
</p>

<h3 class="text-lg font-medium mb-4">9. Customer-Centric Approach</h3>
<p class="mb-4">
At RMSCO, we prioritize our clients’ satisfaction. We work closely with our clients to understand their specific requirements and quality expectations. Our commitment to delivering high-quality metal fabrication solutions is reflected in our personalized approach and dedication to meeting your unique needs.
</p>
<h3 class="text-lg font-medium mb-4">10. Final Inspection and Delivery</h3>
<p class="mb-4">
Before delivery, every product undergoes a final inspection to ensure it meets our rigorous quality standards and your specific requirements. We take great care in packaging and handling to ensure that the final product arrives in pristine condition.
</p>

<h2 class="text-xl font-medium mb-4">Why Choose Us?</h2>

<p class="mb-4">
Our unwavering commitment to quality control sets us apart in the metal fabrication industry. At RMSCO, we don’t just fabricate metal; we build trust and reliability through meticulous quality management. Partner with us for your next project and experience the difference that superior quality control makes.
</p>

<p class="mb-4">
For more information or to request a quote, contact us today. Let’s build something exceptional together!
</p>
      `,
    },

    Clients: {
      title: "Clients",
      img: "/images/about/a3.png",
      desc: `
        <p class="mb-4">
Supplied to all corners of this huge country right from Tamil Nadu to Jammu & Kashmir and Gujarat to Assam. Exported to Nepal, Bhutan. We have supplied to various companies in different sectors. To some we have supplied substation switchyard structures, to some we have supplied earthing material, to some cable trays.
</p>

<h3 class="text-lg font-medium mb-4">Power Grid Corporation of India (P.G.C.I.L.)</h3>
<h3 class="text-lg font-medium mb-4">O.N.G.C.</h3>
<h3 class="text-lg font-medium mb-4">Rajasthan Discom’s</h3>
<h3 class="text-lg font-medium mb-4">Gujarat Discom’s</h3>
<h3 class="text-lg font-medium mb-4">Haryana Discom’s</h3>
<h3 class="text-lg font-medium mb-4">Rajasthan Transco (RVPNL)</h3>
<h3 class="text-lg font-medium mb-4">Chattisgarh Transco (CSPTCL)</h3>
<h3 class="text-lg font-medium mb-4">Larsen & Toubro Ltd.</h3>
<h3 class="text-lg font-medium mb-4">Crompton Greaves Ltd.</h3>
<h3 class="text-lg font-medium mb-4">Schneider Electric India Ltd.</h3>
<h3 class="text-lg font-medium mb-4">Siemens Ltd.</h3>
<h3 class="text-lg font-medium mb-4">Alstom India (Earlier Areva)</h3>
<h3 class="text-lg font-medium mb-4">Indian Army Quality Assurance Dept.-D.G.Q.A.</h3>
<h3 class="text-lg font-medium mb-4">Indian Air Force</h3>
<h3 class="text-lg font-medium mb-4">Indian Navy</h3>
<h3 class="text-lg font-medium mb-4">Defence Research & Dev. Estt. (DRDO)</h3>
<h3 class="text-lg font-medium mb-4">Border Security Force</h3>
<h3 class="text-lg font-medium mb-4">Central Reserve Police Force</h3>
<h3 class="text-lg font-medium mb-4">Ordnance Factories</h3>
<h3 class="text-lg font-medium mb-4">N.S.I.C.</h3>
<h3 class="text-lg font-medium mb-4">D.G.S.&D.</h3>
<h3 class="text-lg font-medium mb-4">ISO Certification 9001</h3>
<h3 class="text-lg font-medium mb-4">North Western Railway Jaipur</h3>
<h3 class="text-lg font-medium mb-4">Hindustan Aeronautics Ltd. Aircraft Division, NASIK.</h3>
<h3 class="text-lg font-medium mb-4">Other State Electricity Companies like etc. (are in Process)</h3>
      `,
    },

    "Corporate Social Responsibility": {
      title: "Corporate Social Responsibility",
      title2: "Anchi Devi Satyanarain Tibrewala Charitable Trust",
    
      desc: `
        <p class="mb-4">
  At RMSCO, our commitment to Corporate Social Responsibility (CSR) is reflected in our active efforts to foster a greener and more sustainable community. Through the Anchi Devi Satyanarain Tibrewala Charitable Trust, we are dedicated to making a positive impact on our environment and supporting local initiatives.
</p>

<h3 class="text-lg font-medium mb-2">Park Adoption Initiative</h3>
<p class="mb-4">
  In August 2019, our founders, Shri B.K. Tibrewala and Shri R.K. Tibrewala, with the invaluable support of their brothers Shri Radhakishan Tibrewala and Shri Ratan Tibrewala, officially adopted a public park within the Vishwakarma Industrial Area in Jaipur. This park, covering approximately 10,000 square meters, was adopted from the Rajasthan State Industrial Development & Investment Corporation (RIICO).
</p>

<h3 class="text-lg font-medium mb-2">Environmental Impact</h3>
<p class="mb-4">
  Our commitment to environmental stewardship is evident in our actions. To date, we have planted over 2,000 trees in the adopted park, enhancing the green landscape and contributing to the local ecosystem. This effort is part of a broader vision led by Shri R.K. Tibrewala, who has a deep passion for tree planting and environmental conservation.
</p>

<h3 class="text-lg font-medium mb-2">Expanding Our Reach</h3>
<p class="mb-4">
  Shri R.K. Tibrewala’s dedication extends beyond our park adoption project. With the support of like-minded individuals, he has successfully planted over 5,000 trees across various notable locations in Jaipur, including Smriti Van, VKI Area, Ganesh Park in Vidhyadhar Nagar, and the Rajasthan Police Training Academy in Pani Pech.
</p>

<h3 class="text-lg font-medium mb-2">Ongoing Commitment</h3>
<p class="mb-4">
  Our founders believe that planting trees is just the beginning. They are equally committed to the long-term care and maintenance of these trees, ensuring that each sapling grows into a thriving tree. This commitment includes regular watering and nurturing to support the sustained growth and health of the plants.
</p>

<p class="mb-4">
  He believes not only in planting Trees but maintaining / watering them for years to come. And make sure that each Plant turns into a Tree.
</p>

<p class="mb-4">
  At RMSCO, we take pride in our CSR initiatives and the positive difference they make in our community. Our dedication to environmental sustainability reflects our core values and our commitment to creating a greener, healthier future for all.
</p>

<p class="mb-4">
  For more information about our CSR activities or to learn how you can get involved, please contact us today.
</p>
      `,
    },

   
  };

  useEffect(() => {
    if (location.state?.section) {
      setSelected(location.state.section);
      setSubSelected(0);
    }
  }, [location.state]);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-stone-50 to-stone-100 pt-28">

      {/* SIDEBAR */}
      <div className="w-64 bg-white border-r shadow sticky top-20 h-[calc(100vh-80px)] overflow-y-auto">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-6">About Us</h2>

          <div className="space-y-1">

            <button
              onClick={() => {
                setSelected("Profile");
                setIsOpen(true);
              }}
              className={`w-full text-left px-4 py-2 rounded-lg ${
                selected === "Profile"
                  ? "bg-amber-600 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              Profile
            </button>

            {selected === "Profile" && isOpen && (
              <div>
                {aboutData.Profile.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setSubSelected(i)}
                    className={`w-full text-left pl-8 pr-4 py-2 text-sm ${
                      subSelected === i
                        ? "text-orange-600 font-semibold"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            )}

            {Object.keys(aboutData)
              .slice(1)
              .map((key) => (
                <button
                  key={key}
                  onClick={() => setSelected(key)}
                  className={`w-full text-left px-4 py-2 rounded-lg ${
                    selected === key
                      ? "bg-amber-600 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {key}
                </button>
              ))}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-10 max-w-6xl">

        {selected === "Profile" ? (
          <>
            <h1 className="text-4xl font-bold mb-6">
              {aboutData.Profile[subSelected].title}
            </h1>

            <div className="w-full h-[350px] mb-8 rounded-xl overflow-hidden">
              <img
                src={aboutData.Profile[subSelected].img}
                className="w-auto h-full object-contain"
              />
            </div>

            <div
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: aboutData.Profile[subSelected].desc,
              }}
            />
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold mb-6">
              {aboutData[selected].title}
            </h1>
            <h2 className="text-4xl font-bold mb-6">
              {aboutData[selected].title2}
            </h2>

           {/* ✅ NORMAL SECTIONS */}
{selected !== "News" && aboutData[selected]?.img && (
  <div className="w-full h-[350px] mb-8 rounded-xl overflow-hidden">
    <img
      src={aboutData[selected].img}
      className="w-auto h-full object-contain"
    />
  </div>
)}

{/* ✅ NEWS CUSTOM STRUCTURE */}
{selected === "News" && (
  <>
    <div className="w-full h-[350px] mb-8 rounded-xl overflow-hidden">
      <img src={aboutData.News.img} className="w-auto h-full object-contain" />
    </div>
    <p className="pb-4">ELECRAMA 2016</p>

    

    <div className="w-full h-[350px] mb-8 rounded-xl overflow-hidden">
      <img src={aboutData.News.img2} className="w-auto h-full object-contain" />
    </div>

    <p className="mb-8">
      RMSCO Solar Invest 2015
    </p>

    <div className="w-full h-[350px] mb-8 rounded-xl overflow-hidden">
      <img src={aboutData.News.img3} className="w-auto h-full object-contain" />
    </div>

    <p className="mb-8">
      RMSCO Solar Energy Net Metering 2015
    </p>
    <div className="w-full h-[350px] mb-8 rounded-xl overflow-hidden">
      <img src={aboutData.News.img4} className="w-auto h-full object-contain" />
    </div>

    <p className="mb-8">
      RMSCO @ ELECRAMA 2014 - Hall 6 Stall C37
    </p>
  </>
)}

{/* CSR IMAGE SLIDER */}
{selected === "Corporate Social Responsibility" && (
  <div className="mb-8 relative w-full h-[350px] overflow-hidden rounded-xl">
    <img
      src={csrImages[currentSlide]}
      className="w-full h-full object-cover transition-all duration-700"
    />

    {/* Prev */}
    <button
      onClick={() =>
        setCurrentSlide(
          currentSlide === 0
            ? csrImages.length - 1
            : currentSlide - 1
        )
      }
      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded"
    >
      ‹
    </button>

    {/* Next */}
    <button
      onClick={() =>
        setCurrentSlide(
          currentSlide === csrImages.length - 1
            ? 0
            : currentSlide + 1
        )
      }
      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded"
    >
      ›
    </button>
  </div>
)}

            {selected !== "News" && (
  <div
    className="text-gray-700 leading-relaxed"
    dangerouslySetInnerHTML={{
      __html: aboutData[selected].desc,
    }}
  />
)}
          </>
        )}

      </div>
    </div>
  );
}
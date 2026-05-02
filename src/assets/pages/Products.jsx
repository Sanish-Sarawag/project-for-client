import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { ChevronRight } from 'lucide-react';

export default function Products() {
  const location = useLocation();
  const [selectedProductId, setSelectedProductId] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const products = [
    {
      id: 0,
      name: 'Substain & Switchyard Structure',
      image: '/images/Industries/substain.png',
      description: `
<h3 class="text-xl font-bold mb-2">
  Specialized Substation Structures for the Power, Energy, and Electricity Sector
</h3>

<p class="mb-4">
  At RMSCO, we pride ourselves on being a leading provider of metal fabrication solutions specifically tailored for the power, energy, and electricity sectors. With over 15 years of industry experience, we excel in manufacturing high-quality substain structures that meet the rigorous demands of modern electrical infrastructure.
</p>

<h3 class="text-lg font-semibold mt-4">
  Our Expertise in Substain Structures
</h3>


<p class="mb-2">
  Our specialization in substain structures encompasses a diverse range of designs and applications.
</p>

<ul class="list-disc ml-6">
  <li>Lattice Structures: Engineered for robustness and stability, our lattice structures provide essential support and durability for high-voltage applications.</li>
  <li>Tubular Structures: Designed for strength and versatility, our tubular steel structures are ideal for various substation configurations, offering reliable performance and ease of installation.</li>
  <li>Wide-Flange Steel Support Designs: Our wide-flange steel support are engineered to handle substantial loads and provide stable support for critical substation equipment.</li>
</ul>
<h3 class="text-lg font-semibold mt-4">Advanced Fabrication Techniques</h3>
<p class="mb-2">
  We utilize sophisticated fabrication techniques, including complex full and partial penetration welding, to ensure the highest standards of quality and reliability. Our expertise in pre-qualified welding processes guarantees that our substain structures meet stringent industry specifications and perform consistently under demanding conditions.
</p>
<h3 class="text-xl font-semibold mb-2">
      Custom Solutions for Your Needs
    </h3>
     <p class="mb-4">
      Based on your specific requirements, we offer tailored design and manufacturing services for a range of substation components, including:
    </p>
      <ul class="list-disc ml-6 space-y-2">
      <li>
        <strong>Complete Substation Structures:</strong>
        Custom-designed to meet the unique needs of your project, ensuring optimal functionality and compliance with industry standards.
      </li>

      <li>
        <strong>Double Pole Structures for Transformers:</strong>
        Engineered to provide robust support for transformer installations, enhancing stability and safety.
      </li>

      <li>
        <strong>Four Pole Structures:</strong>
        Designed for applications requiring four-pole configurations, offering versatility and reliability.
      </li>

      <li>
        <strong>Lattice Towers:</strong>
        Fabricated for high-voltage transmission and distribution, our lattice towers are built to withstand environmental challenges and operational demands.
      </li>

      <li>
        <strong>33/11 kV Cross Arms:</strong>
        Precision-engineered to support electrical conductors and equipment, ensuring effective load distribution and stability.
      </li>

      <li>
        <strong>LT Cross Arms:</strong>
        Designed for low-tension applications, our LT cross arms provide reliable support for distribution systems.
      </li>
    </ul>
     <h3 class="text-xl font-semibold mb-2">
      Industry Reputation and Capability
    </h3>

    <p>
      With more than 15 years of experience in the distribution field, we have a proven track record of successfully delivering high-quality substation structures. Our reputation as a leading supplier of GI switchyard structures up to 220kV underscores our capability to meet complex requirements and exceed client expectations.
    </p>
    <h3 class="text-xl font-semibold mb-2">
      Why Choose Us?
    </h3>

    <ul class="list-disc ml-6 space-y-2">
      <li>
        <strong>Experience and Expertise:</strong>
        Our extensive experience and technical expertise enable us to deliver tailored solutions that meet your exact specifications.
      </li>

      <li>
        <strong>Quality Assurance:</strong>
        We adhere to rigorous quality control measures, ensuring that every product meets the highest standards of performance and reliability.
      </li>

      <li>
        <strong>Customer-Centric Approach:</strong>
        We work closely with our clients to understand their needs and provide customized solutions that align with project requirements.
      </li>
      

      <li>
        <strong>Innovative Solutions:</strong>
        Our commitment to innovation drives us to adopt advanced technologies and techniques, ensuring that our products remain at the forefront of the industry.
      </li>
    </ul>

`
    },
    {
      id: 1,
      name: 'Transmission Line (TL) Tower',
      image: '/images/Industries/rural.png',
      description: `<p>
      

We manufacture high-quality Transmission Line Towers designed for efficient and reliable power transmission across long distances. Built using premium-grade steel and advanced fabrication techniques, our towers ensure durability, strength, and resistance to harsh environmental conditions.

Our transmission towers are engineered to support high-voltage power lines, providing structural stability and optimal performance in diverse terrains such as plains, hills, and coastal regions. Each tower is fabricated with precision to meet industry standards and client specifications.

We offer a wide range of tower types including lattice towers, suspension towers, tension towers, and angle towers, suitable for various transmission requirements. All components are hot-dip galvanized to ensure long-term corrosion resistance and minimal maintenance.

With a focus on quality, safety, and reliability, our manufacturing process includes strict quality checks, accurate design calculations, and adherence to international standards. Our team ensures timely delivery and customization based on project needs.</p>`
    },
    {
      id: 2,
      name: 'Cable Trays',
      image: '/images/CableTrayImg/cb.png',
      description: `<p>Cable Tray Structure is used to support insulated electric cables which are used for power distribution and communication. Cable trays are used as an alternative to open wiring systems, and are commonly used for cable management in commercial and industrial constructions.</p>
      <h3 class="text-xl font-semibold mb-2">Ladder Type</h3>
      <p>It is a structure consisting of two Horizontal Side Members connected by individual Vertical Members Called Rung.</p>
      <h2>Ladder Type Cable Tray And Accessories</h2>
      <img class="w-auto h-[400px] rounded-xl" src="/images/CableTrayImg/tra.png" />
      <h3 class="text-lg font-medium mb-4">Specifications:</h3>

<p class="mb-2">
  <strong>Width:</strong> 150 mm to 1000 mm
</p>

<p class="mb-2">
  <strong>Height:</strong> 50 mm to 125 mm
</p>

<p class="mb-2">
  <strong>Thickness:</strong> 1.2 mm, 1.6 mm, 2.0 mm, 2.8 mm, 3 mm
</p>

<p class="mb-2">
  <strong>Length:</strong> 2 mtr., 2.5 mtr. or 3 mtr.
</p>

<p class="mb-2">
  <strong>Finish:</strong> Painted, Pre Galvanized, Hot Dip Galvanized or Powder Coated
</p>
  <h3 class="text-lg pt-3 font-bold mb-4">Perforated Type Cable Tray And Accessories</h3>
      <img class="w-auto h-[400px] rounded-xl" src="/images/CableTrayImg/im.jpeg" />
<h3 class="text-lg pt-3 font-medium mb-4">Specifications:</h3>

<p class="mb-2">
  <strong>Width:</strong> 50 mm to 1000 mm
</p>

<p class="mb-2">
  <strong>Height:</strong> 25 mm to 125 mm
</p>

<p class="mb-2">
  <strong>Thickness:</strong> 1.2 mm, 1.6 mm, 2.0 mm, 2.8 mm, 3 mm
</p>

<p class="mb-2">
  <strong>Length:</strong> 2 mtr., 2.5 mtr. or 3 mtr.
</p>

<p class="mb-2">
  <strong>Finish:</strong> Painted, Pre Galvanized, Hot Dip Galvanized or Powder Coated
</p>

      `
    },
    {
      id: 3,
      name: 'Steel Light Poles',
      image: '/images/SteekPoles/pole.png',
      description: `
      
      <h2 class="text-2xl font-semibold mb-4">
  Smart poles for smart cities
</h2>

<p class="mb-4 font-medium">
  Smart Pole / Street Light Pole / CCTV Pole / Surveillance Pole
</p>

<p class="mb-4">
  Count the number of poles the next time you walk through the city. Most have only one function: Lighting, Signage, Security. With multi-functional poles you can create smarter and greener cities by including several applications in a single pole.
</p>

<p class="mb-4">
  Our multi-functional poles have been designed from conception with modular multi-functional components. There is no limit to the potential features and functions that can be integrated into one pole.
</p>

<p class="mb-4">
  We manufacture Steel Circular / Tubular Poles for various application like:
</p>

<ul class="list-disc pl-5 mb-4">
  <li>Street Light Poles</li>
  <li>Surveillance Poles</li>
  <li>Solar Street Light</li>
  <li>Smart Poles</li>
</ul>

<p class="mb-4">
  We manufacture various type of smart poles as per user requirement.
</p>

<p class="mb-4">
  We mostly make tubular poles. They can be painted or hot dip galvanized to avoid rusting and increase their life.
</p>

<p class="mb-4">
  We provide poles with complete fabrication and designing facility supported with full logistics support.
</p>

<p class="mb-4">
  We also provide arrangements for necessary attachments like solar module mounting arrangement, battery box, CCTV mounting, lamp, WiFi, junction box, etc.
</p>

<p class="mb-4">
  We also supply suitable foundation bolts and hardware.
</p>

<p class="mb-4">
  We have more than 7 years of experience in this field and have successfully performed repeatedly through the years. We are capable of designing and manufacturing as per customer requirements.
</p>

<p class="mb-4">
  We have experienced engineering staff for designing, quality control and supervision of production. So we can assure you strength, quality, reliability and timely delivery in our structure. Because your project is important to us for future business.
</p>

<p>
  Our engineers understand today’s requirements.
</p>

      `
    },
    {
      id: 4,
      name: 'Earthing Material',
      image: '/images/EarthingLighting/m1.png',
      description: `
      <h3 class="text-xl font-semibold mb-2">Earthing Products</h3>
      <p>At RMSCO we offer a complete range of Earthing Materials used widely in Earthing systems and playing a vital role in all electrical systems. We supply Earthing Material as per client specifications duly supported by in House Test Certificates and NABL Labs Test Reports. Our product range includes Earthing Pipes Electrodes, Galvanized Strips, Earthing Plates, Earthing Wire and Manhole Covers etc.</p>
      <p>We specialize in On Time Delivery, Customized Specified Material duly inspected by respective Inspection Authority.</p>
      
      <ul>
        <li>• Galvanized Steel Flats MS Steel Rods</li>
        <li>• Pipe Electrode</li>
        <li>• Copper Rods</li>
        <li>• Copper Flats</li>
        <li>• Air Terminal Rods</li>
        <li>• ROD Electrode</li>
        <li>• Counterpoise Earthing</li>
      
      </ul>

      <h3 class="text-lg font-semibold mt-4">Pipe Electrode</h3>
      <ul>
        <li>• Perforated Galvanized Pipe (Class A/B/C) of Length of 3 mtr or customized with Clamp welded at one end and Diagonal cut or conical at the other end.</li>
        <li>• Generally of following Dia's depending upon the voltage:</li>
        <li>  25mm, 40mm, 50mm, 100mm</li>
        <li>• Cl pipe is also available of length 3 mtr.</li>
      
      </ul>
      <h3 class="text-lg font-semibold mt-4">ROD Electrode</h3>
      <ul>
       <li>Used in Earthing of Lightning Poles, Pipe Earth Electrode (in treated earth pit), Rod Earth Electrode.</li>
       <li>Standard Length 3 mtr or customized Galvanized for Treated earth pits:</li>
        <li>•  40mm, 20mm</li>
      
      </ul>
      <h3 class="text-lg font-semibold mt-4">Copper Bonded Rods</h3>
      <ul>
       <li>Our RMSCO Copper-bonded electrode is CPRI Tested made of molecular bonding of pure 99.9% electrolytic copper on low carbon steel core rod.</li>
       <li>It provides Superior Resistance against Oxidation and have a better product life in comparison with simple Galvanized Electrode.</li>
        <li>•  Superior Corrosion Resistance</li>
        <li>•  Excellent Electrical Capability</li>
        <li>•  Standard Sizes: 40mm, 32mm, 20mm</li>
        <li>•  Standard Length: 3 mtr, 6 mtr</li>
      
      </ul>
      <h3 class="text-lg font-semibold mt-4">Galvanized Steel Flats</h3>
      <ul>
       <li>•  Hot Dip Galvanized MS Flats. Used in all Earthing Solutions. The size depend upon the Voltage.</li>
       <li>•  For Conductor above ground & Earthing leads (for equipment, for columns & aux. structures), For Earthing of indoor LT panels, Control panels and out door marshalling boxes, MOM boxes, Junction boxes & Lightning Panels etc.</li>
        <li>•  With Galvanized Coating thickness of Minimum 86 microns(610gm/mtr2)</li>
        <li>•  Standard sizes are as follows:</li>
        <li>  75 x 12 mm, 75 x 10mm, 50 x 10mm, 50 x 8mm, 50 x 6mm, 25 x 3mm etc..</li>
        
      
      </ul>
      `
    },
    {
      id: 5,
      name: 'HAPO Bags',
      image: '/images/HAPO/Hypo.png',
      description: `
      
      

<p class="mb-4">
  In one of RMSCO’s other Division/Department, we manufacture rubber inflatable products like rubber inflatable water tanks, floats, etc.
</p>

<p class="mb-4">
  We are authorised (Technology Holder) by the Ministry of Defence (India) to manufacture these HAPO Bags.
</p>

<p class="mb-4">
  We have dedicated different areas/building & manpower to manufacture these.
</p>

<p class="mb-4">
  The one man HAPO chamber is also popularly called <strong>HAPO BAG</strong>.
</p>

<h3 class="text-xl font-medium mb-4">
  Introduction about HAPO
</h3>

<p class="mb-4">
  <strong>High Altitude Pulmonary Oedema (HAPO)</strong>, a common mountain sickness, is a hazard associated with rapid ascent to an altitude higher than 2700 m and is characterized by breathlessness, tachycardia, tachypnoea, mild fever and cough, besides blood stained sputum.
</p>

<p class="mb-4">
  The effective treatment of moving the patient to a low altitude is often not feasible and thus simulation of descent is achieved with the help of a recompression chamber.
</p>

<p class="mb-4">
  One man HAPO chamber has been designed as a portable first aid device that provides emergency treatment for varying degrees of <strong>Acute Mountain Sickness</strong> including HAPO.
</p>

<p class="mb-4">
  It works on a simple but effective principle of increasing the atmospheric pressure around the patient thereby simulating descent in altitude.
</p>

<p class="mb-4">
  The patient is kept inside the chamber that can be inflated to a maximum pressure of 130 mm Hg thereby simulating descent of about 2500 m (8000 feet) without involving any physical movement.
</p>

<p class="mb-4">
  It is made of double ply nylon fabric with neoprene coat that is durable and cold resistant. It has a 120 cm long air/waterproof zip running across the length of the chamber and three transparent windows, which are provided for observation of the patient.
</p>

<p class="mb-2">
  <strong>Length:</strong> 2220 mm
</p>

<p class="mb-4">
  <strong>Dia:</strong> 650 mm
</p>

<p class="mb-4">
  The HAPO Bag is available in two versions:
</p>

<ul class="list-disc pl-5">
  <li>Automatic Version</li>
  <li>Manual Version</li>
</ul>
      
      `
    },

    {
      id: 6,
      name: 'Steel Fabrications',
      image: '/images/Industries/solar.png',
      description: `<p>We are a leading manufacturer specializing in high-quality Steel Fabrication solutions for a wide range of industrial, infrastructure, and commercial applications. With advanced machinery and skilled craftsmanship, we deliver precision-engineered steel components that meet the highest standards of strength, durability, and performance.

Our steel fabrication capabilities include cutting, bending, welding, machining, and assembling structural and customized steel products. We work with premium-grade raw materials to ensure superior quality and long service life, even in demanding environments.

From structural frameworks and industrial components to customized fabrication projects, we provide end-to-end solutions tailored to client requirements. Every product undergoes strict quality control and is manufactured in compliance with industry standards to ensure reliability and safety.</p>`
    },

    { id: 7, name: 'Fencing', image: '/images/fence/f1.png', description: `
      
      <h2 class="text-2xl font-semibold mb-4">
  Fencing Solutions
</h2>

<p class="mb-4">
  We manufacture a complete range of fencing material like Fence Post, Picket, Stay Post, Watch Tower etc. Suitable to fix Chain Link Mesh, Concertina Coil, Barbed Wire, Plain Wire etc.
</p>

<p class="mb-4">
  Steel fencing has advantages over conventional civil brick/stone walls.
</p>

<p class="mb-4">
  Steel fencing is equally strong compared to brick walls. It is faster to install, more cost-effective, offers better resale value, and is portable. By adding steel sheets, it also restricts visibility to the other side of the fencing.
</p>

<p class="mb-4">
  This steel fencing is rust-proof and coated with Zinc (Galvanized), paint, or as per customer requirements.
</p>

<p class="mb-4">
  We follow all Indian Standards (IS) in manufacturing these. Conforming to: IS 2062, E 250 / E 350, IS 280, IS 2721, IS 2629, IS 4759, etc.
</p>

<p class="mb-2">
  <strong>Height:</strong> Customised as per requirement (6 ft / 8 ft / 10 ft etc.)
</p>

<p class="mb-2">
  <strong>Type of Post:</strong> I, L and Y Type
</p>

<p class="mb-2">
  <strong>Finish:</strong> Galvanized, Painted
</p>

<p class="mb-4">
  <strong>Applications:</strong> State/National Borders, Defense Lands, Large Farms, Solar Parks etc.
</p>

<h3 class="text-lg font-semibold mt-4">Various Types of Fencing</h3>
<ul>
  <li>• Delay Rated Fence</li>
  <li>• High Security 358 Fence</li>
  <li>• Wall Fence</li>
  <li>• Electric Fence/Solar Fence</li>
  <li>• Welded Mesh Fence</li>
  <li>• Sand Fence</li>
  <li>• Decorative Fence</li>
  <li>• Temporary Fence</li>
  <li>• Chain Link Fence</li>
  <li>• Rapid Deployment Fence</li>
</ul>

<!-- Optional Image Section -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
  <div>
    <img src="/images/fence/f3.png" alt="Chain Link Fencing" class="w-[380px] h-[380px] rounded-xl" />
    <p class="text-center mt-2 text-sm">Chain Link Fencing</p>
  </div>

  <div>
    <img src="/images/fence/f2.png" alt="Barbed Wire" class="w-[380px] h-[380px] rounded-xl" />
    <p class="text-center mt-2 text-sm">Barbed Wire</p>
  </div>
</div>
      
      
      ` },
    { id: 8, name: 'Railings (MS)', image: '/images/railings/r1.jpg', description: `
      
      <p class="mb-1">
  Handrails are commonly used to guard platforms, stairways, walkways and other areas where safety is the primary concern. Pinax offers a wide range of handrails which include Straight Handrails, Angular handrails or Circular handrails. Pinax Handrail Manufacturer in India as per client specification, and it is fabricated by using mild steel pipes, angles, flats and other structural profiles. Pinax provides a complete solution for handrail Manufacturer & Suppliers in India, which includes base plates, toe plates, bends and connectors. The handrails are supplied in the finish of self color, Hot Dip Galvanized and Painting.
</p>

<p class="mb-1">
  <strong>Our Handrail Standards are suitable for use in all types of industry and can be made to order:</strong> They are ideal for any internal or external area requiring a stable edge protection barrier or where protection is needed against stationary or moving machinery. Typical applications include:
</p>

<ul>
  <li>• Platforms</li>
  <li>• Mezzanines</li>
  <li>• Stairways</li>
  <li>• Gantries</li>
</ul>

<p class="leading-snug">
  <strong>Our Handrail Systems are supplied in the following Shank sizes:</strong>
</p>
      <ul>
      <li>• 25mm NB Shank (33.7mm o/dx3.2mm wall)</li>
      <li>• 32mm NB Shank (42.4mm o/dx3.2mm wall)</li>
      <li>• 40mm NB Shank (48.3mm o/dx3.2mm wall) and have various ball sizes to suit.</li>
      <li>• 25mm NB, 32mm NB and 40mm NB tubular handrail.</li>
      
</ul>
<p class="leading-snug">
  <strong>GI:</strong>
</p>
      <ul>
      <li>• We procure MS pipe from reputed manufacture and do in-house Hot Dip Galvanizing get GI Pipe ready as a finished products. GI Pipe is supplied in standard length of 5 to 6 metre or as per client requirement.</li>
      
      
</ul>
<p class="leading-snug">
  <strong>GI Chequred plate:</strong>
</p>
      <ul>
      <li>• We procure MS Chequred plate from reputed manufacture and do inhouse Hot Dip Galvanized and get GI Chequred plate ready as a finished products. Chequired plate is procured in standard length of 6000x1250 mm and the same is fabricated as per client specification.</li>
      
      
</ul>
<p class="leading-snug">
  <strong>Rolled Products (MS Flat, Round bar, Square bar, etc):</strong>
</p>
      <ul>
      <li>• We have our own Rolling mills and we manufactures MS Flat, Round bar, square bar etc. We used our in-house manufacture MS flat in manufacturing of Gratings. We are having manufacturing license of IS 2062,IS 1786 for manufacturing of rolling products.</li>
      
      
</ul>
      ` },
    { id: 9, name: 'Gratings', image: '/images/gratings/g1.png', description: `
      
      <p class="leading-snug">
  Gratings are assembled grids of parallel bearings bars with crossbars used to space and hold the bearing bar erect. The assembled grid is used to cover of floor any of various openings. Gratings provide a surface but allow air, light, heat, sound and water to pass through. It is strong and durable and maintenance free. Electro Forged Gratings are manufactured using Electro Forged machine with the flexibility and capacity of welding an extensive range of bearing bar of size from 25x3 mm upto 50x5 mm and crossbar size from 6 mm to 8 mm.
</p>
<h3 class="text-lg font-medium mb-2">
  Grating Specifications
</h3>

<div class="overflow-x-auto mb-3">
  <table class="w-full text-sm border border-gray-300">
    <thead class="bg-gray-100">
      <tr>
        <th class="text-left px-3 py-2 border">Order Code</th>
        <th class="text-left px-3 py-2 border">Elemental Section (mm)</th>
        <th class="text-left px-3 py-2 border">Length of Grating (mm)</th>
        <th class="text-left px-3 py-2 border">Width of Grating (mm)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="px-3 py-2 border">RMSGM01</td>
        <td class="px-3 py-2 border">Flat 25×5</td>
        <td class="px-3 py-2 border">2000</td>
        <td class="px-3 py-2 border">500</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-3 py-2 border">RMSGM02</td>
        <td class="px-3 py-2 border">Flat 40×5</td>
        <td class="px-3 py-2 border">2000</td>
        <td class="px-3 py-2 border">500</td>
      </tr>
      <tr>
        <td class="px-3 py-2 border">RMSGM03</td>
        <td class="px-3 py-2 border">Ø8</td>
        <td class="px-3 py-2 border">2000</td>
        <td class="px-3 py-2 border">500</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-3 py-2 border">RMSGM04</td>
        <td class="px-3 py-2 border">Ø10</td>
        <td class="px-3 py-2 border">2000</td>
        <td class="px-3 py-2 border">500</td>
      </tr>
    </tbody>
  </table>
</div>

<p class="mb-1 text-sm">
  IS-2062: Specification for Hot Rolled Medium & High Tensile Structural Steel
</p>

<p class="mb-1 text-sm">
  IS-1852: Specification for Rolling & Cutting Tolerances for Hot Rolled Steel Products
</p>

<p class="mb-1 text-sm">
  IS-808: Dimensions for Hot Rolled Steel Beam, Column, Channel & Angle Sections
</p>

<p class="text-sm leading-snug">
  IS-2629: Hot Dip Galvanizing of Iron & Steel
</p>
      ` },
    { id: 10, name: 'Fire Fighting Accessories', image: '/images/fire fighting/f1.png', description: `<p>We manufacture a comprehensive range of high-quality Fire Fighting Accessories designed to ensure safety, reliability, and rapid response in emergency situations. Our products are fabricated using premium-grade steel and advanced manufacturing processes, delivering exceptional strength, durability, and long service life.

Our fire fighting accessories are engineered to meet stringent safety standards and are suitable for use in industrial facilities, commercial buildings, power plants, and infrastructure projects. Each component is designed for optimal performance, easy installation, and compatibility with modern fire protection systems.

We specialize in the fabrication of essential fire safety components such as hose cabinets, hydrant boxes, pipe supports, brackets, valve enclosures, and customized steel fittings, all manufactured with precision and attention to detail.</p>` },
    { id: 11, name: 'Solid Waste Management', image: '/images/waste/Ricksaw.png', description: `
      
      <p class="mb-1 font-medium">
  RMSCO provides smart enterprise-grade waste management solutions for cities and businesses to cost-efficiently manage the waste lifecycle and improve the environment and well-being of people.
</p>
      ` },
    { id: 12, name: 'General Steel Fabrication', image: '/images/SteekPoles/Steel-Solar..jpg', description: `
      
      <h2 class="text-2xl font-semibold mb-2">
  Smart poles for smart cities
</h2>

<p class="mb-1 font-medium">
  Smart Pole / Street Light Pole / CCTV Pole / Surveillance Pole
</p>

<p class="mb-1">
  Count the number of poles the next time you walk through the city. Most have only one function: Lighting, Signage, Security. With multi-functional poles you can create smarter and greener cities by including several applications in a single pole.
</p>

<p class="mb-1">
  Our multi-functional poles have been designed from conception with modular multi-functional components. There is no limit to the potential features and functions that can be integrated into one pole.
</p>

<p class="mb-1">
  We manufacture Steel Circular / Tubular Poles for various application like
</p>

<ul class="list-disc pl-5 mb-1 space-y-1">
  <li>Street Light Poles</li>
  <li>Surveillance Poles</li>
  <li>Solar Street Light</li>
  <li>Smart Poles</li>
</ul>

<p class="mb-1">
  We manufacture various type of smart poles as per user requirement.
</p>

<p class="mb-1">
  We mostly make tubular poles. They can be painted or hot dip galvanized to avoid rusting and increase there life.
</p>

<p class="mb-1">
  We provide poles with complete fabrication and designing facility supported with full logistics support
</p>

<p class="mb-1">
  We also provides arrangement for necessary attachments like Solar module mounting arrangement, battery box, CCTV Mounting, Lamp, Wifi, Junction box etc.
</p>

<p class="mb-1">
  We also suitable necessary foundation bolts and hardware.
</p>

<p class="mb-1">
  We have more than 7 year experience in this field. And we have successfully performed repeatedly through the years. We are capable of designing and manufacturing as per customers requirement.
</p>

<p class="mb-1">
  We have experienced engineering staff for designing, quality control and supervision of production. So we can assure you strength, quality, reliability and timely delivery in our structure. Because your project is important to us for future business.
</p>

<p class="leading-snug">
  Our engineers understand today
</p>
      ` },
  ];

  useEffect(() => {
    if (location.state?.productId !== undefined) {
      setSelectedProductId(location.state.productId);
    }
    window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  }, [location.state]);

  const selectedProduct = products[selectedProductId];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-stone-50 to-stone-100 pt-28">

      {/* Sidebar */}
      <div className="w-64 bg-white border-r shadow overflow-y-auto sticky top-20 h-[calc(100vh-80px)]">
        <div className="p-4">

          <h2 className="text-xl font-bold mb-6">Our Products</h2>

          <div className="space-y-1">

            {products.slice(0, 6).map((product) => (
              <button
                key={product.id}
                onClick={() => setSelectedProductId(product.id)}
                className={`w-full text-left px-4 py-2 rounded-lg ${
                  selectedProductId === product.id
                    ? 'bg-amber-600 text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                {product.name}
              </button>
            ))}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full text-left px-4 py-2 font-semibold bg-gray-100 rounded-lg flex justify-between"
            >
              Steel Fabrications
              <span>{isOpen ? "−" : "+"}</span>
            </button>

            {isOpen &&
              products.slice(7).map((product) => (
                <button
                  key={product.id}
                  onClick={() => setSelectedProductId(product.id)}
                  className={`w-full text-left pl-8 pr-4 py-2 text-sm ${
                    selectedProductId === product.id
                      ? 'text-orange-600 font-semibold'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {product.name}
                </button>
              ))}

          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-10 max-w-6xl">

        <h1 className="text-4xl font-bold mb-6">
          {selectedProduct.name}
        </h1>

        <div className="w-full h-[350px] mb-8 rounded-xl overflow-hidden">
          <img
            src={selectedProduct.image}
            className="w-auto h-full object-contain rounded-xl "
          />
        </div>

        {/* 🔥 HTML RENDER FIX */}
        <div
          className="text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: selectedProduct.description }}
        />

      </div>

    </div>
  );
}
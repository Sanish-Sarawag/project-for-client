import { Link, useNavigate, useLocation } from "react-router-dom";

const smartCities = [
  "Smart City",
  "Power Optimisation",
  "Smart Poles",
  "Waste Management",
  "Smart Bin",
];

const products = [
  { id: 0, name: "Substation & Switchyard Structure" },
  { id: 1, name: "Transmission Line (TL) Tower" },
  { id: 2, name: "Cable Trays" },
  { id: 3, name: "Steel Light Poles" },
  { id: 4, name: "Earthing Material" },
  { id: 5, name: "HAPO Bags" },
  { id: 6, name: "Steel Fabrications" },
];

const industries = [
  "Power",
  "Solar",
  "Infrastructure",
  "Telecommunications",
  "Waste Management",
];

const about = [
  "Profile",
  "Infrastructure",
  "Quality Control",
  "Clients",
  "Corporate Social Responsibility",

];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // 🔥 IMPORTANT FIX (same page navigation)
  const handleNav = (path, state = null) => {
    if (location.pathname === path) {
      navigate(path, { state, replace: true });
    } else {
      navigate(path, { state });
    }
  };

  return (
    <div className="w-full fixed top-0 left-0 z-[9999] flex justify-center py-4">
      <nav className="w-[95%] max-w-7xl bg-white backdrop-blur-md rounded-2xl px-6 py-2 flex items-center justify-between shadow-md">

        {/* LOGO */}
        <img
          className="h-12 cursor-pointer"
          src="./images/RMSCO_steel.jpeg"
          alt="logo"
          onClick={() => navigate("/")}
        />

        {/* MENU */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium items-center">

          {/* HOME */}
          <li className="pb-3">
            <Link to="/" className="hover:text-black transition">
              Home
            </Link>
          </li>

          {/* ABOUT */}
          <li className="relative group pb-3">
            <span className="cursor-pointer hover:text-black transition">
              About Us ▾
            </span>

            <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-64 z-50">
              {about.map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() =>
                      handleNav("/about", { section: item })
                    }
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </li>

          {/* PRODUCTS */}
          <li className="relative group pb-3">
            <span className="cursor-pointer hover:text-black transition">
              Products ▾
            </span>

            <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-64 z-50 max-h-80 overflow-y-auto">
              {products.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() =>
                      handleNav("/products", {
                        productId: item.id,
                      })
                    }
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </li>

          {/* INDUSTRIES */}
          <li className="relative group pb-3">
            <span className="cursor-pointer hover:text-black transition">
              Industries ▾
            </span>

            <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-56 z-50">
              {industries.map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() =>
                      handleNav("/industries", {
                        industry: item,
                      })
                    }
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </li>

          {/* SMART CITIES */}
          <li className="relative group pb-3">
            <span className="cursor-pointer hover:text-black transition">
              Smart Cities ▾
            </span>

            <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-56 z-50">
              {smartCities.map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() =>
                      handleNav("/smartcities", {
                        category: item,
                      })
                    }
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </li>

        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <Link to="/contact">
            <button className="bg-black text-white px-6 py-3 rounded-md text-sm hover:bg-gray-900 transition">
              Contact Us
            </button>
          </Link>

          <img
            className="h-16 object-contain"
            src="./images/50year.png"
            alt="logo2"
          />
        </div>
      </nav>
    </div>
  );
}
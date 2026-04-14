import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const statsRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.to(bgRef.current, {
      scale: 1.08,
      duration: 14,
      ease: "power1.out",
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 }
      )
      .fromTo(titleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 },
        "-=0.4"
      )
      .fromTo(descRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.5"
      )
      .fromTo(btnRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(statsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3"
      );

    const counters = document.querySelectorAll(".stat-count");
    counters.forEach((el) => {
      const target = parseInt(el.dataset.target);
      gsap.fromTo(el,
        { innerText: 0 },
        {
          innerText: target,
          duration: 2,
          delay: 1.2,
          ease: "power2.out",
          snap: { innerText: 1 },
        }
      );
    });
  }, []);

  return (
    <section className="w-full h-screen relative pt-8 overflow-hidden z-0">

      {/* Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-[url('/images/about/a1.png')] bg-cover bg-center pointer-events-none"
        style={{ filter: "brightness(0.75) saturate(0.9)" }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(100deg, rgba(5,15,30,0.90) 0%, rgba(5,15,30,0.65) 45%, rgba(5,15,30,0.15) 100%)",
        }}
      />

      {/* Bottom Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(5,15,30,0.5), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full pl-14 md:pl-32 pr-6 max-w-5xl pt-20">

        <div
          ref={subtitleRef}
          className="inline-flex items-center gap-2 mb-6 w-fit"
          style={{
            padding: "5px 14px",
            border: "1px solid rgba(1,69,242,0.45)",
            background: "rgba(1,69,242,0.10)",
            borderRadius: "4px",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-blue-300 text-xs font-semibold tracking-[3px] uppercase">
            Industrial Excellence Since 1970
          </span>
        </div>

        <h1
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white uppercase leading-none max-w-3xl"
        >
          Steel For Your{" "}
          <span className="text-[#3a7bd5] text-8xl block">
            Power
          </span>
        </h1>

        <p
          ref={descRef}
          className="text-white text-base md:text-lg mt-7 max-w-xl leading-relaxed"
        >
          RMSCO delivers high-quality steel products for Power, Infrastructure,
          Solder, and heavy-industry — built on trust and precision.
        </p>

        <div ref={btnRef} className="flex flex-wrap gap-3 mt-8">
          <button className="px-7 py-3 rounded font-semibold text-sm text-white bg-[#0145F2] hover:bg-[#0338c8] transition">
            Explore More →
          </button>

          <Link to="/contact">
            <button className="px-7 py-3 rounded font-semibold text-sm text-white border border-white/50 hover:bg-white/10 transition">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="flex flex-wrap gap-8 mt-10 pt-7 border-t border-white/10"
        >
          {[ 
            { target: 55, unit: "+", label: "Years Active" },
            { target: 500, unit: "+", label: "Projects Delivered" },
            { target: 12, unit: "K+", label: "Tonnes Supplied" },
          ].map(({ target, unit, label }) => (
            <div key={label}>
              <span className="text-3xl font-bold text-white">
                <span className="stat-count" data-target={target}>{target}</span>
                <span className="text-blue-400 ml-1">{unit}</span>
              </span>
              <span className="block text-xs uppercase text-white/50 mt-1">
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
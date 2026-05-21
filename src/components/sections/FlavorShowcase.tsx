import { motion } from "motion/react";
import chocolateImage from "../../assets/images/chocolate_brewboba.png";
import matchaImage from "../../assets/images/matcha__brewboba.png";
import strawberryImage from "../../assets/images/strawberry__brewboba.png";
import taroImage from "../../assets/images/taro__brewboba.png";
import caramelImage from "../../assets/images/caramel_brewboba.png";
import bobaImage from "../../assets/images/Realistic boba.png";
import splashImage from "../../assets/images/splash_milk_no_bg.png";
import type { Flavor } from "../../types";

const flavors: Flavor[] = [
  {
    name: "Chocolate",
    description: "Rich cocoa flavor blended into creamy milk tea perfection.",
    image: chocolateImage,
    cardBg: "linear-gradient(148deg, #FAE9C8 0%, #DEBB88 100%)",
    innerGlow:
      "radial-gradient(ellipse at 50% 38%, rgba(180,83,9,0.17) 0%, transparent 65%)",
    splashTint:
      "radial-gradient(ellipse at 50% 75%, rgba(217,119,6,0.13) 0%, transparent 62%)",
    splashOpacity: 0.22,
    borderColor: "rgba(217,119,6,0.20)",
    cupShadow:
      "drop-shadow(0 22px 44px rgba(180,83,9,0.42)) drop-shadow(0 8px 18px rgba(0,0,0,0.13))",
    buttonBg: "linear-gradient(135deg, #D97706, #92400E)",
    buttonShadow: "rgba(180,83,9,0.45)",
    headingColor: "#78350F",
    bodyColor: "rgba(146,64,14,0.72)",
    dividerColor: "rgba(217,119,6,0.18)",
    miniPearlColor: "rgba(180,83,9,0.55)",
  },
  {
    name: "Matcha",
    description: "Earthy premium matcha balanced with silky sweetness.",
    image: matchaImage,
    cardBg: "linear-gradient(148deg, #CEEBD3 0%, #96C9A0 100%)",
    innerGlow:
      "radial-gradient(ellipse at 50% 38%, rgba(34,197,94,0.15) 0%, transparent 65%)",
    splashTint:
      "radial-gradient(ellipse at 50% 75%, rgba(74,222,128,0.13) 0%, transparent 62%)",
    splashOpacity: 0.2,
    borderColor: "rgba(74,222,128,0.20)",
    cupShadow:
      "drop-shadow(0 22px 44px rgba(22,163,74,0.40)) drop-shadow(0 8px 18px rgba(0,0,0,0.12))",
    buttonBg: "linear-gradient(135deg, #22C55E, #15803D)",
    buttonShadow: "rgba(22,163,74,0.45)",
    headingColor: "#14532D",
    bodyColor: "rgba(22,101,52,0.72)",
    dividerColor: "rgba(74,222,128,0.18)",
    miniPearlColor: "rgba(22,163,74,0.50)",
  },
  {
    name: "Strawberry",
    description: "Fresh fruity sweetness with a creamy smooth finish.",
    image: strawberryImage,
    cardBg: "linear-gradient(148deg, #FAC8DA 0%, #EE99BE 100%)",
    innerGlow:
      "radial-gradient(ellipse at 50% 38%, rgba(236,72,153,0.13) 0%, transparent 65%)",
    splashTint:
      "radial-gradient(ellipse at 50% 75%, rgba(249,168,212,0.16) 0%, transparent 62%)",
    splashOpacity: 0.18,
    borderColor: "rgba(249,168,212,0.22)",
    cupShadow:
      "drop-shadow(0 22px 44px rgba(190,24,93,0.38)) drop-shadow(0 8px 18px rgba(0,0,0,0.11))",
    buttonBg: "linear-gradient(135deg, #EC4899, #BE185D)",
    buttonShadow: "rgba(190,24,93,0.45)",
    headingColor: "#881337",
    bodyColor: "rgba(157,23,77,0.72)",
    dividerColor: "rgba(249,168,212,0.20)",
    miniPearlColor: "rgba(190,24,93,0.48)",
  },
  {
    name: "Taro",
    description: "Classic nutty taro flavor with a velvety texture.",
    image: taroImage,
    cardBg: "linear-gradient(148deg, #DAC2F5 0%, #B08AE0 100%)",
    innerGlow:
      "radial-gradient(ellipse at 50% 38%, rgba(139,92,246,0.14) 0%, transparent 65%)",
    splashTint:
      "radial-gradient(ellipse at 50% 75%, rgba(196,181,253,0.16) 0%, transparent 62%)",
    splashOpacity: 0.17,
    borderColor: "rgba(196,181,253,0.22)",
    cupShadow:
      "drop-shadow(0 22px 44px rgba(109,40,217,0.38)) drop-shadow(0 8px 18px rgba(0,0,0,0.11))",
    buttonBg: "linear-gradient(135deg, #A855F7, #6D28D9)",
    buttonShadow: "rgba(109,40,217,0.45)",
    headingColor: "#3B0764",
    bodyColor: "rgba(91,33,182,0.72)",
    dividerColor: "rgba(196,181,253,0.22)",
    miniPearlColor: "rgba(109,40,217,0.48)",
  },
  {
    name: "Caramel",
    description: "Sweet golden caramel with deep creamy notes.",
    image: caramelImage,
    cardBg: "linear-gradient(148deg, #FFE09A 0%, #EDAB48 100%)",
    innerGlow:
      "radial-gradient(ellipse at 50% 38%, rgba(234,179,8,0.18) 0%, transparent 65%)",
    splashTint:
      "radial-gradient(ellipse at 50% 75%, rgba(253,224,71,0.15) 0%, transparent 62%)",
    splashOpacity: 0.22,
    borderColor: "rgba(253,211,77,0.25)",
    cupShadow:
      "drop-shadow(0 22px 44px rgba(180,83,9,0.40)) drop-shadow(0 8px 18px rgba(0,0,0,0.12))",
    buttonBg: "linear-gradient(135deg, #EAB308, #B45309)",
    buttonShadow: "rgba(180,83,9,0.44)",
    headingColor: "#713F12",
    bodyColor: "rgba(133,77,14,0.72)",
    dividerColor: "rgba(253,211,77,0.22)",
    miniPearlColor: "rgba(180,83,9,0.50)",
  },
];

const SECTION_BOBA = [
  { left: "1.5%",  top: "9%",   w: 42, delay: 0.2, blur: 3, opacity: 0.32 },
  { left: "97%",   top: "13%",  w: 36, delay: 0.5, blur: 3, opacity: 0.30 },
  { left: "1%",    top: "52%",  w: 30, delay: 0.9, blur: 4, opacity: 0.26 },
  { left: "97.5%", top: "56%",  w: 38, delay: 0.3, blur: 3, opacity: 0.28 },
  { left: "50%",   top: "2.5%", w: 28, delay: 0.7, blur: 5, opacity: 0.22 },
];

const MINI_PEARL_OFFSETS = [
  { leftPct: 14, bottomPct: 76 },
  { leftPct: 30, bottomPct: 80 },
  { leftPct: 58, bottomPct: 74 },
  { leftPct: 76, bottomPct: 79 },
];

export function FlavorShowcase() {
  return (
    <section
      id="flavors"
      className="relative py-24 px-4 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #F5E4CC 0%, #FFF8F0 12%, #FFFBF5 50%, #FAEEE0 80%, #F5E4CC 100%)",
      }}
    >
      {/* Wave divider from hero */}
      <div className="absolute top-0 inset-x-0 pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 1440 100"
          className="w-full"
          preserveAspectRatio="none"
          style={{ display: "block" }}
        >
          <path
            d="M0,50 C200,100 400,0 600,50 C800,100 1000,5 1200,48 C1320,72 1380,28 1440,50 L1440,0 L0,0 Z"
            fill="rgba(245,228,204,0.55)"
          />
          <path
            d="M0,70 C180,20 360,90 600,60 C840,30 1080,80 1440,60 L1440,0 L0,0 Z"
            fill="rgba(250,238,224,0.35)"
          />
        </svg>
      </div>

      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(251,191,36,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Scattered boba background decorations */}
      {SECTION_BOBA.map((b, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none select-none"
          style={{
            left: b.left,
            top: b.top,
            width: b.w,
            height: b.w,
            opacity: b.opacity,
            filter: `blur(${b.blur}px)`,
            zIndex: 1,
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4.2 + i * 0.5,
            repeat: Infinity,
            delay: b.delay,
            ease: "easeInOut",
          }}
        >
          <img
            src={bobaImage}
            alt=""
            className="w-full h-full object-contain"
            draggable={false}
            loading="lazy"
          />
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Section heading */}
        <div className="text-center mb-16">
          <motion.p
            className="text-[11px] md:text-xs font-bold tracking-[0.38em] text-amber-700/60 uppercase mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Crafted to Perfection
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight"
            style={{
              background:
                "linear-gradient(135deg, #78350F 0%, #B45309 50%, #92400E 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
          >
            Our Signature Flavors
          </motion.h2>
          <motion.p
            className="text-lg text-amber-900/55"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.26 }}
          >
            Handcrafted with love, perfected with passion
          </motion.p>
        </div>

        {/* Flavor cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {flavors.map((flavor, index) => (
            <div
              key={flavor.name}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <FlavorCard flavor={flavor} index={index} />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function FlavorCard({ flavor, index }: { flavor: Flavor; index: number }) {
  return (
    <motion.div
      className="group relative h-full"
      initial={{ opacity: 0, y: 52 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.09,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -14, transition: { duration: 0.32, ease: "easeOut" } }}
    >
      {/* Outer glow on hover */}
      <div
        className="absolute -inset-1 rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: flavor.innerGlow,
          filter: "blur(16px)",
        }}
      />

      {/* Card */}
      <div
        className="relative rounded-[10px] overflow-hidden h-full flex flex-col"
        style={{
          background: flavor.cardBg,
          backdropFilter: "blur(22px)",
          border: `1.5px solid ${flavor.borderColor}`,
          boxShadow:
            "0 20px 60px rgba(0,0,0,0.07), 0 8px 24px rgba(0,0,0,0.05), 0 2px 8px rgba(0,0,0,0.04)",
        }}
      >
        {/* Inner flavor glow */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-80 group-hover:opacity-100"
          style={{ background: flavor.innerGlow }}
        />

        {/* Product image zone */}
        <div
          className="relative flex items-end justify-center overflow-hidden"
          style={{ minHeight: 360, paddingTop: 32, paddingBottom: 8 }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: flavor.splashTint }}
          />

          {/* Milk splash overlay */}
          <div
            className="absolute bottom-0 inset-x-0 pointer-events-none"
            style={{ opacity: 1 }}
          >
            <img
              src={splashImage}
              alt=""
              className="w-full object-contain"
              style={{
                filter: "blur(1.5px)",
                transform: "scale(1.12) translateY(4px)",
                transformOrigin: "bottom center",
              }}
              draggable={false}
              loading="lazy"
            />
          </div>

          {/* Cup product image */}
          <motion.img
            src={flavor.image}
            alt={`${flavor.name} BrewBoba`}
            className="relative w-[300px] sm:w-[320px] object-contain"
            style={{
              zIndex: 2,
              filter: flavor.cupShadow,
            }}
            whileHover={{ scale: 1.07, y: -8 }}
            transition={{ duration: 0.38, ease: "easeOut" }}
            draggable={false}
            loading="lazy"
          />

          {/* Floating mini boba pearls */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {MINI_PEARL_OFFSETS.map((pos, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: 6 + i * 1.5,
                  height: 6 + i * 1.5,
                  left: `${pos.leftPct}%`,
                  bottom: `${pos.bottomPct - index * 0.5}%`,
                  background: flavor.miniPearlColor,
                  filter: "blur(0.5px)",
                  zIndex: 3,
                }}
                animate={{
                  y: [0, -(5 + i * 2), 0],
                  opacity: [0.35, 0.65, 0.35],
                }}
                transition={{
                  duration: 2.6 + i * 0.38,
                  repeat: Infinity,
                  delay: i * 0.28 + index * 0.12,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>

        {/* Card content */}
        <div
          className="relative z-10 px-6 pb-7 pt-5 text-center flex flex-col flex-1"
          style={{ background: "rgba(255,255,200,.05)" }}
        >
          <h3
            className="text-2xl font-bold mb-2 tracking-tight"
            style={{ color: flavor.headingColor }}
          >
            {flavor.name}
          </h3>
          <p
            className="text-sm leading-relaxed mb-6 flex-1"
            style={{ color: flavor.bodyColor }}
          >
            {flavor.description}
          </p>

          <motion.button
            className="w-full py-3.5 px-6 rounded-[10px] font-semibold text-white text-sm tracking-wide"
            style={{
              background: flavor.buttonBg,
              boxShadow: `0 6px 24px ${flavor.buttonShadow}`,
            }}
            whileHover={{
              scale: 1.04,
              boxShadow: `0 10px 32px ${flavor.buttonShadow}`,
            }}
            whileTap={{ scale: 0.97 }}
          >
            Order Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

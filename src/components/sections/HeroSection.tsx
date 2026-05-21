import { motion } from "motion/react";
import heroImage from "../../assets/images/3_brew_boba_landing_page.png";
import splashImage from "../../assets/images/splash_milk_no_bg.png";
import bobaImage from "../../assets/images/Realistic boba.png";

const BOBA_DECO = [
  { left: "5%",  top: "16%", w: 68,  delay: 0.0, blur: 0, opacity: 0.90, animY: 14 },
  { left: "11%", top: "58%", w: 44,  delay: 0.4, blur: 3, opacity: 0.55, animY: 10 },
  { left: "3%",  top: "80%", w: 52,  delay: 0.8, blur: 1, opacity: 0.75, animY: 12 },
  { left: "82%", top: "10%", w: 58,  delay: 0.2, blur: 0, opacity: 0.85, animY: 16 },
  { left: "91%", top: "48%", w: 48,  delay: 0.6, blur: 2, opacity: 0.65, animY: 11 },
  { left: "86%", top: "75%", w: 36,  delay: 1.0, blur: 2, opacity: 0.60, animY: 9  },
  { left: "28%", top: "87%", w: 50,  delay: 0.5, blur: 3, opacity: 0.65, animY: 10 },
  { left: "68%", top: "86%", w: 42,  delay: 0.9, blur: 2, opacity: 0.70, animY: 12 },
  { left: "48%", top: "6%",  w: 30,  delay: 1.2, blur: 4, opacity: 0.45, animY: 8  },
  { left: "20%", top: "32%", w: 26,  delay: 0.3, blur: 5, opacity: 0.35, animY: 7  },
  { left: "76%", top: "28%", w: 32,  delay: 0.7, blur: 4, opacity: 0.50, animY: 9  },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(150deg, #FFFBF5 0%, #FFF6EC 30%, #FAEEE0 65%, #F5E4CC 100%)",
      }}
    >
      {/* Ambient glow layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[620px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(251,191,36,0.22) 0%, rgba(251,146,60,0.10) 52%, transparent 72%)",
          }}
        />
        <div
          className="absolute top-[26%] left-[20%] w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(251,146,60,0.14) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-[26%] right-[20%] w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(244,114,182,0.09) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 inset-x-0 h-72"
          style={{
            background:
              "linear-gradient(to top, rgba(245,228,204,0.65), transparent)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 50%, rgba(120,53,15,0.06) 100%)",
          }}
        />
      </div>

      {/* Floating boba decorations */}
      {BOBA_DECO.map((b, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none select-none"
          style={{
            left: b.left,
            top: b.top,
            width: b.w,
            height: b.w,
            zIndex: b.blur > 2 ? 2 : 6,
            filter: b.blur > 0 ? `blur(${b.blur}px)` : undefined,
            opacity: b.opacity,
          }}
          animate={{
            y: [0, -b.animY, 0],
            rotate: [0, i % 2 === 0 ? 7 : -7, 0],
          }}
          transition={{
            duration: 3.0 + (i % 4) * 0.55,
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
          />
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center min-h-screen px-4">
        {/* Typography */}
        <motion.div
          className="text-center pt-20 pb-4 max-w-5xl mx-auto w-full"
          initial={{ opacity: 0, y: -28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        >
          <motion.p
            className="text-[11px] md:text-xs font-bold tracking-[0.38em] text-amber-700/65 uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Premium Handcrafted Milk Tea
          </motion.p>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[6rem] font-bold leading-[1.04] tracking-tight mb-5"
            style={{
              background:
                "linear-gradient(135deg, #78350F 0%, #B45309 30%, #C2410C 60%, #BE123C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Sip Happiness
            <br />
            with BrewBoba
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-amber-900/62 max-w-xl mx-auto leading-relaxed">
            Premium handcrafted milk tea flavors made to brighten every moment.
          </p>
        </motion.div>

        {/* Visual centerpiece */}
        <div className="relative flex items-center justify-center w-full flex-1">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: 640,
              height: 520,
              background:
                "radial-gradient(ellipse at 50% 58%, rgba(251,191,36,0.28) 0%, rgba(251,146,60,0.13) 48%, transparent 70%)",
              zIndex: 0,
            }}
          />

          <motion.div
            className="absolute pointer-events-none"
            style={{
              bottom: "2%",
              left: "70%",
              transform: "translateX(-50%)",
              zIndex: 1,
              willChange: "opacity",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }}
          >
            <img
              src={splashImage}
              alt=""
              className="w-[800px] sm:w-[1000px] md:w-[1280px] lg:w-[1560px] xl:w-[1800px] object-contain"
              style={{ filter: "brightness(1.08)" }}
              draggable={false}
            />
          </motion.div>

          <motion.img
            src={heroImage}
            alt="BrewBoba Premium Milk Tea Collection"
            className="relative w-[360px] sm:w-[480px] md:w-[620px] lg:w-[780px] xl:w-[900px] object-contain"
            style={{
              zIndex: 5,
              filter: "drop-shadow(0 32px 64px rgba(120,53,15,0.26))",
              willChange: "transform, opacity",
            }}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.95,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            draggable={false}
          />
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 pb-14 pt-5 relative z-20"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
        >
          <motion.a
            href="#flavors"
            className="relative px-11 py-4 rounded-full font-semibold text-[1.05rem] text-white overflow-hidden tracking-wide text-center"
            style={{
              background:
                "linear-gradient(135deg, #D97706 0%, #EA580C 55%, #B45309 100%)",
              boxShadow:
                "0 8px 32px rgba(217,119,6,0.48), 0 3px 10px rgba(0,0,0,0.14), inset 0 1px 0 rgba(255,255,255,0.22)",
            }}
            whileHover={{
              scale: 1.06,
              boxShadow:
                "0 14px 42px rgba(217,119,6,0.58), 0 5px 16px rgba(0,0,0,0.18)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            <span
              className="absolute inset-x-0 top-0 h-1/2 rounded-t-full pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.20), transparent)",
              }}
            />
            <span className="relative">Explore Flavors</span>
          </motion.a>

          <motion.a
            href="#order"
            className="relative px-11 py-4 rounded-full font-semibold text-[1.05rem] overflow-hidden tracking-wide text-center"
            style={{
              background: "rgba(255,255,255,0.60)",
              backdropFilter: "blur(18px)",
              border: "1.5px solid rgba(217,119,6,0.22)",
              color: "#92400E",
              boxShadow:
                "0 8px 26px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.88)",
            }}
            whileHover={{
              scale: 1.06,
              boxShadow:
                "0 12px 34px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.92)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            <span
              className="absolute inset-x-0 top-0 h-1/2 rounded-t-full pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.38), transparent)",
              }}
            />
            <span className="relative">Order Now</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom fade-out */}
      <div
        className="absolute bottom-0 inset-x-0 h-28 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(245,228,204,0.58) 100%)",
        }}
      />
    </section>
  );
}

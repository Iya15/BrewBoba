import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home",    href: "#home" },
  { label: "Flavors", href: "#flavors" },
  { label: "About",   href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: isScrolled
          ? "rgba(255,251,245,0.88)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(18px)" : "none",
        borderBottom: isScrolled
          ? "1px solid rgba(217,119,6,0.12)"
          : "none",
        boxShadow: isScrolled
          ? "0 4px 24px rgba(120,53,15,0.07)"
          : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            className="font-extrabold text-2xl tracking-tight"
            style={{
              background: "linear-gradient(135deg, #D97706, #B45309)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            BrewBoba
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "rgba(120,53,15,0.72)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#92400E")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(120,53,15,0.72)")
                }
              >
                {link.label}
              </a>
            ))}
            <motion.a
              href="#order"
              className="px-5 py-2 rounded-full text-sm font-semibold text-white"
              style={{
                background: "linear-gradient(135deg, #D97706, #B45309)",
                boxShadow: "0 4px 14px rgba(217,119,6,0.40)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Order Now
            </motion.a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: "#78350F" }}
            onClick={() => setIsMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{
              background:
                "linear-gradient(150deg, #FFFBF5 0%, #FFF6EC 30%, #FAEEE0 65%, #F5E4CC 100%)",
              borderTop: "1px solid rgba(217,119,6,0.12)",
            }}
          >
            <nav className="flex flex-col items-center px-4 py-6 gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="w-full text-center px-3 py-3 rounded-lg text-sm font-medium transition-colors"
                  style={{ color: "#78350F" }}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#order"
                className="mt-3 w-full px-5 py-3 rounded-full text-sm font-semibold text-white text-center"
                style={{
                  background: "linear-gradient(135deg, #D97706, #B45309)",
                }}
                onClick={() => setIsMobileOpen(false)}
              >
                Order Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

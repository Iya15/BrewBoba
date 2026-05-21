import { Instagram, Facebook, Twitter } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home",    href: "#home" },
  { label: "Flavors", href: "#flavors" },
  { label: "About",   href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook,  href: "#", label: "Facebook" },
  { icon: Twitter,   href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #F5E4CC 0%, #EDD9B4 100%)",
        borderTop: "1px solid rgba(217,119,6,0.15)",
      }}
    >
      {/* Decorative top wave */}
      <div className="absolute top-0 inset-x-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          className="w-full"
          preserveAspectRatio="none"
          style={{ display: "block" }}
        >
          <path
            d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,15 1440,30 L1440,0 L0,0 Z"
            fill="rgba(245,228,204,0.5)"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <span
                className="text-2xl font-extrabold tracking-tight"
                style={{
                  background: "linear-gradient(135deg, #D97706, #B45309)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                BrewBoba
              </span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "rgba(120,53,15,0.70)" }}
            >
              Premium handcrafted milk tea made with quality ingredients,
              brewed fresh every day to brighten your moments.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.55)",
                    border: "1px solid rgba(217,119,6,0.18)",
                    color: "#B45309",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(255,255,255,0.90)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(255,255,255,0.55)";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-xs font-bold tracking-[0.3em] uppercase mb-4"
              style={{ color: "rgba(120,53,15,0.50)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200"
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
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs font-bold tracking-[0.3em] uppercase mb-4"
              style={{ color: "rgba(120,53,15,0.50)" }}
            >
              Get in Touch
            </h4>
            <address className="not-italic space-y-2">
              <p
                className="text-sm"
                style={{ color: "rgba(120,53,15,0.72)" }}
              >
                123 Milk Tea Lane
                <br />
                Metro Manila, Philippines
              </p>
              <a
                href="mailto:hello@brewboba.ph"
                className="text-sm block transition-colors duration-200"
                style={{ color: "rgba(120,53,15,0.72)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#92400E")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(120,53,15,0.72)")
                }
              >
                hello@brewboba.ph
              </a>
              <a
                href="tel:+639123456789"
                className="text-sm block transition-colors duration-200"
                style={{ color: "rgba(120,53,15,0.72)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#92400E")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(120,53,15,0.72)")
                }
              >
                +63 912 345 6789
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{
            borderTop: "1px solid rgba(217,119,6,0.15)",
            color: "rgba(120,53,15,0.50)",
          }}
        >
          <p>© {new Date().getFullYear()} BrewBoba. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline transition-opacity hover:opacity-80">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline transition-opacity hover:opacity-80">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

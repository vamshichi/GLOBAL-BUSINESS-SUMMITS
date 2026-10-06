"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

import { navigation } from "@/data/navigation";

const whatWeDoItems = [
  {
    label: "GLOBAL SUMMITS & CONFERENCES",
    href: "/what-we-do/global-summits-conferences",
  },
  {
    label: "EXECUTIVE LEARNING & LEADERSHIP EXPERIENCES",
    href: "/what-we-do/executive-learning",
  },
  {
    label: "STRATEGIC EVENT MANAGEMENT",
    href: "/what-we-do/event-management",
  },
  {
    label: "STRATEGIC PARTNERSHIPS & BUSINESS CONNECTIVITY",
    href: "/what-we-do/strategic-partnerships",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        border-b
        transition-all duration-300
        ${
          scrolled
            ? "h-16 border-white/10 bg-deep/80 text-white backdrop-blur-md"
            : "h-20 border-transparent text-navy"
        }
      `}
    >
      {/* =========================
          DESKTOP / MAIN NAVBAR
      ========================== */}
      <nav
        aria-label="Primary"
        className="
          mx-auto flex h-full max-w-[1440px]
          items-center justify-between
          px-6 lg:px-12
        "
      >
        {/* LOGO */}
        <Link
          href="/"
          aria-label="Global Business Summits home"
          className="flex items-center"
        >
          <Image
            src="/logo/logo.jpeg"
            alt="Global Business Summits"
            width={180}
            height={90}
            priority
            className={`
              h-12 w-auto rounded-sm object-contain
              transition-all duration-300
              lg:h-14
              ${scrolled ? "bg-white p-1" : ""}
            `}
          />
        </Link>

        {/* =========================
            DESKTOP MENU
        ========================== */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => {
            const isWhatWeDo =
              item.label.toLowerCase() === "what we do";

            const isEvents =
              item.label.toLowerCase() === "events";

            const isMedia =
              item.label.toLowerCase() === "media";

            /*
             * What We Do gets our custom dropdown.
             *
             * Events = no dropdown
             * Media = no dropdown
             * Other items = use children from navigation data
             */
            const children = isWhatWeDo
              ? whatWeDoItems
              : isEvents || isMedia
                ? []
                : item.children || [];

            const hasDropdown = children.length > 0;

            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  if (hasDropdown) {
                    setHoveredMenu(item.label);
                  }
                }}
                onMouseLeave={() => {
                  setHoveredMenu(null);
                }}
              >
                {/* NAV ITEM */}
                <Link
                  href={item.href}
                  className="
                    flex items-center gap-1
                    text-sm font-semibold
                    transition-colors duration-200
                    hover:text-teal
                  "
                >
                  {item.label}

                  {hasDropdown && (
                    <ChevronDown
                      size={14}
                      strokeWidth={2}
                      className={`
                        transition-transform duration-200
                        ${
                          hoveredMenu === item.label
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    />
                  )}
                </Link>

                {/* =========================
                    DROPDOWN
                ========================== */}
                <AnimatePresence>
                  {hasDropdown &&
                    hoveredMenu === item.label && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 8,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: 8,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        className="
                          absolute
                          left-1/2
                          top-full
                          mt-4
                          w-[380px]
                          -translate-x-1/2
                          pt-2
                        "
                      >
                        <div
                          className="
                            overflow-hidden
                            border border-white/10
                            bg-deep
                            p-2
                            text-white
                            shadow-2xl
                          "
                        >
                          {children.map((child, index) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="
                                group/item
                                flex items-start gap-4
                                border-b border-white/5
                                px-4 py-4
                                last:border-b-0
                                transition-all duration-200
                                hover:bg-white/10
                              "
                            >
                              {/* NUMBER */}
                              <span
                                className="
                                  mt-0.5
                                  min-w-[24px]
                                  text-[11px]
                                  font-bold
                                  tracking-wider
                                  text-teal
                                "
                              >
                                0{index + 1}
                              </span>

                              {/* LABEL */}
                              <span
                                className="
                                  text-sm
                                  font-semibold
                                  leading-snug
                                  text-white/90
                                  transition-colors
                                  group-hover/item:text-cyan
                                "
                              >
                                {child.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        {/* =========================
            DESKTOP CTA
        ========================== */}
        <Link
          href="/contact"
          className="
            hidden
            bg-teal
            px-5 py-2.5
            text-sm font-bold
            text-white
            transition-all duration-200
            hover:bg-cyan
            hover:text-deep
            lg:block
          "
        >
          Partner With Us
        </Link>

        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}
        <button
          type="button"
          className="
            flex
            items-center
            justify-center
            lg:hidden
          "
          aria-label={
            mobileMenuOpen
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={mobileMenuOpen}
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);

            if (mobileMenuOpen) {
              setActiveAccordion(null);
            }
          }}
        >
          {mobileMenuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </nav>

      {/* =========================
          MOBILE MENU
      ========================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{
              clipPath: "inset(0 0 100% 0)",
            }}
            animate={{
              clipPath: "inset(0 0 0% 0)",
            }}
            exit={{
              clipPath: "inset(0 0 100% 0)",
            }}
            transition={{
              duration: 0.5,
              ease: [0.7, 0, 0.2, 1],
            }}
            className="
              fixed
              inset-0
              top-0
              z-[-1]
              overflow-y-auto
              bg-deep
              px-6
              pb-10
              pt-24
              text-white
              lg:hidden
            "
          >
            {/* =========================
                MOBILE NAV ITEMS
            ========================== */}
            {navigation.map((item) => {
              const isWhatWeDo =
                item.label.toLowerCase() === "what we do";

              const isEvents =
                item.label.toLowerCase() === "events";

              const isMedia =
                item.label.toLowerCase() === "media";

              const children = isWhatWeDo
                ? whatWeDoItems
                : isEvents || isMedia
                  ? []
                  : item.children || [];

              const hasDropdown =
                children.length > 0;

              return (
                <div
                  key={item.label}
                  className="
                    border-b
                    border-white/10
                  "
                >
                  {/* =========================
                      MOBILE MAIN ITEM
                  ========================== */}
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      py-4
                      text-3xl
                      font-bold
                      tracking-tight
                    "
                  >
                    <Link
                      href={item.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setActiveAccordion(null);
                      }}
                    >
                      {item.label}
                    </Link>

                    {/* DROPDOWN ARROW */}
                    {hasDropdown && (
                      <button
                        type="button"
                        aria-label={`Toggle ${item.label}`}
                        aria-expanded={
                          activeAccordion === item.label
                        }
                        onClick={() =>
                          setActiveAccordion(
                            activeAccordion ===
                              item.label
                              ? null
                              : item.label
                          )
                        }
                        className="p-2"
                      >
                        <ChevronDown
                          size={28}
                          className={`
                            transition-transform
                            duration-300
                            ${
                              activeAccordion ===
                              item.label
                                ? "rotate-180"
                                : ""
                            }
                          `}
                        />
                      </button>
                    )}
                  </div>

                  {/* =========================
                      MOBILE DROPDOWN
                  ========================== */}
                  <AnimatePresence>
                    {hasDropdown &&
                      activeAccordion ===
                        item.label && (
                        <motion.ul
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                          className="
                            overflow-hidden
                            pb-4
                            pl-2
                          "
                        >
                          {children.map(
                            (child, index) => (
                              <li
                                key={child.label}
                              >
                                <Link
                                  href={child.href}
                                  onClick={() => {
                                    setMobileMenuOpen(
                                      false
                                    );
                                    setActiveAccordion(
                                      null
                                    );
                                  }}
                                  className="
                                    flex
                                    items-start
                                    gap-3
                                    border-b
                                    border-white/5
                                    py-3
                                    text-base
                                    font-semibold
                                    leading-snug
                                    text-white/70
                                    transition-colors
                                    last:border-b-0
                                    hover:text-cyan
                                  "
                                >
                                  <span
                                    className="
                                      mt-0.5
                                      text-xs
                                      font-bold
                                      text-teal
                                    "
                                  >
                                    0{index + 1}
                                  </span>

                                  <span>
                                    {child.label}
                                  </span>
                                </Link>
                              </li>
                            )
                          )}
                        </motion.ul>
                      )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* =========================
                MOBILE CTA
            ========================== */}
            <Link
              href="/contact"
              onClick={() => {
                setMobileMenuOpen(false);
                setActiveAccordion(null);
              }}
              className="
                mt-8
                block
                bg-teal
                py-4
                text-center
                font-bold
                transition-colors
                hover:bg-cyan
                hover:text-deep
              "
            >
              Partner With Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
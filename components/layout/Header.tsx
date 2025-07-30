"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const navMenuItems = [
    { name: "Home", href: "/" },
    { name: "Our Culture", href: "/our-culture" },
    { name: "Insights & Learning", href: "/insights-learning" },
    { name: "Career", href: "/career" },
    { name: "Our Work", href: "/our-work" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`w-full fixed top-0 z-50 [backdrop-filter:blur(64px)] bg-[var(--color-gray)] flex flex-nowrap items-center justify-between py-3 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 text-base text-[var(--color-white)] font-lexend transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Link
        href="/"
        className="flex items-center gap-2 cursor-pointer min-w-fit"
      >
        <Image
          className="w-6 h-8 sm:w-6 sm:h-8 md:w-7 md:h-9 lg:w-8 lg:h-10 xl:w-9 xl:h-11"
          width={36}
          height={44}
          sizes="(max-width: 640px) 24px, (max-width: 768px) 24px, (max-width: 1024px) 28px, (max-width: 1280px) 32px, 36px"
          alt="Code Huddle Logo"
          src="/images/logo/code-huddle/pictorial.svg"
        />
        <Image
          className="block md:hidden sm:block lg:block w-24 h-[12px] sm:w-28 sm:h-[14px] md:w-32 md:h-[16px] lg:w-36 lg:h-[18px] xl:w-40 xl:h-[20px]"
          width={160}
          height={20}
          sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, (max-width: 1024px) 128px, (max-width: 1280px) 144px, 160px"
          alt="Code Huddle Wordmark"
          src="/images/logo/code-huddle/wordmark.svg"
        />
      </Link>
      <div className="hidden md:flex items-center px-2 md:px-3 lg:px-4 space-x-1 md:space-x-2 lg:space-x-3 xl:space-x-4 min-w-fit">
        {navMenuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`py-2 px-2 md:px-2.5 lg:px-3 cursor-pointer transition-colors duration-300 text-xs md:text-sm lg:text-base xl:text-lg ${
              pathname === item.href
                ? "border-[var(--color-royalblue)] border-solid border-b-[2px] text-[var(--color-royalblue)] tracking-[0.01em] font-medium"
                : "hover:text-[var(--color-royalblue)]"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-[var(--color-white)] focus:outline-none"
        >
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            ></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[var(--color-gray)] flex flex-col items-center md:hidden py-4">
          {navMenuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`py-2 px-4 cursor-pointer transition-colors duration-300 text-sm sm:text-base ${
                pathname === item.href
                  ? "border-[var(--color-royalblue)] border-solid border-b-[2px] text-[var(--color-royalblue)] tracking-[0.01em] font-medium"
                  : "hover:text-[var(--color-royalblue)]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
      <div className="hidden md:flex rounded-xl bg-[var(--color-royalblue)] items-center justify-center p-2 md:p-2.5 lg:p-3 xl:p-3.5 gap-2 cursor-pointer group min-w-fit">
        <span className="tracking-[0.01em] font-medium text-xs md:text-sm lg:text-base xl:text-md">
          Book a Huddle
        </span>
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:rotate-12"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.5653 12.407C12.1143 12.407 12.5613 11.963 12.5643 11.413L12.6143 3.42001L12.6143 3.41401C12.6143 2.86401 12.1703 2.41801 11.6203 2.41401C11.0683 2.41001 10.6173 2.85501 10.6143 3.40801L10.5793 8.96601L2.32126 0.707004C1.93026 0.316004 1.29726 0.316004 0.907257 0.707004C0.711257 0.902004 0.614257 1.158 0.614256 1.414C0.614256 1.67 0.711257 1.926 0.907257 2.121L9.19525 10.409L3.61325 10.414C3.06125 10.414 2.61425 10.862 2.61425 11.414L2.61426 11.415C2.61426 11.967 3.06326 12.414 3.61526 12.414L11.5653 12.407Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;

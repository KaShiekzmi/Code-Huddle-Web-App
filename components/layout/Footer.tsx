import Image from "next/image";
import Link from "next/link";
import FooterColumn from "@/components/ui/FooterColumn";
import SocialMediaIcons from "@/components/ui/SocialMediaIcons";

const footerColumns = [
  {
    title: "Company",
    links: [
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "About", href: "/about" },
      { name: "Career", href: "/career" },
      { name: "Learning", href: "/learning" },
    ],
  },
  {
    title: "Services and Solutions",
    links: [
      { name: "Web Development", href: "/services/web-development" },
      {
        name: "Mobile App Development",
        href: "/services/mobile-app-development",
      },
      { name: "UI / UX Design", href: "/services/ui-ux-design" },
      { name: "QA Testing", href: "/services/qa-testing" },
      {
        name: "Social Media Marketing",
        href: "/services/social-media-marketing",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Case Studies", href: "/case-studies" },
      { name: "Learning", href: "/learning" },
      { name: "FAQ", href: "/faq" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="mx-4 sm:mx-6 md:mx-8 mb-4 sm:mb-5 md:mb-6 w-auto rounded-3xl footer-gradient py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-8 md:px-12 lg:px-16 text-center text-base sm:text-lg text-[var(--color-white)] font-lexend">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:gap-5 md:gap-6">
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 md:gap-6 justify-center">
          <div className="w-full sm:w-64 md:w-72 flex flex-col items-center sm:items-start gap-4 sm:gap-5 md:gap-6 text-left text-sm sm:text-base">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-2.5">
              <Image
                className="w-6 sm:w-7 h-8 sm:h-9"
                width={28}
                height={36}
                sizes="(max-width: 639px) 6vw, 7vw"
                alt="Code Huddle Logo"
                src="/assets/images/company/logo/pictorial.svg"
              />
              <Image
                className="w-32 sm:w-36 h-[16px] sm:h-[18px]"
                width={144}
                height={18}
                sizes="(max-width: 639px) 32vw, 36vw"
                alt="Code Huddle Wordmark"
                src="/assets/images/company/logo/wordmark.svg"
              />
            </div>
            <p className="max-w-64 sm:max-w-72 text-sm text-center sm:text-left sm:text-base">
              The company aims to digitally transform early-stage startups and
              SMEs through our robust expertise in custom software development.
            </p>
            <div className="flex flex-col items-start gap-3 sm:gap-4">
              <span className="font-medium text-sm sm:text-base mx-auto sm:mx-0">
                Social Media
              </span>
              <SocialMediaIcons />
            </div>
          </div>
          {footerColumns.map((column, index) => (
            <FooterColumn
              key={index}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>
        <hr className="h-[1px] opacity-30" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="font-medium">
              Copyright © {new Date().getFullYear()}
            </span>
            <Link
              href="mailto:info@code-huddle.com"
              className="underline font-medium"
            >
              info@code-huddle.com
            </Link>
          </div>
          <div className="text-sm sm:text-base">
            <span>Powered by: </span>
            <span className="font-medium">Code Huddle</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

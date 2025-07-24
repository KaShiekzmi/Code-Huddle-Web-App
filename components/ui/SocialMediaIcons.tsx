import Image from "next/image";
import Link from "next/link";

const socialIcons = [
  {
    src: "/icons/fb.svg",
    href: "https://facebook.com",
    alt: "Facebook",
  },
  {
    src: "/icons/linkedin.svg",
    href: "https://linkedin.com",
    alt: "LinkedIn",
  },
  {
    src: "/icons/instagram.svg",
    href: "https://instagram.com",
    alt: "Instagram",
  },
];

const SocialMediaIcons = () => {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {socialIcons.map((icon, index) => (
        <Link key={index} href={icon.href} target="_blank">
          <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-[var(--color-dimgray)] flex items-center justify-center">
            <Image
              className="w-8 sm:w-10 h-8 sm:h-10"
              width={16}
              height={16}
              sizes="(max-width: 639px) 8vw, 10vw"
              alt={icon.alt}
              src={icon.src}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaIcons;

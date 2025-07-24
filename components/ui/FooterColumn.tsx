import Link from "next/link";

interface FooterColumnProps {
  title: string;
  links: { name: string; href: string }[];
}

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div className="w-full sm:w-64 md:w-72 flex flex-col items-center sm:items-start gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 md:px-8 lg:px-10 text-[var(--color-white)]">
      <hr className="h-[1px] opacity-30 w-full sm:hidden" />
      <div className="flex flex-col items-center sm:items-start gap-2">
        <span className="font-medium text-base sm:text-lg">{title}</span>
        <div className="w-8 sm:w-10 h-1 rounded-full bg-[var(--color-royalblue)]" />
      </div>
      <div className="flex flex-col items-center sm:items-start gap-3 sm:gap-4 text-sm sm:text-base">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="tracking-[0.01em] hover:underline"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterColumn;

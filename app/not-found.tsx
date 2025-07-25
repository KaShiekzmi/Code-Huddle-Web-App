import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full min-h-screen mt-10 flex flex-col items-center justify-center py-6 md:py-8 lg:py-12 px-4 sm:px-8 md:px-16 lg:px-24 gap-6 md:gap-8 lg:gap-10 text-center text-[var(--color-gray)] font-lexend bg-[var(--color-white)]">
      <div className="max-w-7xl flex flex-col items-center gap-4 md:gap-5 lg:gap-6">
        <Image
          className="w-24 sm:w-32 md:w-36 lg:w-40 h-24 sm:h-32 md:h-36 lg:h-40 bg-black rounded-full"
          width={160}
          height={160}
          sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1023px) 144px, 160px"
          alt="Code Huddle Logo"
          src="/images/logo/code-huddle/pictorial.svg"
        />
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold">
          404
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-medium">
          Oops! Page Not Found
        </h2>
        <p className="text-sm sm:text-base max-w-md">
          It looks like the page you&apos;re looking for doesn&apos;t exist or
          has been moved. Let&apos;s get you back to exploring Code Huddle!
        </p>
        <Link
          href="/"
          className="w-full sm:w-64 md:w-56 lg:w-64 h-12 sm:h-14 md:h-12 lg:h-14 custom-rounded border-black border-2 flex items-center justify-center px-6 bg-[var(--color-royalblue-200)] hover:bg-[var(--color-royalblue)] hover:text-[var(--color-white)] transition-colors duration-300"
        >
          <div className="flex items-center gap-2 sm:gap-2.5">
            <span className="text-lg sm:text-xl md:text-lg lg:text-xl">
              Back to Home
            </span>
            <svg
              width="30"
              height="30"
              className="sm:w-[32px] sm:h-[32px] md:w-[30px] md:h-[30px] lg:w-[35px] lg:h-[35px]"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.0151 20.0796L22.0151 12.5372M22.0151 12.5372L14.4726 12.5372M22.0151 12.5372L12.587 21.9653M5.98732 5.93751C12.2357 -0.310876 22.3663 -0.310876 28.6147 5.93751C34.8631 12.1859 34.8631 22.3165 28.6147 28.5649C22.3663 34.8133 12.2357 34.8133 5.98732 28.5649C-0.261072 22.3165 -0.261072 12.1859 5.98732 5.93751Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

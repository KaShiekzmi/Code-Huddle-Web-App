const CultureButton = () => {
  return (
    <div className="w-full sm:w-[360px] md:w-[450px] lg:w-[508px] h-[100px] sm:h-[110px] lg:h-[120px] custom-rounded border-black border-2 flex items-center justify-center py-8 sm:py-9 lg:py-10 px-2.5 bg-[var(--color-royalblue-200)] cursor-pointer hover:pl-5 transition-all duration-300">
      <div className="flex items-center gap-2 sm:gap-2.5 ">
        <span className="text-lg sm:text-xl md:text-2xl text-[var(--color-gray)]">
          Life at Code Huddle
        </span>
        <svg
          width="30"
          height="30"
          className="sm:w-[32px] sm:h-[32px] lg:w-[35px] lg:h-[35px]"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.0151 20.0796L22.0151 12.5372M22.0151 12.5372L14.4726 12.5372M22.0151 12.5372L12.587 21.9653M5.98732 5.93751C12.2357 -0.310876 22.3663 -0.310876 28.6147 5.93751C34.8631 12.1859 34.8631 22.3165 28.6147 28.5649C22.3663 34.8133 12.2357 34.8133 5.98732 28.5649C-0.261072 22.3165 -0.261072 12.1859 5.98732 5.93751Z"
            stroke="#0C111D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default CultureButton;

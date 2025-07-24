import Image from "next/image";

interface CultureMediaProps {
  src: string;
  type: "image" | "video";
  onClick?: () => void;
}

const CultureMedia = ({ src, type, onClick }: CultureMediaProps) => {
  return (
    <div className="w-full h-full cursor-pointer relative" onClick={onClick}>
      {type === "image" ? (
        <Image
          className="w-full h-full object-cover"
          width={0}
          height={0}
          sizes="(max-width: 1023px) 100vw, 400px"
          alt=""
          src={src}
        />
      ) : (
        <>
          <video className="w-full h-full object-cover" muted loop>
            <source src={src} type="video/mp4" />
          </video>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white opacity-80 hover:opacity-100 transition-opacity"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </>
      )}
    </div>
  );
};

export default CultureMedia;

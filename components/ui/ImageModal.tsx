import Image from "next/image";

interface ModalProps {
  src: string;
  type: "image" | "video";
  onClose?: () => void;
}

const Modal = ({ src, type, onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <button
        className="cursor-pointer absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 text-white text-xl sm:text-2xl"
        onClick={onClose}
        aria-label="Close modal"
      >
        ×
      </button>
      {type === "image" ? (
        <Image
          className="max-w-[95vw] sm:max-w-[90vw] max-h-[95vh] sm:max-h-[90vh] object-contain"
          width={800}
          height={600}
          sizes="(max-width: 639px) 95vw, 90vw"
          alt=""
          src={src}
        />
      ) : (
        <video
          className="max-w-[95vw] sm:max-w-[90vw] max-h-[95vh] sm:max-h-[90vh] object-contain"
          autoPlay
          controls
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default Modal;

import Image from "next/image";
import { motion } from "framer-motion";

interface MediaItem {
  src: string;
  type: "image" | "video";
  alt?: string;
}

interface MediaModalProps {
  media: MediaItem[];
  currentIndex: number;
  onClose?: () => void;
  onNavigate?: (index: number) => void;
}

const MediaModal = ({ media, currentIndex, onClose, onNavigate }: MediaModalProps) => {
  const currentMedia = media[currentIndex];
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < media.length - 1;

  const handlePrevious = () => {
    if (hasPrevious && onNavigate) {
      onNavigate(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (hasNext && onNavigate) {
      onNavigate(currentIndex + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape" && onClose) {
      onClose();
    } else if (e.key === "ArrowLeft" && hasPrevious) {
      handlePrevious();
    } else if (e.key === "ArrowRight" && hasNext) {
      handleNext();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Close button */}
      <button
        className="cursor-pointer absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 text-white text-[40px] mr-2 sm:text-[40px] hover:text-gray-300 transition-colors duration-200 z-10"
        onClick={onClose}
        aria-label="Close modal"
      >
        ×
      </button>

      {/* Previous button */}
      {hasPrevious && (
        <motion.button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 z-10"
          onClick={handlePrevious}
          aria-label="Previous image"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button>
      )}

      {/* Next button */}
      {hasNext && (
        <motion.button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 z-10"
          onClick={handleNext}
          aria-label="Next image"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      )}

      {/* Image counter */}
      {media.length > 1 && (
        <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
          {currentIndex + 1} / {media.length}
        </div>
      )}

      {/* Media content */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        {currentMedia.type === "image" ? (
          <Image
            className="max-w-[95vw] sm:max-w-[90vw] max-h-[95vh] sm:max-h-[90vh] object-contain"
            width={800}
            height={600}
            sizes="(max-width: 639px) 95vw, 90vw"
            alt={currentMedia.alt || "Modal image"}
            src={currentMedia.src}
          />
        ) : (
          <video
            className="max-w-[95vw] sm:max-w-[90vw] max-h-[95vh] sm:max-h-[90vh] object-contain"
            autoPlay
            controls
          >
            <source src={currentMedia.src} type="video/mp4" />
          </video>
        )}
      </motion.div>
    </div>
  );
};

export default MediaModal;

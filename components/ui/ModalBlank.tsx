"use client";

import React, { useState, useEffect } from "react";

interface ModalBlankProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  showActions?: boolean;
  confirmButtonStyle?: "primary" | "danger" | "success";
  isLoading?: boolean;
}

export default function ModalBlank({
  isOpen,
  onClose,
  title,
  children,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  showActions = true,
  confirmButtonStyle = "primary",
  isLoading = false,
}: ModalBlankProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300); // Match the transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      onClose();
    }
  };

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
  };

  const getConfirmButtonClasses = () => {
    const baseClasses =
      "px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium transition-colors duration-200 cursor-pointer text-xs sm:text-sm";

    if (isLoading) {
      return `${baseClasses} bg-gray-400 text-gray-600 cursor-not-allowed`;
    }

    switch (confirmButtonStyle) {
      case "danger":
        return `${baseClasses} bg-red-600 text-white hover:bg-red-700`;
      case "success":
        return `${baseClasses} bg-green-600 text-white hover:bg-green-700`;
      case "primary":
      default:
        return `${baseClasses} bg-blue-600 text-white hover:bg-blue-700`;
    }
  };

  return (
    <div
      className={`fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300 ease-in-out ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white rounded-lg p-4 sm:p-6 max-w-[90vw] sm:max-w-md w-full mx-2 sm:mx-4 shadow-xl transform transition-all duration-300 ease-in-out ${
          isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">
            {title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="mb-4 sm:mb-6 text-xs sm:text-sm">{children}</div>

        {showActions && (
          <div className="flex justify-end space-x-2 sm:space-x-3">
            <button
              type="button"
              onClick={handleCancel}
              disabled={isLoading}
              className="cursor-pointer px-3 sm:px-4 py-1.5 sm:py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200 text-xs sm:text-sm"
            >
              {cancelText}
            </button>
            {onConfirm && (
              <button
                type="button"
                onClick={handleConfirm}
                disabled={isLoading}
                className={getConfirmButtonClasses()}
              >
                {isLoading ? "Loading..." : confirmText}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

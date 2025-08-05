import * as yup from "yup";

/**
 * Validates if an email address is properly formatted
 */
export const isValidEmail = (email: string): boolean => {
  return yup.string().email().isValidSync(email);
};

/**
 * Validates if an email address is not empty and properly formatted
 * Returns error message string or null if valid
 */
export const validateEmail = (email: string): string | null => {
  try {
    yup.string().email().validateSync(email);
    return null;
  } catch (error) {
    return error instanceof Error
      ? error.message
      : "Please enter a valid email address";
  }
};

/**
 * Sanitizes email address for safe usage
 */
export const sanitizeEmail = (email: string): string => {
  return email.trim().toLowerCase();
};

/**
 * Email Configuration
 *
 * Required Environment Variables:
 *
 * EMAIL_USER=your-email@gmail.com
 * EMAIL_APP_PASSWORD=your-gmail-app-password
 *
 * To get Gmail App Password:
 * 1. Go to your Google Account settings
 * 2. Enable 2-Factor Authentication if not already enabled
 * 3. Go to Security → App passwords
 * 4. Generate a new app password for "Mail"
 * 5. Use this password as EMAIL_APP_PASSWORD
 */

export const emailConfig = {
  service: "gmail",
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_APP_PASSWORD,
  from: `"Code Huddle" <${process.env.EMAIL_USER}>`,
  replyTo: "careers@code-huddle.com",
} as const;

export const validateEmailConfig = (): void => {
  if (!emailConfig.user || !emailConfig.pass) {
    throw new Error(
      "Email configuration is missing. Please set EMAIL_USER and EMAIL_APP_PASSWORD environment variables."
    );
  }
};

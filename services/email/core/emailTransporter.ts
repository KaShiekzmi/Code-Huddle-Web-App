import * as nodemailer from "nodemailer";
import { emailConfig, validateEmailConfig } from "@/config/email/email.config";

// Create transporter
export const createTransporter = () => {
  validateEmailConfig();

  const config = {
    service: emailConfig.service,
    auth: {
      user: emailConfig.user!,
      pass: emailConfig.pass!,
    },
  };

  return nodemailer.createTransport(config);
};

// Export singleton transporter instance
export const emailTransporter = createTransporter();

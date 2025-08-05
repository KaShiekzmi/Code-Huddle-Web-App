import { render } from "@react-email/render";
import { JobApplicationConfirmationEmail } from "../templates/job-application/JobApplicationConfirmationEmail";
import { ApplicationData } from "@/types/job-application";
import { Job } from "@/types/job";
import { validateEmail } from "../validators/emailValidator";
import { EmailOptions } from "@/types/email/email.types";
import { emailConfig } from "@/config/email/email.config";
import { emailTransporter } from "./emailTransporter";

// Email service interface
export interface EmailService {
  sendJobApplicationConfirmation: (
    applicationData: ApplicationData,
    job: Job
  ) => Promise<void>;
}

// Email service implementation
export class EmailServiceImpl implements EmailService {
  async sendJobApplicationConfirmation(
    applicationData: ApplicationData,
    job: Job
  ): Promise<void> {
    try {
      // Validate email
      const emailError = validateEmail(applicationData.personalInfo.email);
      if (emailError) {
        throw new Error(emailError);
      }

      // Generate HTML email content
      const emailComponent = JobApplicationConfirmationEmail({
        applicationData,
        job,
      }) as React.ReactElement;
      const emailHtml = await render(emailComponent);

      // Email options
      const mailOptions: EmailOptions = {
        from: emailConfig.from,
        to: applicationData.personalInfo.email,
        subject: `Application Confirmation - ${job.title} at Code Huddle`,
        html: emailHtml,
      };

      // Send email
      await emailTransporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Error sending job application confirmation email:", error);
      throw new Error("Failed to send confirmation email");
    }
  }
}

// Export singleton instance
export const emailService = new EmailServiceImpl();

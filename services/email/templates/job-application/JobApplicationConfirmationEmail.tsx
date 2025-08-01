import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Button,
  Hr,
  Link,
  Row,
  Column,
} from "@react-email/components";
import { ApplicationData } from "@/types/job-application";
import { Job } from "@/types/job";

interface JobApplicationConfirmationEmailProps {
  applicationData: ApplicationData;
  job: Job;
}

export const JobApplicationConfirmationEmail: React.FC<
  JobApplicationConfirmationEmailProps
> = ({ applicationData, job }) => {
  const fullName =
    `${applicationData.personalInfo.firstName} ${applicationData.personalInfo.lastName}`.trim();
  const displayName = fullName || applicationData.personalInfo.email;

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          {/* Main Content */}
          <Section style={mainContent}>
            {/* Success Icon */}
            <Section style={successIconContainer}>
              <div style={successIcon}>
                <Text style={successIconText}>✓</Text>
              </div>
            </Section>

            {/* Greeting */}
            <Heading style={h1}>Application Received!</Heading>

            <Text style={greeting}>Dear {displayName},</Text>

            <Text style={paragraph}>
              Thank you for your interest in joining our team at Code Huddle! We
              have successfully received your application for the position of{" "}
              <strong>{job.title}</strong>.
            </Text>

            {/* Application Details */}
            <Section style={detailsContainer}>
              <Heading style={h2}>Application Details</Heading>

              <Row style={detailRow}>
                <Column style={detailLabel}>
                  <Text style={labelText}>Position:</Text>
                </Column>
                <Column style={detailValue}>
                  <Text style={valueText}>{job.title}</Text>
                </Column>
              </Row>

              <Row style={detailRow}>
                <Column style={detailLabel}>
                  <Text style={labelText}>Applicant:</Text>
                </Column>
                <Column style={detailValue}>
                  <Text style={valueText}>{displayName}</Text>
                </Column>
              </Row>

              <Row style={detailRow}>
                <Column style={detailLabel}>
                  <Text style={labelText}>Email:</Text>
                </Column>
                <Column style={detailValue}>
                  <Text style={valueText}>
                    {" "}
                    {applicationData.personalInfo.email}
                  </Text>
                </Column>
              </Row>

              <Row style={detailRow}>
                <Column style={detailLabel}>
                  <Text style={labelText}>Phone:</Text>
                </Column>
                <Column style={detailValue}>
                  <Text style={valueText}>
                    {applicationData.personalInfo.countryCode}{" "}
                    {applicationData.personalInfo.phone}
                  </Text>
                </Column>
              </Row>

              {applicationData.personalInfo.headline && (
                <Row style={detailRow}>
                  <Column style={detailLabel}>
                    <Text style={labelText}>Headline:</Text>
                  </Column>
                  <Column style={detailValue}>
                    <Text style={valueText}>
                      {applicationData.personalInfo.headline}
                    </Text>
                  </Column>
                </Row>
              )}

              <Row style={detailRow}>
                <Column style={detailLabel}>
                  <Text style={labelText}>Application Date:</Text>
                </Column>
                <Column style={detailValue}>
                  <Text style={valueText}>
                    {" "}
                    {new Date().toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Next Steps */}
            <Section style={nextStepsContainer}>
              <Heading style={h2}>What Happens Next?</Heading>

              <Text style={paragraph}>
                Our hiring team will carefully review your application and
                qualifications. Here&apos;s what you can expect:
              </Text>

              <Row style={stepRow}>
                <Column style={stepNumber}>
                  <Text style={stepNumberText}>1</Text>
                </Column>
                <Column style={stepContent}>
                  <Text style={stepTitle}>Application Review</Text>
                  <Text style={stepDescription}>
                    We&apos;ll review your resume, cover letter, and supporting
                    documents within 3-5 business days.
                  </Text>
                </Column>
              </Row>

              <Row style={stepRow}>
                <Column style={stepNumber}>
                  <Text style={stepNumberText}>2</Text>
                </Column>
                <Column style={stepContent}>
                  <Text style={stepTitle}>Interview Process</Text>
                  <Text style={stepDescription}>
                    If selected, you&apos;ll be invited for an initial phone
                    screening followed by technical interviews.
                  </Text>
                </Column>
              </Row>

              <Row style={stepRow}>
                <Column style={stepNumber}>
                  <Text style={stepNumberText}>3</Text>
                </Column>
                <Column style={stepContent}>
                  <Text style={stepTitle}>Final Decision</Text>
                  <Text style={stepDescription}>
                    We&apos;ll notify you of our decision and discuss next steps
                    if you&apos;re selected for the position.
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Contact Information */}
            <Section style={contactContainer}>
              <Text style={paragraph}>
                If you have any questions about your application or the hiring
                process, please don&apos;t hesitate to reach out to us at{" "}
                <Link href="mailto:careers@code-huddle.com" style={link}>
                  careers@code-huddle.com
                </Link>
              </Text>
            </Section>

            {/* CTA Button */}
            <Section style={ctaContainer}>
              <Button style={ctaButton} href="https://code-huddle.com/career">
                View Other Opportunities
              </Button>
            </Section>
          </Section>

          <Hr style={hr} />

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              © {new Date().getFullYear()} Code Huddle. All rights reserved.
            </Text>
            <Text style={footerText}>
              This email was sent to {applicationData.personalInfo.email}{" "}
              because you applied for a position at Code Huddle.
            </Text>
            <Text style={footerText}>
              <Link href="https://code-huddle.com" style={footerLink}>
                code-huddle.com
              </Link>
              {" | "}
              <Link href="mailto:careers@code-huddle.com" style={footerLink}>
                careers@code-huddle.com
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const mainContent = {
  padding: "40px",
};

const successIconContainer = {
  textAlign: "center" as const,
  marginBottom: "32px",
};

const successIcon = {
  width: "64px",
  height: "64px",
  borderRadius: "50%",
  backgroundColor: "#10b981",
  display: "inline-block",
  textAlign: "center" as const,
  lineHeight: "64px",
  margin: "0 auto",
};

const successIconText = {
  color: "#ffffff",
  fontSize: "32px",
  fontWeight: "bold",
  margin: "0",
  display: "inline-block",
  verticalAlign: "middle",
};

const h1 = {
  color: "#1f2937",
  fontSize: "32px",
  fontWeight: "bold",
  margin: "0 0 16px 0",
  textAlign: "center" as const,
};

const h2 = {
  color: "#1f2937",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0 0 16px 0",
};

const greeting = {
  color: "#374151",
  fontSize: "18px",
  lineHeight: "26px",
  margin: "0 0 24px 0",
};

const paragraph = {
  color: "#6b7280",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 16px 0",
};

const detailsContainer = {
  backgroundColor: "#f9fafb",
  borderRadius: "8px",
  padding: "24px",
  margin: "32px 0",
};

const detailRow = {
  marginBottom: "12px",
};

const detailLabel = {
  width: "30%",
  verticalAlign: "top" as const,
};

const detailValue = {
  width: "70%",
  verticalAlign: "top" as const,
};

const labelText = {
  color: "#6b7280",
  fontSize: "14px",
  fontWeight: "500",
  margin: "0",
};

const valueText = {
  color: "#1f2937",
  fontSize: "14px",
  margin: "0",
};

const nextStepsContainer = {
  margin: "32px 0",
};

const stepRow = {
  marginBottom: "20px",
};

const stepNumber = {
  width: "40px",
  verticalAlign: "top" as const,
};

const stepContent = {
  width: "calc(100% - 40px)",
  verticalAlign: "top" as const,
};

const stepNumberText = {
  color: "#ffffff",
  backgroundColor: "#3b82f6",
  fontSize: "16px",
  fontWeight: "bold",
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  display: "inline-block",
  textAlign: "center" as const,
  lineHeight: "32px",
  margin: "0",
};

const stepTitle = {
  color: "#1f2937",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0 0 4px 0",
};

const stepDescription = {
  color: "#6b7280",
  fontSize: "14px",
  lineHeight: "20px",
  margin: "0",
};

const contactContainer = {
  backgroundColor: "#eff6ff",
  borderRadius: "8px",
  padding: "24px",
  margin: "32px 0",
};

const link = {
  color: "#3b82f6",
  textDecoration: "underline",
};

const ctaContainer = {
  textAlign: "center" as const,
  margin: "32px 0",
};

const ctaButton = {
  backgroundColor: "#3b82f6",
  borderRadius: "8px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "12px 24px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "40px 0",
};

const footer = {
  padding: "24px 40px",
  textAlign: "center" as const,
};

const footerText = {
  color: "#9ca3af",
  fontSize: "12px",
  lineHeight: "16px",
  margin: "0 0 8px 0",
};

const footerLink = {
  color: "#9ca3af",
  textDecoration: "underline",
};

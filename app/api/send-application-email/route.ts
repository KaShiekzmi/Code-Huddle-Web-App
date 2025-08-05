import { NextRequest, NextResponse } from "next/server";
import { emailService } from "@/services/email";
import { ApplicationData } from "@/types/job-application";
import { Job } from "@/types/job";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      applicationData,
      job,
    }: { applicationData: ApplicationData; job: Job } = body;

    // Validate required fields
    if (!applicationData?.personalInfo?.email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (!job?.title) {
      return NextResponse.json(
        { error: "Job information is required" },
        { status: 400 }
      );
    }

    // Send confirmation email
    await emailService.sendJobApplicationConfirmation(applicationData, job);

    return NextResponse.json(
      { message: "Confirmation email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending application email:", error);
    return NextResponse.json(
      { error: "Failed to send confirmation email" },
      { status: 500 }
    );
  }
}

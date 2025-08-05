import { NextRequest, NextResponse } from "next/server";
import { jobs } from "@/data/jobs";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const slug = searchParams.get("slug");

    // If slug is provided, return a single job by slug
    if (slug) {
      const job = jobs.find((j) => j.slug === slug);
      if (!job) {
        return NextResponse.json({ error: "Job not found" }, { status: 404 });
      }
      return NextResponse.json({ job });
    }

    // If id is provided, return a single job by id
    if (id) {
      const job = jobs.find((j) => j.id === parseInt(id, 10));
      if (!job) {
        return NextResponse.json({ error: "Job not found" }, { status: 404 });
      }
      return NextResponse.json({ job });
    }

    const search = searchParams.get("search")?.toLowerCase() || "";
    const location = searchParams.getAll("location").filter(Boolean);
    const employmentType = searchParams
      .getAll("employmentType")
      .filter(Boolean);
    const experienceLevel = searchParams
      .getAll("experienceLevel")
      .filter(Boolean);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const perPage = parseInt(searchParams.get("perPage") || "12", 10);

    // Get current time in Pakistan timezone (PKT)
    const now = new Date();
    const pktTime = new Date(
      now.toLocaleString("en-US", { timeZone: "Asia/Karachi" })
    );

    let filtered = jobs.filter((job) => {
      // Filter out jobs whose deadline has passed
      const deadline = new Date(job.deadlineDate);
      return deadline > pktTime;
    });

    if (search) {
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(search) ||
          job.description.toLowerCase().includes(search)
      );
    }
    if (location.length > 0) {
      filtered = filtered.filter((job) => location.includes(job.location));
    }
    if (employmentType.length > 0) {
      filtered = filtered.filter((job) =>
        employmentType.includes(job.employmentType)
      );
    }
    if (experienceLevel.length > 0) {
      filtered = filtered.filter((job) =>
        experienceLevel.includes(job.experienceLevel)
      );
    }

    const total = filtered.length;
    const totalPages = Math.ceil(total / perPage);
    const start = (page - 1) * perPage;
    const end = start + perPage;
    const paginated = filtered.slice(start, end);

    return NextResponse.json({
      jobs: paginated,
      total,
      page,
      perPage,
      totalPages,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

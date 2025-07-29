import { NextRequest, NextResponse } from "next/server";
import { jobs } from "@/data/jobs";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
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

    let filtered = jobs;

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
      filtered = filtered.filter((job) => experienceLevel.includes(job.level));
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

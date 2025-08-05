import { NextRequest, NextResponse } from "next/server";
import { caseStudies } from "@/data/case-studies";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const slug = searchParams.get("slug");

    if (id) {
      const caseStudy = caseStudies.find((cs) => cs.id === parseInt(id, 10));
      if (!caseStudy) {
        return NextResponse.json(
          { error: "Case study not found" },
          { status: 404 }
        );
      }
      return NextResponse.json({ caseStudy });
    }

    if (slug) {
      const caseStudy = caseStudies.find((cs) => cs.slug === slug);
      if (!caseStudy) {
        return NextResponse.json(
          { error: "Case study not found" },
          { status: 404 }
        );
      }
      return NextResponse.json({ caseStudy });
    }

    return NextResponse.json({
      caseStudies,
      total: caseStudies.length,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

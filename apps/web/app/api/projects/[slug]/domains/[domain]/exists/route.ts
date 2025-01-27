import { domainExists } from "@/lib/api/domains";
import { withAuth } from "@/lib/auth";
import { NextResponse } from "next/server";

// GET /api/projects/[slug]/domains/[domain]/exists – check if a domain exists
export const GET = withAuth(async ({ domain }) => {
  const exists = await domainExists(domain);
  if (exists) {
    return NextResponse.json(1);
  } else {
    return NextResponse.json(0);
  }
});

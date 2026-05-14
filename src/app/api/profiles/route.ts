import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { prisma } from "@/lib/prisma";

type ProfileRequestBody = {
  mode?: unknown;
  fullName?: unknown;
  role?: unknown;
  organization?: unknown;
};

function normalizeRole(role: unknown) {
  const normalizedRole = String(role ?? "").toUpperCase();

  if (normalizedRole === "STUDENT" || normalizedRole === "ALUMNI") {
    return normalizedRole;
  }

  return "STUDENT";
}

export async function POST(request: Request) {
  const authHeader = request.headers.get("authorization");
  const token = authHeader?.startsWith("Bearer ")
    ? authHeader.slice("Bearer ".length)
    : null;

  if (!token) {
    return Response.json({ error: "Missing auth token." }, { status: 401 });
  }

  const supabase = createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser(token);

  if (error || !user?.email) {
    return Response.json({ error: "Invalid auth token." }, { status: 401 });
  }

  const body = (await request.json()) as ProfileRequestBody;
  const mode = body.mode === "signup" ? "signup" : "login";
  const metadata = user.user_metadata;
  const fullName =
    String(body.fullName ?? metadata.full_name ?? "").trim() || null;
  const organization =
    String(body.organization ?? metadata.organization ?? "").trim() || null;
  const role = normalizeRole(body.role ?? metadata.role);

  const existingProfile = await prisma.profile.findUnique({
    where: {
      id: user.id,
    },
    select: {
      id: true,
      email: true,
      full_name: true,
      role: true,
      organization: true,
    },
  });

  if (existingProfile && mode === "login") {
    const profile =
      existingProfile.email === user.email
        ? existingProfile
        : await prisma.profile.update({
            where: {
              id: user.id,
            },
            data: {
              email: user.email,
            },
            select: {
              id: true,
              email: true,
              full_name: true,
              role: true,
              organization: true,
            },
          });

    return Response.json({ profile });
  }

  const profile = existingProfile
    ? await prisma.profile.update({
        where: {
          id: user.id,
        },
        data: {
          email: user.email,
          full_name: fullName,
          role,
          organization,
        },
        select: {
          id: true,
          email: true,
          full_name: true,
          role: true,
          organization: true,
        },
      })
    : await prisma.profile.create({
        data: {
          id: user.id,
          email: user.email,
          full_name: fullName,
          role,
          organization,
        },
        select: {
          id: true,
          email: true,
          full_name: true,
          role: true,
          organization: true,
        },
      });

  return Response.json({ profile });
}

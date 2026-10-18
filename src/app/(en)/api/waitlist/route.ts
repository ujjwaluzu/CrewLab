import { getServerSupabaseClient } from "@/lib/supabase/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function invalidResponse() {
  return Response.json({ status: "invalid", message: "Please enter a valid email address." }, { status: 400 });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return invalidResponse();
  }

  const rawEmail =
    typeof body === "object" && body !== null && "email" in body && typeof body.email === "string"
      ? body.email
      : "";
  const email = rawEmail.trim().toLowerCase();

  if (!email || email.length > 254 || !EMAIL_PATTERN.test(email)) {
    return invalidResponse();
  }

  try {
    const { error } = await getServerSupabaseClient().from("waitlist").insert({ email });

    if (error) {
      if (error.code === "23505") {
        return Response.json({ status: "duplicate" });
      }

      console.error("Waitlist insert failed", { code: error.code, message: error.message });
      return Response.json({ status: "error", message: "Something went wrong. Please try again." }, { status: 500 });
    }

    return Response.json({ status: "success" });
  } catch (error) {
    console.error("Waitlist submission failed", error);
    return Response.json({ status: "error", message: "Something went wrong. Please try again." }, { status: 500 });
  }
}

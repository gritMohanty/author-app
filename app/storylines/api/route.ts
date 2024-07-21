import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const supabase = createClient();
  let { data: story, error } = await supabase.from("story").select("*");

  if (error) {
    console.error("Error fetching data:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return new Response(JSON.stringify({ story }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

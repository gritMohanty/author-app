import { createClient } from "@/utils/supabase/server";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { plotId: number } }
) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("plot")
    .select("*")
    .eq("id", params?.plotId);

  console.log(data, "plot data ", params?.plotId);

  if (error) {
    console.error("Error fetching data:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return new Response(JSON.stringify({ data }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

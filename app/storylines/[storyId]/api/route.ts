import { createClient } from "@/utils/supabase/server";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: { storyId: string | number };
  }
) {
  const supabase = createClient();
  const { storyId } = params;

  let { data: story, error } = await supabase
    .from("story")
    .select("*")
    .eq("id", storyId);
  let { data: chapter, error: chapError } = await supabase
    .from("chapter")
    .select("*")
    .eq("story_id", storyId);

  if (error || chapError) {
    console.error("Error fetching data:", error || chapError);
    return new Response(
      JSON.stringify({ error: error.message || chapError.message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return new Response(JSON.stringify({ story, chapter }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

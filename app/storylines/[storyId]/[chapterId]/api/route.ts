import { createClient } from "@/utils/supabase/server";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { chapterId: number; storyId: number } }
) {
  let supabase = createClient();
  const { storyId, chapterId } = params;

  let { data: plots, error } = await supabase
    .from("plot")
    .select(`*, chapter!inner(id, story_id)`)
    .eq("chapter.story_id", storyId)
    .eq("chapter.id", chapterId);

  if (error) {
    console.error("Error fetching data:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return new Response(JSON.stringify({ plots }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

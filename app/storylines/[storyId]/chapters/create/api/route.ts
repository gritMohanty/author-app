import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: { storyId: number } }
) {
  try {
    const supabase = createClient();

    // Parse the request body
    const body = await request.json();
    const { payload } = body;
    const { name, description } = payload;

    // Validate input
    if (!name || !description) {
      return NextResponse.json(
        { error: "Name and description are required" },
        { status: 400 }
      );
    }

    const { count, error: countError } = await supabase
      .from("chapter")
      .select("*", { count: "exact", head: true });

    if (countError) {
      console.error("Error calculating rank:", countError);
      return NextResponse.json({ error: countError.message }, { status: 500 });
    }

    const { data: chapter, error } = await supabase
      .from("chapter")
      .insert([
        {
          chapter_name: name,
          summary: description,
          rank: (count ?? 0) + 1,
          story_id: params?.storyId,
        },
      ])
      .select("*");

    if (error) {
      console.error("Error inserting data:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ chapter }, { status: 200 });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

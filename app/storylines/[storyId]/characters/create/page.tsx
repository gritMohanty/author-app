import CharacterMode from "@/components/character/CharacterMode";
import React from "react";

function page({ params }: { params: { storyId: number } }) {
  return <CharacterMode storyId={params?.storyId} />;
}

export default page;

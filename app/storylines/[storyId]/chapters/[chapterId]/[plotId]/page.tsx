"use client";

import Plot from "@/components/plot/Plot";
import { useState } from "react";

export default function CreatePlot({
  params,
}: {
  params: { storyId: number; chapterId: number; plotId: number };
}) {
  return (
    <Plot
      storyId={params.storyId}
      chapterId={params.chapterId}
      mode="edit"
      plotId={params.plotId}
    />
  );
}

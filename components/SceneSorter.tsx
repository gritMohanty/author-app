"use client";
import React, { useRef, useState } from "react";
import { TfiArrowRight, TfiViewList } from "react-icons/tfi";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";

const Indicator = ({ beforeId }) => {
  return (
    <div
      data-before={beforeId}
      data-id="indicator"
      className="w-full h-2 bg-black opacity-0 rounded-md"
    ></div>
  );
};

const SceneSorter = ({ scenes }: { scenes: Scene[] }) => {
  console.log(scenes, "scenes here");
  const [active, setActive] = useState(false);
  const [cards, setCards] = useState([]);
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("cardId", String(id));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setActive(true);
    highlightIndicator(e);
  };

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-id="indicator"]`));
  };

  const highlightIndicator = (e) => {
    const indicators = getIndicators();
    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);
    el.element.style.opacity = "1";
  };

  const clearHighlights = (els) => {
    const indicators = els || getIndicators();

    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  const getNearestIndicator = (e, indicators) => {
    const DISTANCE_OFFSET = 50;
    const el = indicators?.reduce(
      (closest, child) => {
        const box = child?.getBoundingClientRect();
        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return {
            offset: offset,
            element: child,
          };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );
    return el;
  };

  const handleDrop = (e) => {
    const indicators = getIndicators();
    clearHighlights(indicators);
    const cardId = e.dataTransfer.getData("cardId");
    const el = getNearestIndicator(e, indicators);
    const { element } = el;
    const before = element.dataset.before ?? -1;

    if (before != cardId) {
      let newCards = [...cards];
      let cardToTransfer1 = newCards.find((c) => c.id == cardId);
      let cardToTransfer2 = newCards.find((c) => c.id == before);
      let restCards = newCards.filter((c) => c.id != cardId);
      restCards = restCards.filter((c) => c.id != before);
      let insertAtIndex1 = newCards.findIndex((c) => c.id == before);
      let insertAtIndex2 = newCards.findIndex((c) => c.id == cardId);
      restCards.splice(insertAtIndex1, 0, cardToTransfer1!);
      restCards.splice(insertAtIndex2, 0, cardToTransfer2!);
      setCards([...restCards]);
    }

    setActive(false);
  };

  return (
    <div onDragOver={handleDragOver} onDrop={handleDrop}>
      {scenes.map((scene) => (
        <div key={scene?.id}>
          <Indicator beforeId={scene?.id} />
          <div
            key={scene.id}
            className={`flex flex-col items-center justify-center cursor-grab gap-2 w-full ${
              active ? "opacity-20" : "opacity-100"
            }`}
            draggable
            onDragStart={(e) => handleDragStart(e, scene.id)}
          >
            <Card className="w-full">
              <CardHeader>
                <CardDescription className="flex flex-row justify-between">
                  {scene.summary}{" "}
                  <Link href={`/storylines/0/0/0`}>
                    <TfiArrowRight className="cursor-pointer" />
                  </Link>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SceneSorter;

"use client";
import React, { useRef, useState } from "react";
import { TfiViewList } from "react-icons/tfi";

type Scene = {
  id: number;
  name: string;
};

const DUMMY = [
  {
    id: 0,
    name: "Unearthing the Past: Anya and her friends, Kai and Maya, explore the tide pools during a storm, uncovering a strange, glowing stone.",
  },
  {
    id: 1,
    name: "Village Legends: Anya's grandmother recounts stories of the sunken city, its treasures, and the dangers that lurk beneath the waves.",
  },
  {
    id: 2,
    name: "A Cryptic Inscription: The children examine the stone, discovering symbols and markings that seem to hold a deeper meaning.",
  },
];

const Indicator = ({ beforeId }) => {
  return (
    <div
      data-before={beforeId || -1}
      data-id="indicator"
      className="w-full h-2 bg-yellow opacity-0"
    ></div>
  );
};

const SceneSorter = ({ scenes }: { scenes: Scene[] }) => {
  const [cards, setCards] = useState(DUMMY);
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("cardId", String(id));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
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

    if (before !== cardId) {
      let newCards = [...cards];
      let cardToTransfer = newCards.find((c) => c.id === cardId);
      let restCards = newCards.filter((c) => c.id !== cardId);
      let insertAtIndex = newCards.findIndex((c) => c.id === before);
      if (!insertAtIndex) return;
      let modifiedCards = restCards.splice(insertAtIndex, 0, cardToTransfer!);
      console.log(
        modifiedCards,
        cards,
        "cards here",
        cardToTransfer,
        restCards,
        insertAtIndex
      );
      setCards([...modifiedCards]);
    }
  };

  return (
    <div onDragOver={handleDragOver} onDrop={handleDrop}>
      {cards.map((scene) => (
        <>
          <Indicator beforeId={scene?.id} />
          <div
            key={scene.id}
            className="flex flex-row items-center justify-start cursor-grab"
            draggable
            onDragStart={(e) => handleDragStart(e, scene.id)}
          >
            <TfiViewList />
            <div className="border-black border-2 p-4 w-full">{scene.name}</div>
          </div>
        </>
      ))}
      <Indicator beforeId={-1} />
    </div>
  );
};

export default SceneSorter;

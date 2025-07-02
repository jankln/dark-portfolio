import React from "react";
import { useState } from "react";

const slides = [
  { title: "Point 1", description: "Beschreibung 1" },
  { title: "Point 2", description: "Beschreibung 2" },
  { title: "Point 3", description: "Beschreibung 3" },
  { title: "Point 4", description: "Beschreibung 4" },
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + slides.length) % slides.length);
  const next = () =>
    setIndex((index + 1) % slides.length);

  const slide = slides[index];

  return (
    <div className="relative w-full h-48 flex items-center justify-center text-center bg-gray-800 rounded group">
      <div>
        <h3 className="text-xl font-semibold mb-2">{slide.title}</h3>
        <p>{slide.description}</p>
      </div>
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 text-2xl px-3 py-2 bg-gray-700/0 opacity-0 group-hover:opacity-100 hover:bg-gray-700/30 transition rounded"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-2xl px-3 py-2 bg-gray-700/0 opacity-0 group-hover:opacity-100 hover:bg-gray-700/30 transition rounded"
      >
        ›
      </button>
    </div>
  );
}

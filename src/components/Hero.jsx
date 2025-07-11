import React from "react";
import Slider from "./Slider";

export default function Hero() {
  return (
    <section className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="text-center space-y-6">
        <div>
          <h1 className="text-5xl font-bold">Hi, I'm Jane Doe</h1>
          <p className="mt-4 text-lg">Full Stack Developer | React & Node.js Enthusiast</p>
        </div>
        <Slider />
      </div>
    </section>
  );
}
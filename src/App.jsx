import { useState } from "react";
import {
  Hero,
  About,
  Resume,
  Certificates,
  Projects,
  Footer,
  Navbar,
} from "./components";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-gray-900 text-white min-h-screen">
        <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} />
        <Hero />
        <About />
        <Resume />
        <Certificates />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
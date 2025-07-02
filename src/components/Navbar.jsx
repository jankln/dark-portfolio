export default function Navbar({ toggleDarkMode }) {
  return (
    <nav className="flex justify-between p-4 bg-gray-800">
      <h1 className="text-xl font-bold">Portfolio</h1>
      <button onClick={toggleDarkMode} className="bg-gray-700 px-3 py-1 rounded">Toggle Theme</button>
    </nav>
  );
}
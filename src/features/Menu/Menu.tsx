import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="container px-5 flex flex-col items-center">
      <header id="menu" className="py-10">
        <img src="img/speech-bubble.png" alt="Colourful speech bubble" width="128" />
        <h2 className="text-5xl font-bold">DevJam Quiz!</h2>
        <h4 className="text-gray-500">Test your brain!</h4>
      </header>
      <section id="categories">
        <Link to="/quiz" className="px-10 py-5 flex flex-col bg-pink rounded-md border-black border-4">
          <span className="text-2xl font-semibold text-white">
            Play
          </span>
        </Link>
        <Link to="/about" className="p-10 flex flex-col rounded">About</Link>
      </section>
    </div>
  );
}
export default Menu;

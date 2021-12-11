import MenuButtons from "./MenuButtons";
import MenuDifficulty from "./MenuDifficulty";

function Menu() {

  return (
    <div className="container px-5 flex flex-col items-center">
      <header id="menu" className="pb-10">
        <img src="img/speech-bubble.png" alt="Colourful speech bubble" width="128" />
        <h2 className="text-5xl font-bold">DevJam Quiz!</h2>
        <h4 className="text-gray-500">Test your brain!</h4>
      </header>
      <section className="mb-10">
        <MenuDifficulty />
      </section>
      <section>
        <MenuButtons />
      </section>
    </div>
  );
}
export default Menu;

import AppHeader from "../../shared/AppHeader";
import MenuButtons from "./MenuButtons";
import MenuDifficulty from "./MenuDifficulty";
import MenuQuestions from "./MenuQuestions";

function Menu() {

  return (
    <>
      <AppHeader />
      <div className="container px-5 flex flex-col items-center justify-center">
        <header id="menu" className="pb-10">
          <img src="img/speech-bubble.png" alt="Colourful speech bubble" width="128" />
          <h2 className="text-5xl font-bold">DevJam Quiz!</h2>
          <h4 className="text-gray-500">Test your brain!</h4>
        </header>
        <section className="mb-5">
          <MenuDifficulty />
        </section>

        <MenuQuestions />

        <MenuButtons />
      </div>
    </>
  );
}
export default Menu;

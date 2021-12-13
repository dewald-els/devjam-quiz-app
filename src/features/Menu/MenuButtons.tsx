import { Link } from "react-router-dom";

function MenuButtons() {
    return (
        <section className="block w-full text-center">
            <Link to="/quiz" 
                className="mx-auto block px-10 py-5 bg-pink rounded-md border-black border-4 text-white text-xl font-bold w-full md:w-fit">
                    Play
            </Link>
            <Link to="/about" className="p-10 flex flex-col rounded underline">About</Link>
        </section>
    );
}
export default MenuButtons;
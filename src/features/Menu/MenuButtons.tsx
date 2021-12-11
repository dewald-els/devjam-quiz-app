import { Link } from "react-router-dom";

function MenuButtons() {
    return (
        <>
            <Link to="/quiz" className="px-10 py-5 flex flex-col bg-pink rounded-md border-black border-4">
                <span className="text-2xl font-semibold text-white">
                    Play
                </span>
            </Link>
            <Link to="/about" className="p-10 flex flex-col rounded underline">About</Link>
        </>
    );
}
export default MenuButtons;
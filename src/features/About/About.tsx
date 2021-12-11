import { Link } from "react-router-dom";

function About() {
    return (
        <div className="container">
            <header className="mb-5">
                <Link to="/" className="px-5 py-2 bg-pink rounded-md border-black border-2 font-semibold text-white">
                    Back
                </Link>
                <h1 className="text-4xl">About</h1>
            </header>

            <p>Project for DevJam</p>
            <p>API for Questions provided by https://opentdb.com/</p>
            <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
    );
}
export default About;
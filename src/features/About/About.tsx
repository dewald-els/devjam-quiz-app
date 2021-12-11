import { Link } from "react-router-dom";

function About() {
    return (
        <div className="container">
            <header className="mb-5">
                <Link to="/" className="inline-block px-5 py-2 bg-pink rounded-md border-black border-2 font-semibold text-white">
                    Back
                </Link>
                <h1 className="text-4xl">About</h1>
            </header>

            <p>Project for <a className="underline" href="https://devjam.vercel.app/" target="_blank">DevJam</a></p>
            <p>API for Questions provided by <a target="_blank" className="underline" href="https://opentdb.com/">https://opentdb.com/</a></p>
            <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a className="underline" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            <p>Author: Dewald Els</p>
            <p><a className="underline" target="_blank" href="https://github.com/dewald-els/devjam-quiz-app">Github</a></p>
        </div>
    );
}
export default About;
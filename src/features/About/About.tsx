import { Link } from "react-router-dom";
import AppHeader from "../../shared/AppHeader";

function About() {
    return (
        <>
            <AppHeader />
            <div className="container">

                <nav>
                    <Link to="/" className="inline-block px-5 py-2 bg-pink rounded-md border-black border-2 font-semibold text-white">
                        Back
                    </Link>
                </nav>

                <header className="py-5">
                    <figure>
                        <img src="img/idea.png" alt="Lightbulb icon" width="128" />
                    </figure>

                    <h1 className="text-4xl">About</h1>
                    <p className="text-gray-500">Project for <a className="underline" href="https://devjam.vercel.app/" target="_blank">DevJam</a></p>
                </header>



                <section className="py-5">
                    <h4 className="text-xl mb-2">Attribution</h4>
                    <p>API for Questions provided by <a target="_blank" className="underline" href="https://opentdb.com/">https://opentdb.com/</a></p>
                    <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a className="underline" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </section>

                <p className="text-gray-800 font-semibold mb-4">Author: Dewald Els</p>

                <section className="flex flex-wrap">
                    <div className="flex w-fit items-center bg-yellow rounded p-2 text-gray-800 font-semibold mb-4 mr-4">
                        <figure className="mr-2" style={{ minWidth: '32px' }}>
                            <img src="img/github.png" alt="Black Github icon" width="30" />
                        </figure>
                        <a className="underline " target="_blank" href="https://github.com/dewald-els/devjam-quiz-app">Github</a>
                    </div>
                    <div className="flex w-fit items-center bg-yellow rounded p-2 text-gray-800 font-semibold mb-4">
                        <figure className="mr-2" style={{ minWidth: '32px' }}>
                            <img src="img/world-globe.png" alt="Black Github icon" width="30" />
                        </figure>
                        <a className="underline " target="_blank" href="https://dewaldels.com">https://dewaldels.com</a>
                    </div>
                </section>
            </div>
        </>
    );
}
export default About;
import { Link } from "react-router-dom"

function NotFound() {
    return (
        <div className="container text-center">

            <header className="mb-5">
                <h1 className="text-8xl font-bold">404</h1>
                <p className="text-gray-500 text-xl">Looks like you're a little lost!</p>
            </header>

            <figure className="py-3">
                <img className="mx-auto" src="img/question.png" alt="Question icon" width="128" />
            </figure>

            <section className="p-10">
                <Link className="underline bg-pink text-white p-3 border-black border-2 rounded" to="/">Back to the menu</Link>
            </section>
        </div>
    )
}
export default NotFound
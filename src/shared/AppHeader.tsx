function AppHeader() {
  return (
    <header className="bg-yellow py-3 mb-5">
      <div className="container">
        <div className="flex gap-4">
          <div>
            <img
              src="img/speech-bubble.png"
              alt="Colourful speech bubble"
              width="32"
            />
          </div>
          <h1 className="text-2xl font-bold">DevJam Quiz</h1>
        </div>
      </div>
    </header>
  );
}
export default AppHeader;

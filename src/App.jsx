function App() {
  return (
    <div className="outer-wrapper">
      <div className="wrapper">
        <section className="  slide one flex justify-center items-center" id="portada">
          <div className="  flex flex-col justify-center items-center">
            <h1 className=" text-5xl font-bold">My name is José Centeno</h1>
            <h2 className=" text-4xl"><span className=" text-cyan-600 font-bold">I'm:</span> Web Developer & Web Designer</h2>
            <button className=" mt-5 mr-20 self-end inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-800 hover:bg-cyan-600">Contact Me</button>
          </div>
          <img src="./img/myself-removebg-preview.png" alt="" />
        </section>
        <section className="slide two" id="about"></section>
        <section className="slide three" id="speciality"></section>
        <section className="slide four" id="skillsTools"></section>
        <section className="slide five" id="portfolio"></section>
        <section className="slide six" id="contact"></section>
      </div>
    </div>
  );
}

export default App;

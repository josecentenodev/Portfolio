import Card from "./components/Card";

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
        <section className="slide two" id="about">
        <h1 className="text-5xl font-bold my-20 mx-24 px-12">About <span className=" text-cyan-600 font-bold">Me</span></h1>

        <p className="mx-24 py-8 px-12">Hey! my name is José and I am a front-end developer and web designer. I graduated from several courses at Udemy, FreeCodeCamp and EscuelaDevRock in the field of Web Development. At the moment I keep studying and diving deeper into these disciplines.</p>
        <p className="mx-24 py-8 px-12">I believe that the most important thing in life is to find yourself and what you like. I am very glad that I have chosen this path, which is a straight line to success if you put the necessary effort and never give up. This motivates mem and so I move on.</p>
        <div className="flex justify-end">
        <em className="mx-40 mt-12">Working with me: I give my best and also learn and adapt quickly!</em>
        </div>
        </section>
        <section className="slide three" id="speciality"></section>
        <section className="slide four" id="skillsTools"></section>
        <section className="slide five flex justify-around" id="portfolio">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
        <section className="slide six" id="contact"></section>
      </div>
    </div>
  );
}

export default App;

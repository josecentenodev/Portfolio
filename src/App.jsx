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
        <div className="w-4/5 mx-auto">
        <h1 className="text-5xl font-bold my-20 px-12">About <span className=" text-cyan-600 font-bold">Me</span></h1>

        <p className="py-8 px-12">Hey! my name is José and I am a front-end developer and web designer. I graduated from several courses at Udemy, FreeCodeCamp and EscuelaDevRock in the field of Web Development. At the moment I keep studying and diving deeper into these disciplines.</p>
        <p className="py-8 px-12">I believe that the most important thing in life is to find yourself and what you like. I am very glad that I have chosen this path, which is a straight line to success if you put the necessary effort and never give up. This motivates mem and so I move on.</p>
        <div className="flex justify-end">
        <em className="px-12 mt-12">Working with me: I give my best and also learn and adapt quickly!</em>
        </div>
        </div>
        </section>
        <section className="slide three" id="speciality">
        <div className="w-4/5 mx-auto">
        <h1 className="text-5xl font-bold my-20 px-12">Speciality</h1>
        <div className="flex w-full justify-around text-center">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold my-5"><span className=" text-cyan-600 font-bold">Frontend</span> Developer</h2>
            <p className="p-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold my-5"><span className=" text-cyan-600 font-bold">Backend</span> Developer</h2>
            <p className="p-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold my-5"><span className=" text-cyan-600 font-bold">UX/UI</span> Designer</h2>
            <p className="p-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
        </div>
        </section>
        <section className="slide four" id="skillsTools">
        <div className="w-4/5 mx-auto">
          <h1 className="text-5xl font-bold my-20 px-12">Skills & Tools</h1>
            <div className="grid grid-cols-6 gap-6 my-24">
              <img src="./img/html.png" alt="Logo HTML" className=" w-20"/>
              <img src="./img/css.png" alt="Logo CSS" className=" w-20"/>
              <img src="./img/Tailwind_CSS_Logo.svg.png" alt="Logo TAILWIND" className=" w-20"/>
              <img src="./img/javascript.png" alt="Logo JS" className=" w-20"/>
              <img src="./img/pngfind.com-sass-logo-png-4521456.png" alt="Logo SASS" className=" w-20"/>
              <img src="./img/mysql.png" alt="Logo MySQL" className=" w-20"/>
              <img src="./img/pngwing.com.png" alt="Logo NPM" className=" w-20"/>
              <img src="./img/logo.png" alt="Logo MUI" className=" w-20"/>
              <img src="./img/XD.png.img.png" alt="Logo XD" className=" w-20"/>
              <img src="./img/800px-Figma-logo.svg.png" alt="Logo FIGMA" className=" w-16"/>
              <img src="./img/firebase.png" alt="Logo FIREBASE" className=" w-20"/>
              <img src="./img/react.png" alt="Logo React" className=" w-20"/>
            </div>
          </div>
        </section>
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

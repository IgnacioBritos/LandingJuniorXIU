import LogoLarge from "../logo/LogoLarge";
import Footer from "../foter/Foter";
const codeString = `> npm i junior-xui `;

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center pt-12">
      <div className="flex flex-col items-center justify-center p-12">
        <LogoLarge />
        <pre className="mt-12 bg-gray-400/50 p-2 rounded-lg overflow-x-auto">
          <code className="text-sm">{codeString}</code>
        </pre>
      </div>
      <div className="flex flex-col items-end justify-end  max-w-[700px] text-lg">
        <h3 className="mb-4">
          <span className="text-[#7C3AED]">Desarrolla proyectos</span> web con
          un toque de genialidad junior, sin importar tu experiencia en diseño.
          Junior-<span className="text-[#7C3AED]">XUI</span> te brinda una
          biblioteca React UI <span className="text-[#7C3AED]">hermosas</span>,{" "}
          <span className="text-[#7C3AED]">ágil</span> y{" "}
          <span className="text-[#7C3AED]">contemporánea</span> para que tus
          creaciones destaquen.
        </h3>
        <a
          href="#"
          className="text-sm px-4 py-1 rounded-lg text-[#7C3AED] hover:bg-[#7c3aed25] underline"
        >
          Get Started
        </a>
      </div>
      <div className=" pt-32">
    <Footer/>

      </div>
    </main>
  );
};

export default Home;

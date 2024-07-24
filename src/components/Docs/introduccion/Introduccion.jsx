import LogoLarge from "../../logo/LogoLarge";
import Footer from "../../foter/Foter";
const Introducción = () => {
  const codeInstalación = ` > npm i junior-xui `;
  const codeStringGuia = ` import React from 'react';
  import { Button } from 'junior-xui';

  function App() {
    return (
      <div>
        <Button>Click me</Button>
      </div>
    );
  }

export default App; `;
  return (
    <section className="flex flex-col items-center w-full custom-scroll">
      <div className="flex flex-col w-full">
        <h2 className="text-4xl text-violet-600 font-semibold">Instalación</h2>
        <p className="pl-2 text-sm">
          Cómo instalar Junior-<span className="text-violet-600">XUI</span>
        </p>
        <div className="flex items-center justify-center w-full">
          <div className="m-2 p-8">
            <LogoLarge />
          </div>
        </div>

        <h2 className="text-4xl text-violet-600 font-semibold" id="guia">
          Guía
        </h2>

        <div className="flex flex-col gap-4 pb-6">
          <h3 className="text-xl font-semibold">
            ¿Qué es Junior-<span className="text-violet-600">XUI</span>?
          </h3>
          <p className="pl-2">
            Junior-XUI es una biblioteca de{" "}
            <span className="text-sky-500">UI</span> para React que te ayuda a
            construir interfaces de usuario{" "}
            <span className="text-sky-500">Hermosa y accesible</span>. Creada
            sobre la base de Tailwind CSS y React Aria.
          </p>
          <p className="pl-2">
            El objetivo principal de Junior-XUI es{" "}
            <span className="text-sky-500">
              agilizar el proceso de desarrollo
            </span>
            , ofreciendo un diseño de sistema hermoso y adaptable para una
            experiencia de usuario mejorada.
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-violet-500">Instalación</h3>
          <p className="pl-2">
            Junior-XUI está disponible como paquete en{" "}
            <span className="text-sky-500">NPM</span> para su uso:
          </p>
          <pre className="mt-2 bg-gray-400/50 p-2 rounded-lg overflow-x-auto">
            <code className="text-sm">{codeInstalación}</code>
          </pre>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-violet-500">Uso</h3>
          <p className="pl-2">
            Luego, solo hace falta llamar al componente que desees usar y
            agregarlo a tu código:
          </p>
          <pre className="mt-2 bg-gray-400/50 p-2 rounded-lg overflow-x-auto">
            <code className="text-sm">{codeStringGuia}</code>
          </pre>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Introducción;

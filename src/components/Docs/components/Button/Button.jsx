import React, { useState } from "react";
import { Button } from "junior-xui";
import ButtonStyles from "./ButtonStyles";
import ButtonSize from "./ButtonSize";
import ButtonRadius from "./ButtonRadius";
import Footer from "../../../foter/Foter";
const ButtonComponents = () => {
  const codeImport = `import { Button } from 'junior-xui';`;

  return (
    <section className="flex flex-col items-center w-full custom-scroll  min-h-screen">
      <div className="flex flex-col w-full">
        <h2 className="text-4xl text-violet-600 font-semibold ">Button</h2>
        <p className="pl-2 text-sm">
          Los botones permiten a los usuarios realizar <span className="text-sky-500">acciones</span> con <span className="text-sky-500">un solo
          toque.</span> 
        </p>
        <h2 className="text-2xl text-violet-600 font-semibold pt-4">
          Implementación
        </h2>

        <div className="flex flex-col gap-4 pb-6">
          <pre className="mt-2 bg-gray-400/50 p-2 rounded-lg overflow-x-auto">
            <code className="text-sm">{codeImport}</code>
          </pre>
        </div>
        <h3>El Button ya tiene un estilo definido por <span className="text-sky-500">defecto</span>:  </h3>
        <div className="p-4">
          <Button>Button</Button>
        </div>
        <p>Pero también variaciones de <span className="text-sky-500">colores</span> y de  <span className="text-sky-500">tipos</span>:</p>
        <ButtonStyles />
        <p>Variaciones de <span className="text-sky-500">tamaños</span>:</p>
        <ButtonSize />
        <p>Variaciones de  <span className="text-sky-500">radio</span>:</p>
        <ButtonRadius/>
      </div>
      <Footer/>
    </section>
  );
};

export default ButtonComponents;

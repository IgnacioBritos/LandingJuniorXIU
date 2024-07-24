import CardStyles from "./CardStyle";
import Footer from "../../../foter/Foter";

const CardComponents = () => {
  const codeImport = `import { Card } from "junior-xui";`;

  return (
    <section className="flex flex-col items-center w-full custom-scroll">
      <div className="flex flex-col w-full">
        <h2 className="text-4xl text-violet-600 font-semibold ">Card</h2>
        <p className="pl-2 text-sm">
        Las tarjetas permiten mostrar <span className="text-sky-500">contenido y precio sobre un solo tema</span>.
        </p>
        <h2 className="text-2xl text-violet-600 font-semibold pt-4">
          Implementación
        </h2>

        <div className="flex flex-col gap-4 pb-6">
          <pre className="mt-2 bg-gray-400/50 p-2 rounded-lg overflow-x-auto">
            <code className="text-sm">{codeImport}</code>
          </pre>
        </div>
        <h3>El Card puede cambiar tanto de <span className="text-sky-500">tipos</span> como de <span className="text-sky-500">colores</span>, ademas de actualizar su <span className="text-sky-500">precio</span>:</h3>
        <CardStyles/>
      
      </div>
    
    </section>
  );
};




export default CardComponents;

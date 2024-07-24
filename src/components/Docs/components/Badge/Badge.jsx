import BadgeStyles from "./BadgerStyle";
import Footer from "../../../foter/Foter";
const BadgeComponent = () => {
    const codeImport = `import { Badge } from 'junior-xui';`;
  
    return (
      <section className="flex flex-col items-center w-full custom-scroll">
        <div className="flex flex-col w-full">
          <h2 className="text-4xl text-violet-600 font-semibold ">Badge</h2>
          <p className="pt-2 text-sm">
          Un "Badge" es un pequeño componente visual que se utiliza para <span className="text-sky-500">mostrar una cantidad o un estado</span>, generalmente como una notificación o una etiqueta de estado
          </p>
          <h2 className="text-2xl text-violet-600 font-semibold pt-4">
            Implementación
          </h2>
  
          <div className="flex flex-col gap-4 pb-6">
            <pre className="mt-2 bg-gray-400/50 p-2 rounded-lg overflow-x-auto">
              <code className="text-sm">{codeImport}</code>
            </pre>
          </div>
          <h3>El Badge puede cambiar tanto de  <span className="text-sky-500">tamaños</span> como de <span className="text-sky-500">colores</span>, ademas de actualizar su <span className="text-sky-500">contador de estado</span>:</h3>
          <div>
            <BadgeStyles/>
          </div>
        
        </div>
        
      </section>
    );
  };
  
  export default BadgeComponent;
import { Input } from "junior-xui";
import InputStyles from "./InputStyles";

const InputComponents = () => {
  const codeImport = `import { Input } from 'junior-xui';`;
  return (
  <div className=" max-h-screen ">
    <section className="flex flex-col flex-1  items-center w-full custom-scroll">
      <div className="flex flex-col w-full flex-1">
        <h2 className="text-4xl text-violet-600 font-semibold ">Input</h2>
        <p className="pl-2 text-sm">
        Los inputs permiten a los usuarios <span className="text-sky-500">ingresar y modificar datos</span>.
        </p>
        <h2 className="text-2xl text-violet-600 font-semibold pt-4">
          Implementación
        </h2>

        <div className="flex flex-col gap-4 pb-6">
          <pre className="mt-2 bg-gray-400/50 p-2 rounded-lg overflow-x-auto">
            <code className="text-sm">{codeImport}</code>
          </pre>
        </div>
        <h3>El Input puede cambiar tanto de <span className="text-sky-500">tipos</span> como de <span className="text-sky-500">colores</span>:</h3>
        <InputStyles/>
    
      </div>
      
    </section>


  </div>
  );
};
export default InputComponents;

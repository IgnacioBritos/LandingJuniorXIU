import React, { useState } from 'react';
import { Input } from 'junior-xui';

const   InputStyles = () => {
  const [code, setCode] = useState(true);
  const codetypeButton = `      <div>
            <Input type="text" colors="tertiary" placeholder="Input" theme="black"/>
            <Input type="password" colors="secondary" placeholder="Input" theme="black"/>
            <Input type="email" colors="primary" placeholder="Input" theme="white"/>
       </div>`;

  return (
    <div className='pb-3'>
      <div className="flex flex-row">
      <button
          className=" ml-auto hover:text-sky-500"
          onClick={() => {
            setCode(!code);
          }}
        >
          {code ? "componente" : "code"}
        </button>
      </div>
      <div>
        {!code ? (
          <div>
            <pre className="mt-2 bg-gray-400/50 p-2 rounded-lg overflow-y-auto">
              <code className="text-sm">{codetypeButton}</code>
            </pre>
          </div>
        ) : (
          <div className="flex flex-col p-4 gap-8">
            <div className=" flex flex-row gap-4">
            <Input type="text" colors="tertiary" size="sm" placeholder="Input" theme="black"/>
            <Input type="password" colors="secondary" size="md" placeholder="Input" theme="black"/>
            <Input type="email" colors="primary" size="lg" placeholder="Input" theme="white"/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputStyles;

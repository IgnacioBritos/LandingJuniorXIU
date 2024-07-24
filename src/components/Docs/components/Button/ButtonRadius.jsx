import React, { useState } from 'react';
import { Button } from "junior-xui";

const   ButtonRadius = () => {
  const [code, setCode] = useState(true);
  const codetypeButton = `      <div>
              <Button type="primary-green rd-none ">Button</Button>
              <Button type="primary-green rd-small ">Button</Button>
              <Button type="primary-green rd-medium ">Button</Button>
              <Button type="primary-green rd-large">Button</Button>
              <Button type="primary-green rd-full">Button</Button>
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
            <div className="">
              <Button type="primary-green rd-none mx-2 ">Button</Button>
              <Button type="primary-green rd-small  mx-2">Button</Button>
              <Button type="primary-green rd-medium mx-2">Button</Button>
              <Button type="primary-green rd-large mx-2">Button</Button>
              <Button type="primary-green rd-full mx-2">Button</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ButtonRadius;

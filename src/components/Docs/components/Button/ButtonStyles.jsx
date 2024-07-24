import React, { useState } from 'react';
import { Button } from "junior-xui";

const ButtonStyles = () => {
  const [code, setCode] = useState(true);
  const codetypeButton = `
    <div>
      <Button type="primary-dark">Button</Button>
      <Button type="secondary-dark">Button</Button>
      <Button type="tertiary-dark">Button</Button>
    </div>
    <div>
      <Button type="primary-light">Button</Button>
      <Button type="secondary-light">Button</Button>
      <Button type="tertiary-light">Button</Button>
    </div>
    <div>
      <Button type="primary-red">Button</Button>
      <Button type="secondary-red">Button</Button>
      <Button type="tertiary-red">Button</Button>
    </div>
    <div>
      <Button type="primary-blue">Button</Button>
      <Button type="secondary-blue">Button</Button>
      <Button type="tertiary-blue">Button</Button>
    </div>
    <div>
      <Button type="primary-green">Button</Button>
      <Button type="secondary-green">Button</Button>
      <Button type="tertiary-green">Button</Button>
    </div>`;

  return (
    <div className='pb-3'>
      <div className="flex flex-row gap-3">
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
            <div className="flex flex-row gap-5">
              <Button type="primary-dark">Button</Button>
              <Button type="secondary-dark">Button</Button>
              <Button type="tertiary-dark">Button</Button>
            </div>
            <div className="flex flex-row gap-5">
              <Button type="primary-light">Button</Button>
              <Button type="secondary-light">Button</Button>
              <Button type="tertiary-light">Button</Button>
            </div>
            <div className="flex flex-row gap-5">
              <Button type="primary-red">Button</Button>
              <Button type="secondary-red">Button</Button>
              <Button type="tertiary-red">Button</Button>
            </div>
            <div className="flex flex-row gap-5">
              <Button type="primary-blue">Button</Button>
              <Button type="secondary-blue">Button</Button>
              <Button type="tertiary-blue">Button</Button>
            </div>
            <div className="flex flex-row gap-5">
              <Button type="primary-green">Button</Button>
              <Button type="secondary-green">Button</Button>
              <Button type="tertiary-green">Button</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ButtonStyles;

import React, { useState } from "react";
import { Card } from "junior-xui";

const CardStyles = () => {
  const [code, setCode] = useState(true);
  const codetypeButton = `      <div>
            <Card title="Blue" price="3.99" type="dark" size="small" src="...." />
            <Card title="Blue" price="3.99" type="dark" size="small" src="...." />           
            <Card title="Blue" price="3.99" type="dark" size="small" src="...." /> 
       </div>`;

  return (
    <div className="pb-3">
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
          <div className="flex flex-row p-4 gap-8">
            <div>
              <Card
                title="Blue"
                price="3.99"
                type="dark"
                size="small"
                src="https://m.media-amazon.com/images/I/51jk5Ao6NIL._AC_UF1000,1000_QL80_.jpg"
              />
            </div>
            <div>
              <Card
                title="Blue"
                price="3.99"
                type="light"
                size="medium"
                src="https://m.media-amazon.com/images/I/51jk5Ao6NIL._AC_UF1000,1000_QL80_.jpg"
              />
            </div>
            <div>
              <Card
                title="Blue"
                price="3.99"
                type="dark"
                size="large"
                src="https://m.media-amazon.com/images/I/51jk5Ao6NIL._AC_UF1000,1000_QL80_.jpg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardStyles;

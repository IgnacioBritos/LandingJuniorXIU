import React, { useState } from "react";
import { Badge } from "junior-xui";

const BadgeStyles = () => {
  const [code, setCode] = useState(true);
  const codetypeButton = `
    <div>
              <Badge
                color="blue"
                style={"size-20"}
                placement="top-left"
                size="large"
                content="2"
                src="..."
                name="..."
              />
              <Badge
                color="danger"
                style={"size-20"}
                placement="top-left"
                size="large"
                content="4"
                src="..."
                name="..."
              />
              <Badge
                color="green"
                style={"size-20"}
                placement="bottom-right"
                size="large"
                content="100"
                src="..."
                name="..."
              />
            </div>

            
            <div>
              <Badge
                color="blue"
                style={"size-16"}
                placement="top-left"
                size="large"
                content="8"
                src="..."
                name="..."
              />
              <Badge
                color="danger"
                style={"size-20"}
                placement="top-right"
                size="large"
                content="5"
                src="..."
                name="...""
              />
              <Badge
                color="green"
                style={"size-24"}
                placement="bottom-left"
                size="large"
                name="..."
              />
    </div>`;

  return (
    <div className="pb-3">
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
          <div>
            <div className="flex flex-row p-4 gap-8">
              <Badge
                color="blue"
                style={"size-20"}
                placement="top-left"
                size="large"
                content="2"
                src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                name="hola"
              />
              <Badge
                color="danger"
                style={"size-20"}
                placement="top-left"
                size="large"
                content="4"
                src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                name="hola"
              />
              <Badge
                color="green"
                style={"size-20"}
                placement="bottom-right"
                size="large"
                content="100"
                src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                name="hola"
              />
            </div>
            <div className="flex flex-row p-4 gap-8">
              <Badge
                color="blue"
                style={"size-16"}
                placement="top-left"
                size="large"
                content="8"
                src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                name="hola"
              />
              <Badge
                color="danger"
                style={"size-20"}
                placement="top-right"
                size="large"
                content="5"
                src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                name="hola"
              />
              <Badge
                color="green"
                style={"size-24"}
                placement="bottom-left"
                size="large"
                name="Avatar"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BadgeStyles;

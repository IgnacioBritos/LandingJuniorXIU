import AsideNav from "./AsideNav/AsideNav";
import Introducción from "./introduccion/Introduccion";
import ButtonComponents from "./components/Button/Button";
import BadgeComponent from "./components/Badge/Badge";
import { Routes, Route, Navigate } from "react-router-dom";
import InputComponents from "./components/Input/input";
import CardComponents from "./components/Card/Card";

const Docs = () => {
  return (
    <div className="flex h-screen pt-12">
      <aside className="w-[150px] pl-10 p-4 overflow-auto">
        <AsideNav />
      </aside>
      <main className="flex flex-1 flex-col mx-8 px-4 my-4 overflow-auto">
        <Routes>
          <Route path="/" element={<Navigate to="Introducción" replace />} />
          <Route path="Introducción" element={<Introducción />} />
          <Route path="Button" element={<ButtonComponents />} />
          <Route path="Badge" element={<BadgeComponent />} />
          <Route path="Input" element={<InputComponents />} />
          <Route path="Card" element={<CardComponents  />} />
        </Routes>
      </main>
    </div>
  );
};

export default Docs;

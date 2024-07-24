import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Docs from "./components/Docs/Docs"
import { useTheme } from "./components/store/store";
function App() {
  const { theme } = useTheme();
  

   
  return (
  <div className={`  min-h-screen bg-fixed top-0 left-0 z-[-2]   ${ theme === true ? 'bg-bg-light lights' :  'bg-bg-dark  bg-[#040a11] darks'}`}>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs/*" element={<Docs/>}/>
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import { Header } from "./componentes/Header";
import { Route, Routes } from "react-router-dom";
import { PaginaPrincipal } from "./views/PaginaPrincipal";
import { PaginaDetalle } from "./views/PaginaDetalle";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="PaginaDetalle/:pais" element={<PaginaDetalle />} />
        <Route path="*" element={"pagina no encontrada"} />
      </Routes>
      <footer className="flex justify-center text-xs p-10 bg-[--white] dark:bg-[--dark-blue] dark:text-white">
        Desarrollado por: Lisuben15
      </footer>
    </>
  );
}

export default App;

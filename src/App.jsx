import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetail />} />
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greetings="Bienvenido a Ritmil Vision estimado usuario" />
    </>
  );
}

export default App;

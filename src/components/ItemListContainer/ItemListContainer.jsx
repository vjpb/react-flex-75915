import "./ItemListContainer.css";
function ItemListContainer({ greetings }) {
  return (
    <>
      <h1 className="item-greetings">{greetings}</h1>
    </>
  );
}
export default ItemListContainer;

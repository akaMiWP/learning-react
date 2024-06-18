import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  const items = ["item1", "item2", "item3", "item4", "item5"];
  const handleSelectItem = (item: String) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading={"List"}
        onSelectItem={handleSelectItem}
      />
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  );
}

export default App;

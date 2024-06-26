import ListGroup from "./components/ListGroup/";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import Like from "./components/Like/Like";
import { GiRobotAntennas } from "react-icons/gi";

import { useState } from "react";

function App() {
  const items = ["item1", "item2", "item3", "item4", "item5"];
  const handleSelectItem = (item: String) => {
    console.log(item);
  };
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading={"List"}
        onSelectItem={handleSelectItem}
      />
      {showAlert && (
        <Alert onClick={() => setShowAlert(false)}>
          Hello <span>World</span>
        </Alert>
      )}
      <Button children={"Show Alert"} onClick={() => setShowAlert(true)} />
      <GiRobotAntennas color="blue" />
      <Like />
    </div>
  );
}

export default App;

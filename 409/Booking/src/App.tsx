import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";

function App() {
  const [alertVisibile, setAlertVisibility] = useState(false);
  const [SelectetFrute, setFrute] = useState("");
  const handleSelectItem = (item: string) => {
    setFrute(item);
    setAlertVisibility(true);
  };
  const handlePageSelect = (item: string) => {
    console.log(item);
  };

  return (
    <div className="app">
      <Navbar
        onSelectPage={handlePageSelect}
        items={["Home", "Info", "Book"]}
        imageSrc="/src/assets/react.svg"
      ></Navbar>
    </div>
  );
}
export default App;
/*
 {alertVisibile && (
        <Alert onClose={() => setAlertVisibility(false)}>{SelectetFrute}</Alert>
      )}
      <ListGroup
        Heading="Wähle Frucht"
        items={["Apfel", "Brinen", "Banane", "Gurke"]}
        onSelectItem={handleSelectItem}
      ></ListGroup>
*/

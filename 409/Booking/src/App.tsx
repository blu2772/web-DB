import { useState } from "react";
import Navbar from "./components/Navbar";
import Calendar from "./components/Calender";
import Split from "./components/Split";
import Menu from "./components/Menu";
import Spacer from "./components/Spacer";

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
        imageSrc="/src/assets/PTLogo.png"
      ></Navbar>
      <div className="container">
        <Split
          Heading="Info"
          imagepath="/src/assets/Penthause2.png"
          content={
            <Menu onSelectMenu={handlePageSelect} items={["test"]}></Menu>
          }
          orientation="L"
        ></Split>
        <Spacer>100</Spacer>
        <Split
          Heading="Verfügbarkeit prüfen."
          imagepath="/src/assets/Penthause1.png"
          content={<Calendar initialDate={new Date()}></Calendar>}
          orientation="R"
          Headingorient="L"
        ></Split>
      </div>
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

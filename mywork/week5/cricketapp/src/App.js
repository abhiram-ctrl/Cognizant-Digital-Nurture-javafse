import ListOfPlayers from "./Components/ListOfPlayers";
import IndianPlayers from "./Components/IndianPlayers";

function App() {

  const flag = false;

  if (flag) {
    return (
      <div style={{ padding: "20px" }}>
        <ListOfPlayers />
      </div>
    );
  } else {
    return (
      <div style={{ padding: "20px" }}>
        <IndianPlayers />
      </div>
    );
  }

}

export default App;
import "./App.css";
import CohortDetails from "./Components/CohortDetails";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>My Academy Dashboard</h1>

      <CohortDetails
        title="Java Full Stack"
        coach="John"
        status="ongoing"
        duration="8 Weeks"
      />

      <CohortDetails
        title="React Development"
        coach="David"
        status="completed"
        duration="6 Weeks"
      />

      <CohortDetails
        title="Spring Boot"
        coach="Robert"
        status="ongoing"
        duration="10 Weeks"
      />
    </div>
  );
}

export default App;
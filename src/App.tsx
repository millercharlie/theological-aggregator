import Dashboard from "@pages/Dashboard";
import "./App.css";
import { loggedOutDashboardData } from "@database/mockData";

function App() {
  return (
    <div>
      <Dashboard data={loggedOutDashboardData} />
    </div>
  );
}

export default App;

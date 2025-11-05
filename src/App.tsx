import Dashboard from "@pages/Dashboard";
import "./App.css";
import { loggedOutDashboardData } from "@database/mockData";
import { ThemeContext, ModalContext } from "@libs/Context";

function App() {
  return <Dashboard data={loggedOutDashboardData} />;
}

export default App;

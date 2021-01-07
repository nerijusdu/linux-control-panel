import { Route } from "react-router-dom";
import BasicLayout from "./components/BasicLayout";
import ServiceManagement from "./components/ServiceManagement/ServiceManagement";

function App() {
  return (
    <div className="App">
      <BasicLayout>
        <Route path="/services">
          <ServiceManagement />
        </Route>
      </BasicLayout>
    </div>
  );
}

export default App;

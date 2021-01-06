import BasicLayout from "./components/BasicLayout";
import ServiceManagement from "./components/ServiceManagement/ServiceManagement";

function App() {
  return (
    <div className="App">
      <BasicLayout>
        <ServiceManagement />
      </BasicLayout>
    </div>
  );
}

export default App;

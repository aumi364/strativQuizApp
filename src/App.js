import AppRouter from "Route/AppRouter";
import { AuthProvider } from "Context/AuthContext";
import { ServiceProvider } from "Context/ServiceContext";
import { HashRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router basename="/">
        <AuthProvider>
          <ServiceProvider>
            <AppRouter />
          </ServiceProvider>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

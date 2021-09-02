import AppRouter from "Route/AppRouter";
import { AuthProvider } from "Context/AuthContext";
import { ServiceProvider } from "Context/ServiceContext";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
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

import AppRouter from "Route/AppRouter";
import "./App.css";
import { AuthProvider } from "Context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

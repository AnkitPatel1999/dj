import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

// import Home from "./components/Home";
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Home />
//     </div>
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}


export default App;

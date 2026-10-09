import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { HelmetProvider } from "react-helmet-async";


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
    <HelmetProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
}


export default App;

import "./App.css"
import Calculator from "./components/Calculator";
function App() {
  return (
    <div className="mainContainer">
      
    {/* div containing page heading */}
    <div className="heading">
      <h1>Calculator</h1>
    </div>

    {/* render the calculator */}
    <Calculator />    
  </div>

  );
}

export default App;


import './App.css';
import Forecast from "./components/Forecast";

function App() {
 return (
   <div className="App">
     <header className="App-header">
       <h1>React Weather App</h1>
     </header>
     <main>
       <Forecast />
     </main>
     <footer>
       Created by Sayuru De Alwis. ☢️
     </footer>
   </div>
 );
}

export default App;
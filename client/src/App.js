import './App.css';
import {Routes,Route} from "react-router-dom";
import Entryscreen from './screens/Entryscreen';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Entryscreen/>} />

      </Routes>
    </div>
  );
}

export default App;

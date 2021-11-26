import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './components/Header'
import About from './components/About'
import MyContainer from './components/MyContainer'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Header /> <MyContainer /></>}></Route>
          <Route path="/About" element={<><Header /><About /></>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './pages/Home';
import  Menu from './pages/Menu';
import About from './pages/About'
import Contact from './pages/Contact'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
       <Navbar />
       <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/menu" exact component={Menu} />
         <Route path="/about" exact component={About} />
         <Route path="/contact" exact component={Contact} />
       </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

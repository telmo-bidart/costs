import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Company from './Components/Company';
import Contact from './Components/Contact';
import Home from './Components/Home';
import NewProject from './Components/NewProject';

function App() {
  return (
  <Router>
   <div>
     <Link to ='/'>Home</Link>
     <Link to ='/contact'>Contact</Link>
     <Link to ='/company'>Company</Link>
     <Link to ='/newproject'>NewProject</Link>
   </div>
   <div></div>
    <Routes>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/company'>
        <Company />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>
      <Route path='/newproject'>
        <NewProject />
      </Route>
    </Routes>
  </Router>
  );
}

export default App;

import {BrowserRouter , Routes, Route, Link} from 'react-router-dom'
import Company from './Components/Company';
import Contact from './Components/Contact';
import Home from './Components/Home';
import NewProject from './Components/NewProject';
import { render } from 'react-dom'

function App() {

render(
    <BrowserRouter>
      <ul>
        <li>Home</li>
        <li>Contact</li>
      </ul>
      <Routes>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/company'><Company /></Route>
        <Route exact path='/contact'><Contact /></Route>
        <Route exact path='/newproject'><NewProject /></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

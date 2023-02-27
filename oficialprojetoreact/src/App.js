import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contato from './Page/Contato';
import NewProject from './Page/NewProject';
import Company from './Page/Company';
import Home from './Page/Home';
import Container from './Layouts/Container';
import Projects from './Page/Projects';

import Navbar from './Layouts/Navbar'
import Footer from './Layouts/Footer'

function App() {
  return (
    <Router>
      <Navbar/>      
      <Container customClass= 'min-height'>
        <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contato' element={<Contato/>}/>
        <Route path='/company' element={<Company/>}/>
        <Route path='/newproject' element={<NewProject/>}/>
        </Routes>
      </Container>          
      <Footer/>
    </Router>
  );
}

export default App;

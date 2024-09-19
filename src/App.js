import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detailslist from './Pages/Detailslist';
function App() {
  return (
  <Router>
  <Routes>
   <Route path='/' element={<Detailslist/>}/>
  </Routes>
  </Router>
  );
}

export default App;

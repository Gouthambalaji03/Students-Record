import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import Update from './Update';

function App() {
  return (
   <Router>
     <Routes>
       <Route path='/' element={<Home />}> </Route>
       <Route path='/create' element={<Create />}> </Route>
       <Route path='/update/:id' element={<Update />}> </Route>
     </Routes>
   </Router>
  );
}



export default App;

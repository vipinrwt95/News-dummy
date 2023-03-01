import React from 'react';
import Navigation from './components/Navbar'
import Brand from './components/BrandHeader'
import News from './components/News';

function App() {
  return (
    <div>
     <Brand /> 
     <Navigation />
     <News />
    </div>
  );
}

export default App;

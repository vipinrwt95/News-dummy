import React from 'react';
import Navigation from './components/Navbar'
import Brand from './components/BrandHeader'
import News from './components/News';
import Current from './components/Current';


function App() {
  return (
    <div>
     <Brand /> 
     <Navigation />
     <News />
     <Current />
    </div>
  );
}

export default App;

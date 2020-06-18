import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Box1 from './components/box1';
import Box2 from './components/box2';
import Box3 from './components/box3';
import Box4 from './components/box4';
import Box5 from './components/box5';
import Box6 from './components/box6';
import Box7 from './components/box7';



function App() {
  return (
    <div>
     

      <Switch>
        
        <Route exact path="/box2" component={Box2} />
        <Route exact path="/box3" component={Box3} />
        <Route exact path="/box4" component={Box4} />
        <Route exact path="/box5" component={Box5} />
        <Route exact path="/box6" component={Box6} />
        <Route exact path="/box7" component={Box7} />

      </Switch>
     
    </div>
  
  );
}

export default App;

/* <Box1 />
      <Box2 />
      <Box3 />
      <Box4 />
      <Box5 />
      <Box6 />
      <Box7 />*/
      
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListExcerciseComponent from './components/ListExcerciseComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateExcerciseComponent from './components/CreateExcerciseComponent';
import ViewExcerciseComponent from './components/ViewExcerciseComponent';
import WelcomeComponent from './components/Welcome';
import UpdateExcerciseComponent from './components/UpdateExcerciseComponent';
import AboutMe from './components/AboutMe';
import UpdateNutritionComponent from './components/UpdateNutritionComponent';
import CreateNutritionComponent from './components/CreateNutritionComponent';
import ListNutritionComponent from './components/ListNutritionComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {WelcomeComponent}></Route>
                          <Route path = "/excercises" component = {ListExcerciseComponent}></Route>
                          <Route path = "/add-excercise/:id" component = {CreateExcerciseComponent}></Route>
                          <Route path = "/view-excercise/:id" component = {ViewExcerciseComponent}></Route>
                          <Route path = "/update-excercise/:id" component = {UpdateExcerciseComponent}></Route>
                          <Route path = "/update-nutrition/:id" component = {UpdateNutritionComponent}></Route>
                          <Route path = "/add-nutrition/:id" component = {CreateNutritionComponent}></Route>
                          <Route path = "/nutrition" component = {ListNutritionComponent}></Route>
                          <Route path = "/about-me" component = {AboutMe}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;

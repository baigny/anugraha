import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Courses from './components/Courses.jsx';
import Gallery from './components/Gallery.jsx';
import News from './components/News.jsx';
import Events from './components/Blog.jsx';
import Contact from './components/Contact.jsx';

import PrimaryNavbar from './components/common/PrimaryNavbar.jsx';
import FooterNavbar from './components/common/FooterNavbar.jsx';

class App extends Component {
  render() {
    return (

      <div>
        
        <Router>
          <div>
            <PrimaryNavbar/>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/courses" component={Courses}/>
            <Route path="/gallery" component={Gallery}/>
            <Route path="/news" component={News}/>
            <Route path="/events" component={Events}/>
            <Route path="/contact" component={Contact}/>
            <FooterNavbar/>
          </div>
        </Router>
        
      </div>

    );
  }
}

export default App;

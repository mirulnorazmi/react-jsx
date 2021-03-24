import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';

const Home = React.lazy(() => import('./components/pages/Home'));
const Services = React.lazy(() => import('./components/pages/Services'));
const Products = React.lazy(() => import('./components/pages/Products'));
const SignUp = React.lazy(() => import('./components/pages/SignUp'));

function App() {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
        <Footer/>
      </Router>
      </Suspense>
    </>
  );
}

export default App;
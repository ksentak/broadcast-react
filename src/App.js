import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Pages
import Home from './pages/Home';
// import About from './pages/About';
import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';
import Error from './pages/Error';
// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Samples
import SampleComponent1 from './components/newSamplesPages/SampleComponent1';
import SampleComponent2 from './components/newSamplesPages/SampleComponent2';
// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/samples-org' component={Portfolio} />
				<Route exact path='/samples-1' component={SampleComponent1} />
				<Route exact path='/samples-2' component={SampleComponent2} />
				<Route component={Error} />
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory,IndexRoute,browserHistory} from 'react-router'; //导入路由

import './index.css';
import App from './App';
import Login from './pages/Login';
import Search from './pages/Search';
import Mine from './pages/Mine';
import Position from './pages/Position';
import Register from './pages/Register';
import RegBasic from './pages/RegBasic';
import RegTouch from './pages/RegTouch';
import Offer from './pages/Offer';
import Jobs from './pages/Jobs';
import Interview from './pages/Interview';
import Deliverlist from './pages/Deliverlist';
import Invitation from './pages/Invitation';
import Collectlist from './pages/Collectlist';
import DeliverAll from './pages/DeliverAll';
import DeliverInvite from './pages/DeliverInvite';
import DeliverNot from './pages/DeliverNot';
import InterviewDid from './pages/InterviewDid';
import InterviewGoing from './pages/InterviewGoing';
import Editor from './pages/Editor';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
     <Router history={browserHistory}>
		  <Route path="/" component={App}>  
		  	 <IndexRoute  component={Position} />
		  	 <Route path='search' component={Search}></Route>
		  	 <Route path='mine' component={Mine}></Route>
		  </Route>
	 	  <Route path="/login" component={Login}/>
	 	  <Route path="/register" component={Register}/>
	 	  <Route path="/regbasic" component={RegBasic}/>
	 	  <Route path="/regtouch" component={RegTouch}/>
	 	  <Route path="/offer/:offerId" component={Offer}/>
	 	  <Route path="/jobs/:jobsId" component={Jobs}/> 
		  <Route path='/deliverlist' component={Deliverlist}  >
             <IndexRoute  component={DeliverAll} />
		  	 <Route path='deliverinvite' component={DeliverInvite}></Route>
		  	 <Route path='delivernot' component={DeliverNot}></Route>
		  </Route>
		  <Route path='/interviewlist' component={Interview}>
		  	  <IndexRoute  component={InterviewDid} />
		  	  <Route path='interviewgoing' component={InterviewGoing}></Route>
		  </Route>
		  <Route path='/invitation' component={Invitation}></Route>
		  <Route path='/collectlist' component={Collectlist}></Route>
		  <Route path='/editor' component={Editor}></Route>
    </Router>
	, document.getElementById('root'));
registerServiceWorker();

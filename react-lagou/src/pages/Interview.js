
import './Interview.css'
import React,{Component} from 'react';
import {browserHistory} from 'react-router';
import {Link,IndexLink} from 'react-router';
import Header from '../components/Header';


class Interview extends Component{
    constructor(){
    		super();
    }

	render(){
		

		return(
			<div>
			  <Header  title="我的面试"/>
			   <ul className="interviewinfo">
	              <li><IndexLink  to="/interviewlist" activeClassName="active">已面试</IndexLink></li>
	              <li><Link to="/interviewlist/interviewgoing" activeClassName="active">将面试</Link></li>
              </ul>

                {this.props.children}
                
            </div>         
			)
	}
  
 

}

export default Interview;
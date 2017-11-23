
import './Deliverlist.css';
import React,{Component} from 'react';
import {browserHistory} from 'react-router';
import {Link,IndexLink} from 'react-router';
import Header from '../components/Header';


class Deliverlist extends Component{
    constructor(){
    		super();
    }

	render(){
		return(
			<div>
			  <Header  title="投递记录"/>
            <ul className="deliverinfo">
              <li><IndexLink  to="/deliverlist" activeClassName="active">全部</IndexLink></li>
              <li><Link to="/deliverlist/deliverinvite" activeClassName="active">邀请面试</Link></li>
              <li><Link to="/deliverlist/delivernot" activeClassName="active">不合适</Link></li>
            </ul>

             {this.props.children}

      </div>
			)
	}
  
 

}

export default Deliverlist;

import React,{Component} from 'react';
import axios from 'axios';
import Header from '../components/Header'

class DeliverNot extends Component{

	render(){
		
		return(
			<div className="contenter">				
			   <ul className="listdeliver">
			     <li className="list-empty">
                     <span className="text">暂无记录3s~</span>
                 </li>
                </ul>
			</div>
			)
	}
}
export default DeliverNot;
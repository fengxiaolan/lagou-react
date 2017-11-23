
import React,{Component} from 'react';
import axios from 'axios';
import Header from '../components/Header'

class InterviewGoing extends Component{

	render(){
		
		return(
			<div className="contenter">				
			   <ul className="listinterview">
			     <li className="list-empty">
			       <a href="/">投简历</a>
                  暂时没有将面试的记录，去吧go
                 </li>
                </ul>
			</div>
			)
	}
}
export default InterviewGoing;
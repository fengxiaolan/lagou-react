
import React,{Component} from 'react';
import Header from '../components/Header';

class Collectlist extends Component{
    constructor(){
    		super();
    }

	render(){
		
		return(
			<div>
			  <Header  title="我的收藏"/>
			  <p>哈哈哈</p>
			   <div className="contenter">
                <ul className="list">
	                <li className="list-empty">
	                  <span className="text">还没有收藏的职位~</span>
	                </li>
                </ul>
               </div>   
             </div>     
			)
	}
  
 

}

export default Collectlist;
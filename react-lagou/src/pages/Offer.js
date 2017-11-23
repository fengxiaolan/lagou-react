
import './Offer.css'
import React,{Component} from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';
import Header from '../components/Header';
import Recurit from '../components/Recurit';
import JobClass from '../components/JobClass';
import Detailpos from '../components/Detailpos';




class Offer extends Component{
    constructor(){
    	super();
    	this.state={
       
    	}
    }
	render(){
		
		return(
			<div className="contenter">
 				<Header title="公司职位" /> 
 				 <div className="right">
					<span className="corner"></span>
				</div>
				<div className="left">
	 				<span className="corner"></span>
	 			 </div>
              <Recurit  ofimg="https://static.lagou.com/i/image/M00/76/40/Cgp3O1g1TNOAB2yxAAA9bQUyc4g814.png"  oftitle="拉勾网" ofinfo="企业服务,招聘/ D轮及以上/ 150-500人" pos={true} position="北京"  />
            
               <JobClass  />
               <Detailpos  />
			</div>
			)
	}
 
  
       
}
export default Offer;
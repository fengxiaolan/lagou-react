
import './Position.css'
import axios from 'axios';
import React,{Component} from 'react';
import ListCon from '../components/ListCon';


class Position extends Component{
    constructor(){
    	super();
    	this.state={
    		
    	}

    }
	render(){
		
		return(
		<div >
			<div className="custom-info">
	            <span className="info">
	                10秒钟定制职位
	            </span>
	            <a className="go" href="/login" target="_self">
	                <em className="gologin">去登录</em>
	            </a>
            </div>
            <div className="custom-info">
	            <span className="info">
	                职位
	            </span>
	            <a className="go" href="/editor" target="_self">
	                <em className="gologin">
	                     <em className="icon"></em>
	                编辑
	                </em>
	            </a>
            </div>


           <ListCon  />

		</div>
		)
	}
}

export default Position;
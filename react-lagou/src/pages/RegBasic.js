
import React,{Component} from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';

import MyInput from '../components/MyInput';

class RegBasic extends Component{
  constructor(){
    super();
     this.state={
    	name:"",
    	edu:"",
    	year:""
    	}
    }
	render(){
		return(
	  <div className="formregister">
		   <p className="titlereg">完善基本信息 <span className="titlesmo">(可在在线简历中修改)</span></p>
	      <MyInput ph="姓名" className='top border_btm' onChangeVal={()=>{this.handlename()}}/>
	      <MyInput ph="最高学历" className='border_btm' onChangeVal={()=>{this.handleedu()}}/>
	      <MyInput ph="工作年限" className='btm'  onChangeVal={()=>{this.handleyear()}}/>
	      <button className="nextstep" onClick={()=>this.handlenext()}>下一步</button>
     </div>
	)
	
	}
	handlename(val){
	   this.setState((preState)=>{
    			this.state.name=val
    		})
	}
	handleedu(val){
		this.setState((preState)=>{
    			this.state.edu=val
    		})
	}
	handleyear(val){
		this.setState((preState)=>{
    			this.state.year=val
    		})
	}
	handlenext(){
     window.location.href=`/regtouch`;
	}
}

export default RegBasic;
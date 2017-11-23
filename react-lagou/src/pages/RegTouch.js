

import React,{Component} from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';

import MyInput from '../components/MyInput';

class RegTouch extends Component{
  constructor(){
    super();
    
    }
	render(){
		return (
		<div className="formregister">
		<p className="titlereg">填写联系方式 <span className="titlesmo">(可在在线简历中修改)</span></p>
          <MyInput ph="电话号码" className='top'  className="border_btm"  onChangeVal={()=>{this.handlephone()}}/>
          <MyInput ph="常用邮箱" className='btm'  onChangeVal={()=>{this.handleemail()}}/>
          <button className="nextstep complish" onClick={()=>this.handcomplish()}>完成</button>
          <button className="prestep" onClick={()=>this.handprev()}>上一步</button>
        </div>
		)
		
	}
	handlephone(){

	}
	handleemail(){

	}
	handcomplish(){
	 window.location.href=`/`;
	}
	handprev(){
	  window.location.href="javascript:history.back(-1)";
	}
}

export default RegTouch;
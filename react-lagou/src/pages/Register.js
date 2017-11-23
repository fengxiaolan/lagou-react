import './Register.css'
import React,{Component} from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';

import MyInput from '../components/MyInput';

class Register extends Component{
  constructor(){
    super();
    // this.handlelogin=this.handlelogin.bind(this);
    // this.handleregist=this.handleregist.bind(this);
  }
	render(){
     
		return(
      <div  className="formbg">
			<div className="formregister">
               <MyInput ph="手机号" className='inputbox' tips="请输入手机号" onChangeVal={()=>{this.handleTel1()}} />
               <MyInput ph="请证明你不是机器人" tips="请输入验证码" className='inputbox' onChangeVal={()=>{this.handlePwd1()}}   />
               <div className="validate">
               <img  className="valimg" src="https://passport.lagou.com/vcode/create?from=register&refresh=1509365394331"  />
               		<a onClick={()=>this.handlevalidate()}>看不清楚，<em>换一张</em></a>
               </div>
              
               <MyInput ph="短信验证码" tips="请输入验证码" className='inputbox valid hasinpt' onChangeVal={()=>{this.handlevalia()}}  getvalidate={true} />
               

               <MyInput ph="请设置6-16位密码" tips="6-16位密码" className='inputbox valid news hasinpt' onChangeVal={()=>{this.handlesdoubpwd()}}  isClose={true} ref="pwd"/>


              <button onClick={()=>this.handlegoreg()} className="loginpage ">注册</button>

               <span className="nonum">还没有账号?</span>

              <button onClick={()=>this.handlergologin()} className="regpage">登录</button>
           </div>
       </div>
		)
	}
 handleTel1(){

 }
 handlePwd1(){

 }
 handlevalia(){

 }
 handlesdoubpwd(){

 }
  handlevalidate(){
     window.location.reload();
     var random=Math.round(Math.random()*1509365394331);
     var imgsrc=`https://passport.lagou.com/vcode/create?from=register&refresh=${random}`;
     console.log(imgsrc)

  }
  componentDidMount(){
      document.querySelector(".getvalidate").onclick=function(){
        console.log("异步获取验证码");
      }
  }

  handlegoreg(e){
    // window.location.href=`/regbasic`;
     axios.post('/api/register').then(function(res){
        browserHistory.push(`/regbasic`);
    });
  }
  handlergologin(){
     window.location.href=`/login`;

  }
}

export default Register;
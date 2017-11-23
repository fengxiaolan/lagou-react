import './Login.css'
import React,{Component} from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';

import MyInput from '../components/MyInput';

class Login extends Component{
    constructor(){
    	super();
    	this.state={
    		user:{
    			tel:"",
    			pwd:""
    		},
    		isLogin:false
    	};
    	this.handlelogin=this.handlelogin.bind(this);
    	this.handleregist=this.handleregist.bind(this);

    }
	render(){
		return(
			<div className="formbg">
	             <div className="formLogin">
		            <MyInput ph="已存在的邮箱/电话" className='top border_btm' ref="tel" onChangeVal={()=>{this.handleTel()}}  tips="请输入有效账号"/>
		            <MyInput ph="密码" className='btm hasinpt' onChangeVal={()=>{this.handlePwd()}}  isClose={true} ref="pwd" tips="6-16位密码"/>
		            <button onClick={this.handlelogin} className="loginpage">登录</button>

		            <span className="nonum">还没有账号?</span>

		            <button onClick={this.handleregist} className="regpage">注册</button>
	           </div>
         </div>
			)
	}
	handleTel(val){
		this.setState((preState)=>{
    			this.state.user.tel=val
    		})
		localStorage.setItem('username',JSON.stringify(val));
		console.log(val);
         
		
	}
	handlePwd(val){
		this.setState((preState)=>{
    			this.state.user.pwd=val
    		})
	}
	handlelogin(){
		
		var tel=this.state.user.tel;
	   /* if(!tel.value){
			 alert('用户名不能为空！');
			return;
		}*/

		//登录后向后台请求(express路径)
		axios.post('/api/login',{tel:'abc',pwd:'123'}).then(function(res){
				console.log(res.data.code);
			     /*if(res.data.code==0){
			     	this.setState({
			     		isLogin:!this.state.isLogin
			     	})
			     } */
			       browserHistory.push(`/mine`);
			       console.log(document.querySelector('.haslogin'));
			       document.querySelector('.haslogin').style.display="block";
				   document.querySelector('.nologin').style.display="none";
				   document.querySelector('.tuichu').style.display="block";
		

		});
	}
	handleregist(){
        window.location.href=`/register`;
	}
}

//history.pushState()和history.replaceState()
export default Login;
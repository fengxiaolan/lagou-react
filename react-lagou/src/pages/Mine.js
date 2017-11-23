import './Mine.css';
import React,{Component} from 'react';
import axios from 'axios';
import Header from '../components/Header'

class Mine extends Component{

	render(){
		return(
			<div>
          
				<div className="content">
					<div className="logininfo">
		                <div className="nologin">
		                    <a className="loginbut" href="/login" target="_self">登录 / 注册</a>  
		                </div>
		                <div className="haslogin">
		                    <div className="headcon">
		                    <img className=" portrait" src="https://static.lagou.com/images/myresume/default_headpic.png"/>
		                    </div>
		                     <div className="loginame">冯孝兰</div>
		                     <a className="resume" href="http://www.lagou.com/center/preview.html" target="_self"> 简历&gt; </a>
		                </div>
		            </div>
		            <div className="buttons">
			            <a className="button mailing" href="/deliverlist">投递</a>
			            <a className="button interview" href="/interviewlist">面试</a>
			            <a className="button invitation" href="/invitation">邀约</a>
			            <a className="button collect" href="/collectlist">收藏</a>
			        </div> 
			        <button className="tuichu" onClick={()=>this.handletuichu()}>退出登录</button>
	            </div> 
            </div> 

			)
	}
	handletuichu(){
		if(window.confirm("你确信要退出？")){
	         window.location.href="/mine";
	     }else{
	         alert("你按了取消，那就是返回false");
	     }

	}

	
}


export default Mine;
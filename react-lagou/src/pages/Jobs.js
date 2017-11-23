import './Jobs.css'
import React,{Component} from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';
import Header from '../components/Header';
import Posdetail from '../components/Posdetail';


class Jobs extends Component{
    constructor(){
    	super();
    	this.state={
    		/* var global = { };
        try {
            global.page =  {"currentPageNo":1,"hasNextPage":false,"hasPreviousPage":false,"pageNo":1,"pageSize":2,"result":[],"start":0,"totalCount":0,"totalPageCount":0};
            global.showShareButton = true;
            global.haveCollect = false;
            global.positionId = '3307571';
            global.companyId = '451';
            global.avgScore = '';
            global.salary = '15k-30k';
            global.advantage = '免费班车,免费夜宵,优秀团队';
            global.companyShortName = '腾讯';
            global.positionName = '前端开发';
            global.companyAddress = '大族科技';
            global.positionAddress = '深圳';
            global.companyLogo = window.location.protocol + '//static.lagou.com/image1/M00/00/03/CgYXBlTUV_qALGv0AABEuOJDipU378.jpg';
            global.url = window.location.href;
            // global.appid = 'wxbffbd15772cd6152';
            // global.timestamp = '1509519395';
            // global.nonceStr = 'b02f3f21-dde8-44c3-95a0-658d69e7c99f';
            // global.signature = '68394164c7ebc075719e45d379b864fa7cf8f72b';
        }
        catch ( e ) {
            throw 'params error!';
        }
        require( [ 'center/jobdetail/main' ] );
    */
    	}
    }
	render(){
		
		return(
			<div >
 				<Header title="职位详情" />
			     <div className="right">
					<span className="corner"></span>
				</div>
				<div className="left">
	 				<span className="corner"></span>
	 			 </div>

                 <div className="contenter">

                   <Posdetail  />

                   <div className="fixgroup">
		 			   <div className="godeliver"  data-cid="3688712" >
		 			    投递简历
		 			   </div>
	 			   </div>
	 			 </div>
			</div>
			)
	}
  componentDidMount(){
  	//总返回
  	 document.querySelector(".right").onclick=function(){
  	 	window.location.href=`/`;
  	 }

  	 //上一步
  	 document.querySelector(".left").onclick=function(){
  	 	window.location.href="javascript:history.back(-1)";
  	 }
  	 
  }




}
export default Jobs;

import React,{Component} from 'react';
import ListItem from './ListItem';


class ListCon extends Component{
  constructor(){
  	super();
  	this.state= {
 	"jobList":[
 	{
        "logger":{
            "traceCapable":true,
            "name":"com.lagou.entity.mobile.MobilePosition"
        },
        "positionId":3529978,
        "positionName":"前端开发工程师",
        "city":"北京",
        "createTime":"今天 15:29",
        "salary":"15k-30k",
        "companyId":147,
        "companyLogo":"https://static.lagou.com/i/image/M00/76/40/Cgp3O1g1TNOAB2yxAAA9bQUyc4g814.png",
        "companyName":"拉勾网",
        "companyFullName":"拉勾网有限公司"
    },
    {
        "logger": {
            "traceCapable": true,
            "name": "com.lagou.entity.mobile.MobilePosition"
        },
        "positionId": 3703275,
        "positionName": "前端开发",
        "city": "上海",
        "createTime": "今天 15:23",
        "salary": "20k-35k",
        "companyId": 147,
        "companyLogo": "https://static.lagou.com/i/image/M00/C0/61/CgqKkVjSVsiAWBKSAABRD1efTm0126.jpg",
        "companyName": "叮咚小区",
        "companyFullName": "上海壹佰米网络科技有限公司"
    },
    {
        "logger":{
            "traceCapable":true,
            "name":"com.lagou.entity.mobile.MobilePosition"
        },
        "positionId":3710763,
        "positionName":"人事管理员",
        "city":"济南",
        "createTime":"今天 15:29",
        "salary":"3k-5k",
        "companyId":3697698,
        "companyLogo":"https://static.lagou.com/i/image2/M00/0C/A2/CgoB5lnggIqABcKGAABJv9-O2L0647.jpg",
        "companyName":"玫德集团",
        "companyFullName":"玫德集团有限公司"
    },{
        "logger":{
            "traceCapable":true,
            "name":"com.lagou.entity.mobile.MobilePosition"
        },
        "positionId":3711186,
        "positionName":"微信编辑运营",
        "city":"广州",
        "createTime":"今天 15:38",
        "salary":"5k-6k",
        "companyId":156247,
        "companyLogo":"https://static.lagou.com/i/image/M00/38/AE/CgpFT1lLJWmAa6j9AAAHCNAMW9o445.png",
        "companyName":"每日V",
        "companyFullName":"广州百帆信息科技有限公司"
    },
    {
        "logger":{
            "traceCapable":true,
            "name":"com.lagou.entity.mobile.MobilePosition"
        },
        "positionId":3711198,
        "positionName":"微信编辑运营（应届）",
        "city":"广州",
        "createTime":"今天 15:38",
        "salary":"4k-5k",
        "companyId":156247,
        "companyLogo":"https://static.lagou.com/i/image/M00/38/AE/CgpFT1lLJWmAa6j9AAAHCNAMW9o445.png",
        "companyName":"每日V",
        "companyFullName":"广州百帆信息科技有限公司"
    },
    {
        "logger":{
            "traceCapable":true,
            "name":"com.lagou.entity.mobile.MobilePosition"
        },
        "positionId":3711609,
        "positionName":"机械绘图员",
        "city":"济南",
        "createTime":"今天 15:29",
        "salary":"3k-5k",
        "companyId":272730,
        "companyLogo":"https://static.lagou.com/i/image2/M00/0C/A2/CgoB5lnggIqABcKGAABJv9-O2L0647.jpg",
        "companyName":"玫德集团",
        "companyFullName":"玫德集团有限公司"
    },
    {
        "logger":{
            "traceCapable":true,
            "name":"com.lagou.entity.mobile.MobilePosition"
        },
        "positionId":3697477,
        "positionName":"图像算法工程师",
        "city":"成都",
        "createTime":"今天 15:28",
        "salary":"12k-20k",
        "companyId":206526,
        "companyLogo":"https://static.lagou.com/i/image/M00/26/B5/CgpFT1kiuHaAHSClAAAUibTszVc170.jpg",
        "companyName":"鑫图光电",
        "companyFullName":"福州鑫图光电有限公司"
    },
    {
        "logger":{
            "traceCapable":true,
            "name":"com.lagou.entity.mobile.MobilePosition"
        },
        "positionId":3703204,
        "positionName":"广告优化师",
        "city":"珠海",
        "createTime":"今天 15:27",
        "salary":"5k-10k",
        "companyId":203549,
        "companyLogo":"https://static.lagou.com/i/image/M00/26/8F/CgpFT1kikoSAF6gAAADBfPgprLA086.png",
        "companyName":"叨叨网络",
        "companyFullName":"珠海叨叨网络科技有限公司"
    },
    {
        "logger":{
            "traceCapable":true,
            "name":"com.lagou.entity.mobile.MobilePosition"
        },
        "positionId":3704213,
        "positionName":"客服专员",
        "city":"北京",
        "createTime":"今天 15:26",
        "salary":"5k-10k",
        "companyId":147509,
        "companyLogo":"https://static.lagou.com/i/image/M00/57/D6/Cgp3O1fQ4dSAAfKhAABV9hQmlNo750.png",
        "companyName":"微雪文化",
        "companyFullName":"北京微雪文化传播有限公司"
    },
    {
        "logger":{
            "traceCapable":true,
            "name":"com.lagou.entity.mobile.MobilePosition"
        },
        "positionId":3710215,
        "positionName":"跨境电商招商经理（奢侈品）",
        "city":"北京",
        "createTime":"今天 15:23",
        "salary":"15k-20k",
        "companyId":19337,
        "companyLogo":"https://static.lagou.com/image1/M00/00/24/Cgo8PFTUWHuAJmkRAAAkai17dEo793.jpg",
        "companyName":"联络互动",
        "companyFullName":"北京数字天域科技有限责任公司"
    },
    {
        "logger":{
            "traceCapable":true,
            "name":"com.lagou.entity.mobile.MobilePosition"
        },
        "positionId":3710283,
        "positionName":"跨境电商招商运营经理（母婴保健品）",
        "city":"北京",
        "createTime":"今天 15:23",
        "salary":"15k-20k",
        "companyId":19337,
        "companyLogo":"https://static.lagou.com/image1/M00/00/24/Cgo8PFTUWHuAJmkRAAAkai17dEo793.jpg",
        "companyName":"联络互动",
        "companyFullName":"北京数字天域科技有限责任公司"
    },
    {
        "logger":{
            "traceCapable":true,
            "name":"com.lagou.entity.mobile.MobilePosition"
        },
        "positionId":3710402,
        "positionName":"招聘主管 AB",
        "city":"北京",
        "createTime":"今天 15:23",
        "salary":"5k-8k",
        "companyId":149034,
        "companyLogo":"https://static.lagou.com/i/image/M00/5B/EE/CgqKkVfiaO2AeouUAABrk5W83EQ723.jpg",
        "companyName":"弘历软件",
        "companyFullName":"北京骏嘉财通科技有限公司"
    },
    {
        "logger":{
            "traceCapable":true,
            "name":"com.lagou.entity.mobile.MobilePosition"
        },
        "positionId":3703245,
        "positionName":"后端开发",
        "city":"上海",
        "createTime":"今天 15:23",
        "salary":"15k-25k",
        "companyId":67860,
        "companyLogo":"https://static.lagou.com/i/image/M00/C0/61/CgqKkVjSVsiAWBKSAABRD1efTm0126.jpg",
        "companyName":"叮咚小区",
        "companyFullName":"上海壹佰米网络科技有限公司"
    },{
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3703121,
                        "positionName":"区域营销经理-上海",
                        "city":"上海",
                        "createTime":"今天 16:18",
                        "salary":"8k-15k",
                        "companyId":1313,
                        "companyLogo":"https://static.lagou.com/i/image/M00/0C/BF/CgpFT1jrMcyASVWlAAATPf2U8V0273.jpg",
                        "companyName":"爱福窝",
                        "companyFullName":"上海爱福窝云技术有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3703299,
                        "positionName":"区域营销经理-北京",
                        "city":"北京",
                        "createTime":"今天 16:18",
                        "salary":"8k-15k",
                        "companyId":1313,
                        "companyLogo":"https://static.lagou.com/i/image/M00/0C/BF/CgpFT1jrMcyASVWlAAATPf2U8V0273.jpg",
                        "companyName":"爱福窝",
                        "companyFullName":"上海爱福窝云技术有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3703067,
                        "positionName":"数据库工程师",
                        "city":"成都",
                        "createTime":"今天 16:11",
                        "salary":"15k-22k",
                        "companyId":95921,
                        "companyLogo":"https://static.lagou.com/i/image/M00/49/D5/CgqKkVeYbDiAZ_CUAADomOWBBsA322.jpg",
                        "companyName":"雅堂控股集团",
                        "companyFullName":"深圳市雅堂控股投资股份有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3711251,
                        "positionName":"微信编辑运营",
                        "city":"广州",
                        "createTime":"今天 16:10",
                        "salary":"5k-6k",
                        "companyId":25626,
                        "companyLogo":"https://static.lagou.com/image1/M00/00/35/CgYXBlTUXJeADlVmAABf1RRJPIg112.png",
                        "companyName":"每日Q",
                        "companyFullName":"广州市千云信息科技有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3710183,
                        "positionName":"销售经理",
                        "city":"北京",
                        "createTime":"今天 16:10",
                        "salary":"8k-10k",
                        "companyId":146523,
                        "companyLogo":"https://static.lagou.com/i/image/M00/55/31/Cgp3O1fGa_uAO568AABTmTlIv-A422.png",
                        "companyName":"金图国际",
                        "companyFullName":"北京金图创联国际科技有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3704387,
                        "positionName":"SEM专员",
                        "city":"上海",
                        "createTime":"今天 16:09",
                        "salary":"6k-8k",
                        "companyId":142324,
                        "companyLogo":"https://static.lagou.com/i/image/M00/46/36/CgpFT1lkjDmAUZ9DAAARTdKFjWc903.jpg",
                        "companyName":"旭胜金融信息服务股份有限公司",
                        "companyFullName":"上海旭胜金融信息服务股份有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3704378,
                        "positionName":"理财经理",
                        "city":"上海",
                        "createTime":"今天 16:09",
                        "salary":"10k-15k",
                        "companyId":142324,
                        "companyLogo":"https://static.lagou.com/i/image/M00/46/36/CgpFT1lkjDmAUZ9DAAARTdKFjWc903.jpg",
                        "companyName":"旭胜金融信息服务股份有限公司",
                        "companyFullName":"上海旭胜金融信息服务股份有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3697514,
                        "positionName":"Project Manage-赴MS",
                        "city":"北京",
                        "createTime":"今天 16:09",
                        "salary":"10k-12k",
                        "companyId":36513,
                        "companyLogo":"https://static.lagou.com/i/image/M00/01/B2/Cgp3O1Zzr9GAdpGkAAAWW2BuXJc040.png",
                        "companyName":"微创",
                        "companyFullName":"上海微创软件股份有限公司北京分公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3698419,
                        "positionName":"招聘专员",
                        "city":"北京",
                        "createTime":"今天 16:09",
                        "salary":"5k-8k",
                        "companyId":36513,
                        "companyLogo":"https://static.lagou.com/i/image/M00/01/B2/Cgp3O1Zzr9GAdpGkAAAWW2BuXJc040.png",
                        "companyName":"微创",
                        "companyFullName":"上海微创软件股份有限公司北京分公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3710793,
                        "positionName":"U3D场景地编",
                        "city":"深圳",
                        "createTime":"今天 16:09",
                        "salary":"12k-20k",
                        "companyId":213345,
                        "companyLogo":"https://static.lagou.com/i/image/M00/33/A4/CgpFT1lA71WAfzuuAACarPp3pEk036.jpg",
                        "companyName":"火花幻境",
                        "companyFullName":"深圳市火花幻境虚拟现实技术有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3710199,
                        "positionName":"运营实习生",
                        "city":"北京",
                        "createTime":"今天 16:08",
                        "salary":"3k-4k",
                        "companyId":23028,
                        "companyLogo":"https://static.lagou.com/i/image/M00/00/6E/CgqKkVZJpU2AOZGpAABl8mFlW7U383.jpg",
                        "companyName":"领通科技",
                        "companyFullName":"北京领通科技有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3712022,
                        "positionName":"Android开发",
                        "city":"深圳",
                        "createTime":"今天 16:08",
                        "salary":"8k-13k",
                        "companyId":149047,
                        "companyLogo":"https://static.lagou.com/i/image/M00/3C/C5/CgpFT1lTQa6ACWAJAAAV2qDSO88033.jpg",
                        "companyName":"博为教育",
                        "companyFullName":"深圳博为教育科技有限公司"
                    },
                    {
                        "logger":{
                            "traceCapable":true,
                            "name":"com.lagou.entity.mobile.MobilePosition"
                        },
                        "positionId":3712069,
                        "positionName":"教育方案营销策划经理",
                        "city":"深圳",
                        "createTime":"今天 16:08",
                        "salary":"10k-15k",
                        "companyId":149047,
                        "companyLogo":"https://static.lagou.com/i/image/M00/3C/C5/CgpFT1lTQa6ACWAJAAAV2qDSO88033.jpg",
                        "companyName":"博为教育",
                        "companyFullName":"深圳博为教育科技有限公司"
                    }
]
},
this.handleonserch=this.handleonserch.bind(this);

  }

	render(){
		  var joblist=this.state.jobList.map(function(jobitem,index){
    			return <ListItem job={jobitem} key={jobitem.positionId}/>
    		})
    		return (
    			<div>
    			 <ul className="list" onsearchchange={this.handleonserch}>
                    {joblist}
                 </ul>
                 <div className="list-more">加载更多</div>
                 <div id="copyright">
	                 <p>©2015 lagou.com, all right reserved </p>
	                 <div className="copyright-item">
	                   <span className="phone active">移动版&nbsp;·&nbsp;</span>
	                   <span className="computer">电脑版&nbsp;·&nbsp;</span>
	                   <a  className="gotop">回顶部</a>
	                 </div>
                 </div>
                 </div>
    		)
	}
     componentDidMount(){
         document.querySelector('.gotop').onclick=function(){
                 window.scrollTo(0,0);
              }  
          document.querySelector('.list-more').onclick=function(){
            console.log('加载更多');
         }
    }
    handleonserch(val){
         if(val=="")
            return ;
       var arrlist=this.state.jobList.filter(function(item){
            return item.positionName.indexOf(val) != -1;
       })

        this.setState(function(){
            return {
                jobList:arrlist
            }
        }); 
    }
    
}

export default ListCon;
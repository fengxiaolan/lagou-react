
import React,{Component} from 'react';
import Recurit from '../components/Recurit';

class Posdetail extends Component{
    constructor(){
    		super();
    }

	render(){
		return(
        <div>
        <div className="postitle">
            <h2 className="title">前端开发工程师</h2>
            <div className="collicon activeable">
                <span className="icon notcoll"></span>
                <span className="text">未收藏</span>
            </div>
        </div>

        <div className="detail">
            <div className="items">
                    <span className="item salary">
                        <em className="icon"></em>
                        <span className="text">15k-30k</span>
                    </span>
                     <span className="item workaddress">
                        <em className="icon"></em>
                        <span className="text">北京</span>
                    </span>
                    <span className="item jobnature">
                        <em className="icon"></em>
                        <span className="text">全职</span>
                    </span>
                    <span className="item workyear">
                        <em className="icon"></em>
                        <span className="text">3-5年</span>
                    </span>
                    <span className="item education">
                        <em className="icon"></em>
                        <span className="text">本科及以上</span> 
                    </span> 
              </div>
            <div className="temptation">
                职位诱惑：技术挑战、美味果盘、运动健身
            </div>
        </div>

        {/*<div className="company activeable" data-lg-tj-id="19v6" data-lg-tj-no="0030" data-lg-tj-cid="147">
                    <img src="https://static.lagou.com/i/image/M00/76/40/Cgp3O1g1TNOAB2yxAAA9bQUyc4g814.png" alt="" className="logo" />
                    <div className="desc">
                        <div className="dleft">
                            <h2 className="title">
                                拉勾网
                            </h2>
                            <p className="info">
                                 企业服务,招聘/ D轮及以上/ 150-500人
                             </p>
                        </div>
                         <span className="dright"></span>
                     </div>
                 </div>*/}
       <Recurit  ofimg="https://static.lagou.com/i/image/M00/76/40/Cgp3O1g1TNOAB2yxAAA9bQUyc4g814.png"  oftitle="拉勾网" ofinfo="企业服务,招聘/ D轮及以上/ 150-500人" />

        <div className="positiondesc">
            <div className="desctitle ">
                职位描述
            </div>
            <div className="contents">
                <p>我们在寻找并肩战斗的小伙伴，我们需要你：</p>
				<p>负责拉勾商业产品的前端开发和架构设计</p>
				<p>充满好奇心，享受coding，学习能力强，有代码洁癖</p>
				<p>技术全面，对技术有热情，关注技术发展方向</p>
				<p>极强的责任心，追求完美的习惯，刨根问底的精神</p>
				<p><br /></p>
				<p>技术上：</p>
				<p>熟练掌握HTML5、CSS3、JavaScript、ES6等</p>
				<p>熟悉W3C标准与ES规范，熟悉Web语义化</p>
				<p>熟练掌握盒模型、常用布局以及浏览器和移动设备兼容性</p>
				<p>熟练使用至少一种JS框架，熟练Reactjs或者Angular、Vue等，掌握其原理，能独立开发常用组件</p>
				<p>熟练使用各种调试、抓包工具，能独立分析、解决和归纳问题</p>
				<p>具有性能优化经验</p>
				<p>熟悉前端自动化和工程化</p>
				<p>熟悉NodeJS开发，熟练使用Git</p>
				<p>&nbsp;</p>
				<p>你将加入这样一群人：</p>
				<p>追求自由、平等，提倡简单、透明和分享</p>
				<p>对新事物充满好奇，对技术充满热情</p>
				<p>热爱生活、热爱运动，爱户外、爱篮球、爱羽毛球还有爱二次元的</p>
				<p><br /></p>
				<p>工作环境上：</p>
				<p>免费的午餐、晚餐（由3W大厨掌勺，每天3菜1汤）</p>
				<p>免费的果盘（告诉你想吃的，我们立马就换）</p>
				<p>定期的运动（羽毛球、篮球都OK，不想出屋的公司也有台球桌、跑步机）</p>
				<p>其他的，自己来体验吧</p>
				<p><br /></p>
            </div>
        </div>

        <div className="positioneval">
        	<div className="eval-title">
                面试评价
               <span id="total">(<span>2</span>)</span>
            </div>
            <ul className="list">
            	<li className="list-item">
                <div className="info-wrap">
                    <img src="https://static.lagou.com/image1/M00/23/95/Cgo8PFVIwg2ASk7yAABFfNy_BdE988.jpg" alt="reviewer avatar" />
                    <span className="name">
                        郭*涛
                    </span>
                    <span className="time">2017/09/21</span>
                    <ul className="score-wrap">
                        <li>
                            <span className="type">综合评分</span>
                            <span className="score">4</span>
                        </li>
                        
                        <li>
                            <span className="type">描述符合</span>
                            <span className="score">4</span>
                        </li>
                        <li>
                            <span className="type">面试官</span>
                            <span className="score">4</span>
                        </li>
                        <li>
                            <span className="type">公司环境</span>
                            <span className="score">4</span>
                        </li>
                        
                    </ul> 
                </div>
                <ul className="tags-wrap">
                
                    <li>
                        面试效率高
                    </li>
                
                </ul>
                <div className="review-content">
                    面试过程：本以为像大公司一样专业面试流程，没想到，，，没问基础，直接问了nodejs的框架的一些问题，然后就挂掉了，自己水平不够，缺少全局思维吧，
                    
                    <span className="dn">&nbsp;</span>
                </div>
                
                <div className="zan-wrap">
                    <span className="zan" data-id="722588">
                        <i></i>
                        <span className="count">有用(<span>18</span>)
                        </span>
                    </span>
                </div>
            </li>

            </ul>
        </div>

      </div>
			)
	}
}

export default Posdetail;




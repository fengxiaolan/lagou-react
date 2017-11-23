import './Search.css';
import React,{Component} from 'react';
import ListCon from '../components/ListCon';
import City from '../components/City';


class Search extends Component{
    constructor(){
    	super();
    	this.state={
    		cities:[{"cityList":["北京","上海","广州","深圳","成都","杭州"],"name":"热门城市","nameStr":"热门城市"},
            {"cityList":["保定","北京","宝鸡","包头","亳州","滨州","长春","成都","重庆","长沙","常州","沧州","东莞","大连","东营","德州","佛山","阜阳","福州"],"name":"","nameStr":"ABCDEF"},
            {"cityList":["桂林","贵阳","广州","赣州","淮安","邯郸","哈尔滨","合肥","呼和浩特","海口","黄石","杭州","惠州","湖州","金华","吉林","江门","佳木斯","济南","济宁","嘉兴","揭阳","荆州"],"name":"","nameStr":"GHIJ"},
            {"cityList":["昆明","聊城","廊坊","拉萨","丽水","临沂","洛阳","连云港","兰州","柳州","泸州","马鞍山","茂名","绵阳","梅州","宁波","南昌","南充","南京","南宁","南通"],"name":"","nameStr":"KLMN"},
            {"cityList":["莆田","青岛","秦皇岛","泉州","日照"],"name":"","nameStr":"OPQR"},
            {"cityList":["上海","石家庄","遂宁","宿迁","汕头","绍兴","沈阳","三亚","深圳","苏州","泰安","天津","铜陵","唐山","太原","台州","泰州"],"name":"","nameStr":"STUV"},
            {"cityList":["潍坊","武汉","芜湖","威海","乌鲁木齐","无锡","温州","西安","香港特别行政区","厦门","西宁","湘潭","咸阳","信阳","徐州","银川","盐城","宜昌","烟台","岳阳","扬州","淄博","珠海","镇江","湛江","肇庆","中山","郑州","漳州","株洲"],"name":"","nameStr":"WXYZ"}]

    	};

    }
	render(){
		var citylists=this.state.cities.map(function(city,index){
			  return <City citytitle={city.nameStr} citylist={city.cityList} key={index} />
			 
    		})
		return(
			<div>
				<div className="left">
	 			<span className="corner"></span>
	 			 </div>

				<div className="cities"> 

                     {citylists}

	             </div>
  				  
	               <div className="searchcon">   
					<div className="cinput">
			            <div className="cbutton">
			                <span className="city" >全国</span>
			                <span className="cityicon"></span>
			            </div>
			            <div className="sinput">
			                <input className="inputer" type="text" placeholder="搜索职位或公司"  onChange={(e)=>this.searchHandler(e)} />
			                <span className="searchgo"><em className="searchicon"></em></span>
			            </div>
		           </div>
		           
		           <div className="listcon">
			            <ul className="history"></ul>
			            <div className="custominfo">
			                将搜索地区和关键词设为定制条件
			            </div>
			            <ul className="list">
	                         <ListCon />
                            
			            </ul>
		           </div>
	              </div>
             </div>

			)
	}
	searchHandler(e){
         var cons=e.target.value;
         //console.log(cons);
          this.props.handleonserch(cons);
	}
    
    componentDidMount(){
    	//初始为显示左箭头和不显示所有城市
    	document.querySelector('.left .corner').style.display="none";
        document.querySelector('.cities').style.display="none";

         //点击全国
	   	document.querySelector('.cbutton').onclick=function(){
	   	  document.querySelector('.left .corner').style.display="block";	
	   	  
         //点击左箭头
	   	  document.querySelector('.left .corner').onclick=function(){
	   	  	// window.location.href=`/search`;
	   	  	 document.querySelector('.cities').style.display="none";
          document.querySelector('.left .corner').style.display="none";
          document.querySelector('.searchcon').style.display="block";
	   	  }

	   	  //点击城市显示城市
          document.querySelector('.cities').style.display="block";
          document.querySelector('.searchcon').style.display="none";
          
         //点击选中城市进行显示到全国位置
        document.querySelector('.cities .activeable').onclick=function(){
          document.querySelector('.cities').style.display="none";
          document.querySelector('.left .corner').style.display="none";
          document.querySelector('.searchcon').style.display="block";
        }
	   	} 

	   	//点击搜索
	   	document.querySelector('.searchgo').onclick=function(){
	   		var  searchlist=<ListCon  />;
	   		console.log(searchlist);
	   	}
    }

  




}

export default Search;
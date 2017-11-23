
import React,{Component} from 'react';
import CityItem from '../components/CityItem'

class City extends Component{
    constructor(){
    	super();
    }

	render(){
		let {citytitle,citylist}=this.props;
		var citydetail=citylist.map(function(citing,idx){
			  	 return <CityItem item={citing} key={new Date().getTime()*Math.random()}/>
			  })
		return(
	           <div>
	             	<div className="cities-header">{citytitle}</div>
	             	<div className="cities-list">
		             	<div className="cities-list-item">
			             	{citydetail}
		             	</div>
	             	</div>
	           </div>
			)
	}
}

export default City;
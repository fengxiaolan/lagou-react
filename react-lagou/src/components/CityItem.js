
import React,{Component} from 'react';

class CityItem extends Component{
    constructor(){
    		super();
    }

	render(){
		let{item,key}=this.props;

		return(
			   <p className="activeable cities-item" data-item={item} onClick={(e)=>this.handleselectcity(e)}>
			     {item}
			   </p>          
			)
	}
  
  handleselectcity(e){
      var selectcity=e.target.dataset.item;
      console.log(selectcity);
      document.querySelector('.cbutton .city').innerHTML=selectcity;
  }

}

export default CityItem;
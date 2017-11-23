
import React,{Component} from 'react';

class DetailItem extends Component{
    constructor(){
    	super();
    	
    }
	render(){

		let{positionName,city,createTime,salary}=this.props.poses;
		return(
			<li className="activeable item" data-index="0">
                <div className="leftpos">
                    <h3 className="name">{positionName}{city}</h3>
                    <p className="time">{createTime}</p>
                </div>
                <div className="rightpos">
                    {salary}
                </div>
            </li>
			)
	}
 
  
       
}
export default DetailItem;
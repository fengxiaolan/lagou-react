
import React,{Component} from 'react';

class JobClassitem extends Component{

	render(){
		let{jobclass}=this.props;
		return(
			
	         <p className="vitem activeable">{jobclass}</p>
	       
			)
	}


}
export default JobClassitem;
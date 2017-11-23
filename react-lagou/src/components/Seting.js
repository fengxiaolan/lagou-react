
import React,{Component} from 'react';


class Seting extends Component{
    constructor(){
    	super();
    }

	render(){
		let {dataName,setitle,setcon}=this.props;
		return(
	             	<li className="item"  data-type={dataName}>
			            <span className="headset">
			               {setitle}
			            </span>
			            <a href="#" className="desc" target="_self">  
			               {setcon}
			            </a>
                    </li>
	           
			)
	}
}

export default Seting;
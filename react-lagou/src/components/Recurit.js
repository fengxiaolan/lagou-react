
import React,{Component} from 'react';

class Recurit extends Component{
    constructor(){
    		super();
    }

	render(){
		let {ofimg,oftitle,ofinfo,position}=this.props;
		return(
	        <div className="company activeable" >
	            <img src={ofimg} alt="" className="logo" />
	            <div className="desc">
	                <div className="dleft">
	                    <h2 className="title">
	                        {oftitle}
	                    </h2>
	                    <p className="position">
			             <em className="icon"></em>
			             <span className="text">{position}</span>
			          </p>
	                    <p className="info">
	                        { ofinfo}
	                     </p>
	                </div>
	                 <span className="dright"></span>
	             </div>
            </div>
			)
	}

	componentDidMount(){
	   	document.querySelector('.contenter .position').style.display="none";
	   	if(this.props.pos==true){
	   	  document.querySelector('.contenter  .position').style.display="block";	
	   	}

	   	document.querySelector('.company').onclick=function(){
	   		window.location.href=`/offer/123`;
	   	}
   }
}

          

export default Recurit;


        
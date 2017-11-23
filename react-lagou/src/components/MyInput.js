
import React,{Component} from 'react';


class MyInput extends Component{
    constructor(){
    	super();
    	this.state={
    		isEye:true
    	}
    	this.handleValue=this.handleValue.bind(this);
    }
	render(){
		let {ph,className,value,isClose,getvalidate,ref,tips}=this.props;
		var Span=isClose? <span className={this.state.isEye?"openeye":"closeeye"} onClick={(e)=>this.changeEye(e)}></span>:"";
		var isShow=isClose?(!this.state.isEye? "text":"password"):"text";
		var valid=getvalidate?<button className="getvalidate" >获取</button>:"";
		
		return(
		   <div className="inputext">    		
	   		 <input type={isShow} placeholder={ph} className={className} value={value} onChange={this.handleValue}  ref={ref}/>
	   		 <span className="input_tips">{tips}</span>
	   		 {Span} {valid}
	   		 
	       </div>  

		)
	}
	handleValue(e){
		this.props.onChangeVal(e.target.value);
	}
	changeEye(e){
      	this.setState({
      		isEye:!this.state.isEye
      	})
    }
    


}

/*MyInput.propTypes={
	ph:PropTypes.string
}*/

export default  MyInput;
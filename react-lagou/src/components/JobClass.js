
import React,{Component} from 'react';
import JobClassitem from './JobClassitem';


class JobClass extends Component{
    constructor(){
    	super();
    	this.state={
    		"jobClass":[
               "技术","产品","设计","运营","市场与销售","职能","金融"
    		]
    	}

    }

	render(){
		var listclass=this.state.jobClass.map(function(classitem,index){
    			return <JobClassitem jobclass={classitem} key={new Date().getTime()*Math.random() } />
    		});
		return(
	          <div className="positype">
	          	<div className="caltitle">职位分类</div>
	          	<div className="classes">
	          		{listclass}
	          	</div>
	          	
	          </div>
			)
	}

	
}

export default JobClass;
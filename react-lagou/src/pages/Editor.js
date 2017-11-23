
import './Editor.css'
import axios from 'axios';
import React,{Component} from 'react';
import Header from '../components/Header';
import Seting from '../components/Seting';


class Editor extends Component{
    constructor(){
    	super();
    	this.state={
    		
    	}

    }
	render(){
		
		return(
		<div >
			<Header  title="设置定制信息"  />
			<div className="left">
	 			<span className="corner"></span>
	 		</div>
            
            <div className="contenter">
	            <ul className="customSet">
	              <Seting  dataName="positionName" setitle="职位类型" setcon="前端"/>
	              <Seting  dataName="city" setitle="city" setcon="请选择工作地点"/>
	              <Seting  dataName="salary" setitle="期望薪水" setcon="请选择期望薪水"/>
	              <Seting  dataName="stages" setitle="公司规模" setcon="请选择公司规模"/>
	            </ul>
            </div>
            <div className="search" onClick={()=>this.setgoing()}>
              开始搜索
            </div>
		</div>
		)
	}
   setgoing(){
   	  window.location.href=`/`;
   }

}

export default Editor;
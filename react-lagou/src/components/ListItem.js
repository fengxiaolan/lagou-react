
import React,{Component} from 'react';

class ListItem extends Component{
    constructor(){
    		super();
    }

	render(){
		let {positionId,companyId,positionName,city,salary,companyLogo,companyFullName,createTime}=this.props.job;
		return(
	           <li className="activeable list-item" data-positionId={positionId} data-companyId={companyId}>
				            <img src={companyLogo} className="item-logo" />
				            <div className="item-desc">
				                <h2 className="item-title">{companyFullName}</h2>
				                <p className="item-info">
				                    <span className="item-pos">
				                        {positionName} [ {city} ]
				                    </span>
				                    <span className="item-salary">{salary}</span>
				                </p>
				                <p className="item-time">{createTime}</p>
				            </div>
				</li>
			)
	}

	componentDidMount(){
	   document.querySelector('.list-item').onclick=function(){
	   	  window.location.href=`/jobs/123`;
	   }
	}
}

export default ListItem;
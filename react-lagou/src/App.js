import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="拉勾网" />

        {this.props.children}
         <ul className="footer">
            <li><IndexLink to="/" activeClassName="active"><em></em><span>职位</span></IndexLink></li>
            <li><Link to="/search" activeClassName="active"><em></em><span >搜索</span></Link></li>
            <li><Link to="/mine" activeClassName="active"><em></em><span>我的</span></Link></li>
         </ul>
     </div>
    );
  }
}
// https://static.lagou.com/images/mobile/asset/common/img/icon2.png
//process.env.PUBLIC_URL + '/img/' + url + '.jpg'
export default App;

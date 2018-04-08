import React from 'react'
import {render} from 'react-dom'
import './css/app.css'

class App extends React.Component{
  render(){
     return(
         <p className="warp">配置一下webpack哈</p>
     );
    }
}


render(
    <App/>,
    document.getElementById('root')
);
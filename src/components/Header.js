import React ,{ Component } from 'react';

export class Header extends Component{
    render(){
      const { user }=this.props;
      const tags=["Web Developer","Tech Enthusiat","DBA"];
        return(
            <div className="header-container">
            <img src="https://s17.postimg.org/ypm5ye95r/image.jpg" alt="" className="header-image" />
            <div className="header">

              <MenuButton/>
             

              <h1 className="main-heading"> { user} </h1>

              { tags.map((name)=><span className="tag"> { name } </span>) }
             
              <HeaderStats />
            </div>
           <OverlayHeader/>
          </div>
        );
    };
}
export const OverlayHeader=()=>(<div className="overlay-header"></div>);
export function HeaderStats(props){
    return(
        <div className="stats">
        <span className="stat-module">
          Repos: <span className="stat-number">56</span>
        </span>
        <span className="stat-module">
          Stars <span className="stat-number">29</span>
        </span>
        <span className="stat-module">
          Forks <span className="stat-number">11</span>
        </span>
      </div>
    );
}
export function MenuButton(){
  return (
    <svg fill="#ffffff" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg" className="header-icon">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
  </svg>
  );
}

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header} from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="container">
          <Header user={ "Abel Masila" }/>
     
      
      <div className="body">
        <img src="https://s17.postimg.org/xcbukrwdr/Hugh_Jackman_f.jpg" alt="Abel Masila" className="body-image" />
        <div className="body-action-button u-flex-center">
          <svg fill="#ffffff" height="28" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </div>
        <span className="body-stats">Followers <span>3.5k</span></span>
        <span className="body-stats">Following <span>1.9k</span></span>
        <div className="u-clearfix"></div>
        <div className="body-info">
          <p>
            Hugh Michael Jackman is an Australian actor, singer and producer. Jackman has won international recognition for his roles in variety of film genres.
          </p>
          <p>
          In Broadway theatre, Jackman won a Tony Award for his role in The Boy from Oz. A four-time host of the Tony Awards themselves, he won an Emmy Award for one of these appearances. Jackman also hosted the 81st Academy Awards on 22 February 2009.
          </p>
        </div>
        <div className="body-more">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="card u-clearfix">
          <span className="card-heading">Movies</span>
          <span className="card-more">
            <svg fill="#777777" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          </span>
          <ul className="card-list">
            <li><img src="https://s12.postimg.org/c0ryp65lp/m1f.jpg" alt="" /></li>
            <li><img src="https://s14.postimg.org/6ts0it3xt/m2f.jpg" alt="" /></li>
            <li><img src="https://s13.postimg.org/ri499o2zr/m3f.jpg" alt="" /></li>
          </ul>
        </div>
      </div>
      
    </div>
    );
  }
}

export default App;

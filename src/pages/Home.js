import React from 'react';
import style from '../styles/home-page.less';

class Home extends React.Component {
  render () {
    return (
      <div className={style.welcome}>
        Welcome
      </div>
    );
  }
}

export default Home;

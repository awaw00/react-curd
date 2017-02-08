import React from 'react';
import { Link } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import style from '../styles/home-page.less';

class Home extends React.Component {
  render () {
    return (
      <HomeLayout>
        <div className={style.welcome}>
          Welcome
        </div>
      </HomeLayout>
    );
  }
}

export default Home;

import React from 'react';

class HomeLayout extends React.Component {
  render () {
    const {title, children} = this.props;
    return (
      <div>
        <header>
          <h1>{title}</h1>
        </header>

        <main>
          {children}
        </main>
      </div>
    );
  }
}

export default HomeLayout;

import React from 'react';

const MainHeader = () => {
  return (
    <>
      <header className="header">
        <div className="wrap">
          <h1 className="header__logo">
            <a href="/">
              <img src="/logo.png" alt="" />
            </a>
          </h1>

          <button className="header__menu">메뉴</button>
        </div>
      </header>
    </>
  );
};

export default MainHeader;

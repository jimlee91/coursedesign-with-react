import React from 'react';
import Link from 'next/link';

const MainHeader = () => {
  return (
    <>
      <header className="header">
        <div className="wrap">
          <h1 className="header__logo">
            <Link href="/">
              <a>
                <img src="/logo.png" alt="" />
              </a>
            </Link>
          </h1>

          <button className="header__menu">메뉴</button>
        </div>
      </header>
    </>
  );
};

export default MainHeader;

import React from 'react';
import Link from 'next/link';

const GuideTop = () => {
  return (
    <>
      <div className="guide__top">
        <div className="wrap">
          <h1>CHIANG MAI</h1>
          <p>치앙마이, 치앙라이, 빠이</p>

          <div className="guide__date">
            <Link href="/courseDetail">
              <a className="state">2019.06.12 - 06.20</a>
            </Link>
            <Link href="/myCourse">
              <a className="more">more</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuideTop;

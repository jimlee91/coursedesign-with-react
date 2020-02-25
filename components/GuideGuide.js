import React from 'react';
import Link from 'next/link';

const GuideGuide = () => {
  return (
    <>
      <div id="guide__guide" className="guide__view">
        <ul className="guide__guide-list">
          <li className="guide__guide-item">
            <Link href="">
              <a className="wrap">
                <div className="guide__item-thumbnail">
                  <span className="hasCourse active"></span>
                </div>
                <div className="guide__item-info">
                  <h2>치앙마이 대표 명소 모음</h2>
                  <p>치앙마이에 왔다면 이곳만은 꼭 가봐야지!</p>
                </div>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default GuideGuide;

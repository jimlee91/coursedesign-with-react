import React from 'react';
import Link from 'next/link';

const GuideTrip = () => {
  return (
    <>
      <div id="guide__trip" className="guide__view">
        <ul className="guide__guide-list">
          <li className="guide__guide-item">
            <Link href="">
              <a className="wrap">
                <div className="guide__item-thumbnail">
                  <span className="hasCourse active"></span>
                </div>
                <div className="guide__item-info guide__item-info--default">
                  <span>치앙마이, 태국</span>
                  <h2>치앙마이 대표 명소 모음</h2>
                  <p>치앙마이에 왔다면 이곳만은 꼭 가봐야지!</p>
                  <div className="guide__item-etc">
                    <div className="guide__item-heart active">10</div>
                    <div className="guide__item-star">
                      <img src="/icon/star-active.png" alt="" />
                      <img src="/icon/star-active.png" alt="" />
                      <img src="/icon/star-active.png" alt="" />
                      <img src="/icon/star-active.png" alt="" />
                      <img src="/icon/star.png" alt="" />
                      <span>4.0 (32)</span>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default GuideTrip;

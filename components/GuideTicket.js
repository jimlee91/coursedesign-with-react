import React from 'react';
import Link from 'next/link';

const GuideTicket = () => {
  return (
    <>
      <div id="guide__ticket" className="guide__view">
        <ul className="guide__guide-list">
          <li className="guide__guide-item haslink wrap">
            <div className="guide__item-thumbnail">
              <span className="hasCourse active"></span>
            </div>
            <div className="guide__item-info guide__item-info--default">
              <span>치앙마이, 태국</span>
              <h2>러스틱 앤 블루</h2>
              <p>푸른 정원에서 즐기는 브런치 레스토랑</p>
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
              <div className="guide__item-link">
                <a href="#//">
                  <img src="/icon/myrealtrip.png" alt="" className="ticket" />
                  <span className="prc">
                    <strong>321,177</strong> 원
                  </span>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default GuideTicket;

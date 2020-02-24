import React from 'react';
import Link from 'next/link';

import MainHeader from '../components/MainHeader';
import TopLink from '../components/TopLink';
const commerce = () => {
  return (
    <>
      <MainHeader />
      <div className="page commerce">
        <TopLink />
        <div className="container">
          <div className="commerce__slidebox">
            <div className="slider">
              <div>
                <img src="./dummy/commerceimg.png" alt="" />
              </div>
            </div>
          </div>
          <div className="wrap">
            <ul>
              <li className="commerceItem">
                <Link href="https://www.klook.com/ko/" prefetch={false}>
                  <a target={`_blank`}>
                    <img src="./icon/cost-ticket.png" alt="" /> 투어
                  </a>
                </Link>
              </li>
              <li className="commerceItem">
                <Link href="https://www.skyscanner.co.kr" prefetch={false}>
                  <a target={`_blank`}>
                    <img src="./icon/fly.png" alt="" /> 항공권
                  </a>
                </Link>
              </li>
              <li className="commerceItem">
                <Link
                  href="https://www.agoda.com/ko-kr/country/south-korea.html"
                  prefetch={false}
                >
                  <a target={`_blank`}>
                    <img src="./icon/cost-home.png" alt="" /> 숙소
                  </a>
                </Link>
              </li>
              <li className="commerceItem">
                <Link
                  href="https://www.expedia.co.kr/dynamic-package"
                  prefetch={false}
                >
                  <a target={`_blank`}>
                    <img src="./icon/airtel.png" alt="" /> 에어텔
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default commerce;

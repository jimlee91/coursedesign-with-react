import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import MainHeader from '../components/MainHeader';
import TopLink from '../components/TopLink';
import MainNoCourse from '../components/MainNoCourse';
import MainCourse from '../components/MainCourse';

const index = () => {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);

  return (
    <>
      <MainHeader />
      <div className="page main">
        <TopLink />
        <div className="container">
          <form action="">
            <div className="search">
              <input
                type="text"
                placeholder={`${me && me.nickName}님은 어디로 떠나시나요?`}
                onClick="location.href='./search'"
              />
              <button type="submit">검색</button>
            </div>
          </form>
          <div className="traverLocation">
            <div className="slider">
              <div className="slider__item">
                <Link href="">
                  <a>
                    <h1>LAOS</h1>
                    <p>
                      방비엥, 비엔티엔
                      <br />
                      루앙프라방
                    </p>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="course">
            <h2 className="course__who">{me && me.nickName}님의 코스</h2>
            <div className="course__body">
              <div className="wrap">
                <div className="course__top">
                  <div className="course__header">
                    <div className="course__linkbox">
                      <a href="./map.html">
                        <img src="/icon/map-gray.png" alt="" />
                      </a>
                      <a href="https://papago.naver.com/" target="_blank">
                        <img src="/icon/tr-gray.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                {me && me.myCourse.length ? (
                  <MainCourse /> // 등록된 코스가 있을 경우
                ) : (
                  <MainNoCourse />
                ) // 등록된 코스가 없을 경우
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;

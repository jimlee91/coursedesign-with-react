import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import MainHeader from '../components/MainHeader';
import TopLink from '../components/TopLink';

const index = () => {
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
                placeholder="홍길동님은 어디로 떠나시나요?"
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
            <h2 className="course__who">홍길동님의 코스</h2>
            <div className="course__body">
              <div className="wrap">
                {/* <div className="course__top">
                        <div className="course__header">
                            <div className="course__linkbox">
                                <a href="./map.html"><img src="/icon/map-gray.png" alt=""/></a>
                                <a href="https://papago.naver.com/" target="_blank"><img src="/icon/tr-gray.png" alt=""/></a>
                            </div>
                        </div>
                    </div>
                    <a href="/search.html">
                        <div className="nodata">
                            <img src="./icon/more-bigger.png" alt=""/>
                            <p>
                                코스를 등록해주세요!
                            </p>
                        </div>
                    </a> */}
                <div className="course__top">
                  <div className="course__header">
                    <h2 className="course__date">
                      2019.2.1 - 2.3{' '}
                      <a href="#//" onClick="showModal('changeShowCourse')">
                        변경
                      </a>
                    </h2>
                    <div className="course__linkbox">
                      <a href="#">
                        <img src="/icon/map-gray.png" alt="" />
                      </a>
                      <Link href="https://papago.naver.com/" prefetch={false}>
                        <a target="_blank">
                          <img src="/icon/tr-gray.png" alt="" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <h1 className="course__title">삿포로 여행</h1>
                </div>
                <div className="course__box">
                  <ul className="course__list">
                    <li className="course__section">
                      <div className="couse__day">
                        <button>1 Day</button>
                      </div>
                      <ul className="course__detail sortable" id="sortable">
                        <li className="course__detail-item">
                          <span className="course__detail-item__mover"></span>
                          <div className="course__detail-info">
                            <h3 className="course__detail-title">
                              비에이 버스투어
                            </h3>
                            <p>
                              삿포로역에서 7시 출포로역에서 7시 출포로역에서 7시
                              출발
                            </p>
                            <p>도시락 충전기 챙기기</p>
                          </div>
                          <div className="course__option">
                            <select name="" id="">
                              <option value="">길찾기</option>
                              <option value="">스토리</option>
                              <option value="">삭제</option>
                            </select>
                          </div>
                        </li>
                      </ul>
                      <div className="course__btnbox pd-0">
                        <a className="btn" href="./findLoad.html">
                          검색
                        </a>
                        <button className="btn">직접입력</button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;

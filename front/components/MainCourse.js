import React from 'react';
import Link from 'next/link';
const MainCourse = () => {
  return (
    <>
      <div className="course__top">
        <div className="course__header">
          <h2 className="course__date">
            2019.2.1 - 2.3{' '}
            <a href="#//" onClick="showModal('changeShowCourse')">
              변경
            </a>
          </h2>
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
                  <h3 className="course__detail-title">비에이 버스투어</h3>
                  <p>삿포로역에서 7시 출포로역에서 7시 출포로역에서 7시 출발</p>
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
    </>
  );
};

export default MainCourse;

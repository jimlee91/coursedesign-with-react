import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import SubHeader from '../components/SubHeader';
import CourseDetailTop from '../components/CourseDetailTop';

import { GET_COURSE_REQUEST } from '../reducers/course';
const courseDetail = () => {
  const dispatch = useDispatch();
  const { course } = useSelector(state => state.course);
  useEffect(() => {
    dispatch({
      type: GET_COURSE_REQUEST,
    });
  }, []);
  return (
    <>
      <div className="page courseDetail register">
        <SubHeader title={`여행일정`} />
        <CourseDetailTop
          thumbnail={course && course.thumbnail}
          author={course && course.author}
          title={course && course.title}
          hashtags={course && course.hashtags}
          bookmarks={course && course.bookmarks}
          likes={course && course.likes}
          shared={course && course.shared}
          startDate={course && course.startDate}
          endDate={course && course.endDate}
          mainCity={course && course.mainCity}
        />

        <div className="tab tab--courseDetail js-act1">
          <button className="js-active" id="btn-guide" data-tab="1">
            <span>
              <img src="/icon/courseDetail-tab1.png" alt="" />
            </span>{' '}
            일정
          </button>
          <button id="btn-course" data-tab="2">
            <span>
              <img src="/icon/courseDetail-tab2.png" alt="" />
            </span>{' '}
            비용
          </button>
          <button id="btn-trip" data-tab="3">
            <span>
              <img src="/icon/courseDetail-tab3.png" alt="" />
            </span>{' '}
            스토리
          </button>
          <Link href="/map">
            <a id="btn-food" data-tab="4">
              <span>
                <img src="/icon/courseDetail-tab4.png" alt="" />
              </span>{' '}
              지도
            </a>
          </Link>
          <Link href="/mypage">
            <a id="btn-house">
              <span>
                <img src="/icon/courseDetail-tab5.png" alt="" />
              </span>{' '}
              다운로드
            </a>
          </Link>
        </div>

        <div className="courseDetail__body">
          <div className="tab__view" id="tab-calendar">
            <div className="course__box">
              <ul className="course__list">
                <li className="course__section">
                  <div className="wrap">
                    <div className="couse__day">
                      <button>
                        1 Day <span>/ 11.30</span>
                      </button>
                    </div>
                    <ul className="course__detail sortable" id="">
                      <li className="course__detail-item">
                        <span className="course__detail-item__mover"></span>
                        <div className="course__detail-info">
                          <h3 className="course__detail-title">
                            비에이 버스투어
                          </h3>
                          <a href="#//" className="course__simple-Memo">
                            <span>메모하기+</span>
                            <p>
                              치앙마이 공항에 7시 도착
                              <br />
                              유심칩 구매
                            </p>
                          </a>
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
                  </div>
                </li>
              </ul>
              <div className="course__btnbox">
                <a className="btn" href="./findLoad.html">
                  검색
                </a>
                <button className="btn">직접입력</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default courseDetail;

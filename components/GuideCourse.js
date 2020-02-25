import React from 'react';

const GuideCourse = () => {
  return (
    <>
      <div id="guide__course" className="guide__view">
        <ul className="guide__guide-list">
          <li className="guide__guide-item">
            <a href="./courseDetail.html" className="wrap">
              <div className="guide__item-thumbnail">
                <span className="hasCourse active"></span>
              </div>
              <div className="guide__item-info guide__item-info--default">
                <span className="date">2019.06.21 ~ 2019.07.02</span>
                <h2>작은 숲 속에서 즐기는 커피 한잔</h2>
                <div className="hashtagBox">
                  <span className="hashtag">#해쉬태그</span>
                  <span className="hashtag">#해쉬태그</span>
                  <span className="hashtag">#해쉬태그</span>
                  <span className="hashtag">#해쉬태그</span>
                </div>
                <div className="guide__item-status status">
                  <span className="bookmark">20</span>
                  <span className="like">10</span>
                  <span className="share">12</span>

                  <span className="id">@Honggildong</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default GuideCourse;

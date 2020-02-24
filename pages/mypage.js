import React from 'react';

import MainHeader from '../components/MainHeader';
import TopLink from '../components/TopLink';

const mypage = () => {
  return (
    <>
      <MainHeader />
      <div class="page mypage">
        <TopLink />
        <div class="container">
          <div class="mypage__header">
            <div class="wrap">
              <div class="mypage__myinfo">
                <div class="thumbnail">
                  <img src="" alt="" id="viewThumb" />
                  <label for="">
                    <input type="file" id="getThumb" />
                  </label>
                </div>
                <div class="info">
                  <h2>홍 길 동</h2>
                </div>
              </div>
              <div class="mypage__state">
                <div class="row">
                  <a class="col" href="#//">
                    <h3>3</h3>
                    <p>코스</p>
                  </a>
                  <a class="col" href="./follow.html">
                    <h3>3</h3>
                    <p>팔로워</p>
                  </a>
                  <a class="col" href="./follow.html">
                    <h3>3</h3>
                    <p>팔로잉</p>
                  </a>
                </div>
                <a href="" class="btn-follow">
                  팔로잉
                </a>
              </div>
            </div>
          </div>
          <div class="tab tab--mypage js-act1">
            <button id="btn-Future" data-tab="1" class="js-active">
              마이코스
            </button>
            <button id="btn-Past" data-tab="2">
              북마크 코스
            </button>
          </div>

          <div id="guide__guide" class="guide__view">
            <ul class="guide__guide-list">
              <li class="guide__guide-item">
                <a href="./courseDetail.html" class="wrap">
                  <div class="guide__item-thumbnail">
                    <span class="hasCourse active"></span>
                  </div>
                  <div class="guide__item-info guide__item-info--default">
                    <h2>치앙마이 대표 명소 모음</h2>

                    <div class="guide__item-status status mtauto">
                      <span class="like-active">10</span>
                      <span class="download">12</span>

                      <span class="id">@Honggildong</span>
                    </div>

                    <div class="hashtagBox mt1">
                      <span class="hashtag">#해쉬태그</span>
                      <span class="hashtag">#해쉬태그</span>
                      <span class="hashtag">#해쉬태그</span>
                      <span class="hashtag">#해쉬태그</span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default mypage;

<MainHeader />;

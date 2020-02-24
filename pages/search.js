import React from 'react';

const search = () => {
  return (
    <>
      <div class="page citySearch">
        <form action="">
          <div class="header">
            <div class="wrap">
              <button class="history-back">뒤로가기</button>
              <div class="search">
                <input type="text" placeholder="여행 할 도시를 검색하세요." />
                <button type="submit">검색</button>
              </div>
            </div>
          </div>
        </form>
        <div class="citySearch__body">
          <div class="wrap">
            <div class="citySearch__section">
              <h2 class="citySearch__section-title">동남아시아</h2>
              <ul class="citySearch__list">
                <li class="citySearch__item">
                  <input type="hidden" name="" />
                  <a href="/guide">
                    <div class="citySearch__thumbnail">
                      <strong>LAOS</strong>
                      <span class="hasCourse active">코스유무</span>
                    </div>
                    <div class="citySearch__info">
                      <h3>라오스</h3>
                      <p>비엔티안, 방비엥, 루앙프라방</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default search;

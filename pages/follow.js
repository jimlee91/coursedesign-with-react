import React from 'react';
import MypageHeader from '../components/MypageHeader';
import SubHeader from '../components/SubHeader';

const follow = () => {
  return (
    <>
      <div className="page register follow">
        <SubHeader title={'팔로우'} />
        <MypageHeader />
        <div className="follow__Box">
          <ul className="follow__List">
            <li className="follow__item">
              <div className="wrap">
                <div className="follow__userThumbnail">
                  <img src="" alt="" />
                </div>
                <div className="follow__userInfo">
                  <h3 className="follow__userName">홍길동</h3>
                  <p className="follow__userNickname">@Honggildong</p>
                </div>
                <div className="follow__action">
                  <form action="">
                    <input type="hidden" />
                    <button className="">팔로우</button>
                  </form>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default follow;

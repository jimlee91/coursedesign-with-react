import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const MypageHeader = () => {
  const { me } = useSelector(state => state.user);
  return (
    <>
      <div className="mypage__header">
        <div className="wrap">
          <div className="mypage__myinfo">
            <div className="thumbnail">
              <img src={`${me && me.thumbnail}`} alt="" id="viewThumb" />
              <label htmlFor="">
                <input type="file" id="getThumb" />
              </label>
            </div>
            <div className="info">
              <h2>{me && me.nickName}</h2>
            </div>
          </div>
          <div className="mypage__state">
            <div className="row">
              <a className="col">
                <h3>{(me && me.myCourse.length) || 0}</h3>
                <p>코스</p>
              </a>
              <Link href="/follow">
                <a className="col">
                  <h3>{(me && me.Followers.length) || 0}</h3>
                  <p>팔로워</p>
                </a>
              </Link>
              <Link href="/follow">
                <a className="col">
                  <h3>{(me && me.Followings.length) || 0}</h3>
                  <p>팔로잉</p>
                </a>
              </Link>
            </div>
            {/* <a href="" className="btn-follow">
                  팔로잉
                </a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MypageHeader;

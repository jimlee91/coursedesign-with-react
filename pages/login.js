import React from 'react';

const login = () => {
  return (
    <>
      <div className="page login">
        <div className="wrap">
          <div className="login__logo">
            <img src="/main-logo.png" alt="" />
          </div>
          <h1 className="login__title">길을 만드는 사람들, 코스디자인</h1>

          <div className="login__sns">
            <a href="" className="btn color-yello bolder">
              카카오로 시작하기
            </a>
            <a href="" className="btn color-green bolder">
              페이스북으로 시작하기
            </a>
            <a href="" className="btn color-blue bolder">
              네이버로 시작하기
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;

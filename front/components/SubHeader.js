import React from 'react';
import { useRouter } from 'next/router';

const SubHeader = ({ title }) => {
  const router = useRouter();

  return (
    <>
      <div className="header bg-none">
        <div className="wrap">
          <button className="history-back black" onClick={() => router.back()}>
            뒤로가기
          </button>
          <h1 className="header__logo">{title}</h1>
        </div>
      </div>
    </>
  );
};

export default SubHeader;

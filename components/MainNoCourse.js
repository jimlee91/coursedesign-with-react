import React from 'react';
import Link from 'next/link';

const MainNoCourse = () => {
  return (
    <>
      <Link href={`/search`}>
        <a>
          <div className="nodata">
            <img src="/icon/more-bigger.png" alt="" />
            <p>코스를 등록해주세요!</p>
          </div>
        </a>
      </Link>
    </>
  );
};

export default MainNoCourse;

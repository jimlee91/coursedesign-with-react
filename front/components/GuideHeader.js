import React from 'react';
import { useRouter } from 'next/router';

const GuideHeader = React.memo(() => {
  const router = useRouter();
  // TODO: 도시 좋아요를 누른 컨텐츠 갯수 가져오기

  return (
    <>
      <div className="header bg-none">
        <div className="wrap">
          <button className="history-back" onClick={() => router.back()}>
            뒤로가기
          </button>
          <button
            className="hasSearch"
            onClick={() => router.push('/searchContent')}
          >
            검색
          </button>
          <button
            className="hasCourse"
            onClick={() => router.push('/searchContent')}
          >
            <span className="length">2</span>
          </button>
        </div>
      </div>
    </>
  );
});

export default GuideHeader;

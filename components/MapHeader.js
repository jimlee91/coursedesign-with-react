import React from 'react';
import { useRouter } from 'next/router';

const MapHeader = React.memo(() => {
  const router = useRouter();
  return (
    <>
      <div className="header">
        <div className="wrap padding0" style={{ justifyContent: 'flex-start' }}>
          <button
            className="close"
            onClick={() => router.back()}
            style={{ marginRight: '0' }}
          >
            뒤로가기
          </button>
          <h1 className="page__title" style={{ color: '#fff' }}>
            지도정보
          </h1>
        </div>
      </div>
    </>
  );
});

export default MapHeader;

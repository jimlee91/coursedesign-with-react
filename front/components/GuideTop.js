import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const GuideTop = React.memo(({ title, thumbnail }) => {
  return (
    <>
      <GuideTopBox className="guide__top" thumbnail={thumbnail}>
        <div className="wrap">
          <h1>{title}</h1>
          <p>치앙마이, 치앙라이, 빠이</p>

          <div className="guide__date">
            <Link href="/myCourse">
              <a className="state">일정 등록하기</a>
            </Link>
            <Link href="/myCourse">
              <ButtonMore>more</ButtonMore>
            </Link>
          </div>
        </div>
      </GuideTopBox>
    </>
  );
});

const GuideTopBox = styled.div`
  background: url(${props => props.thumbnail}) no-repeat center;
  background-size: cover;
`;
const ButtonMore = styled.a`
  width: 25px;
  height: 30px;
  background: url('/icon/guide-datemore.png') no-repeat right center;
  background-size: auto 15px;
  text-indent: -9999px;
  overflow: hidden;
`;

export default GuideTop;

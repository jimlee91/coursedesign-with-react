import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const CourseDetailTop = ({
  thumbnail,
  author,
  title,
  hashtags,
  bookmarks,
  likes,
  shared,
  startDate,
  endDate,
  mainCity,
}) => {
  return (
    <>
      <div className="courseDetail__header">
        <div className="wrap">
          <ThumbnailBox
            className="courseDetail__thumbnail"
            thumbnail={thumbnail}
          >
            <ThumbnailChange>+</ThumbnailChange>
          </ThumbnailBox>
          <InfoBox>
            <p className="courseDetail__id">
              <Link href={`/mypage`}>
                <a>@{author}</a>
              </Link>
            </p>
            <h1 className="courseDetail__title">{title}</h1>
            <div className="courseDetail__hashtag">
              {hashtags &&
                hashtags.map((hashtag, index) => <span>{hashtag}</span>)}
            </div>
            <div className="courseDetail__subtext">{mainCity}</div>
            <div className="courseDetail__date">
              {startDate} - {endDate}
            </div>
            <div className="courseDetail__status status">
              <span className="bookmark">{bookmarks && bookmarks.length}</span>
              <span className="like">{likes && likes.length}</span>
              <span className="share">{shared && shared.length}</span>
            </div>
          </InfoBox>
        </div>
      </div>
    </>
  );
};

const ThumbnailBox = styled.div`
  background: url(${props => props.thumbnail}) no-repeat center;
  background-size: cover;
  flex: none;
  width: 150px;
  border-radius: 0.75em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin-right: 20px;
  position: relative;
`;

const ThumbnailChange = styled.span`
  width: 30px;
  height: 30px;
  display: block;
  background: url('/icon/white-plus.png') #ff6155 no-repeat center;
  background-size: auto 10px;
  text-indent: -9999px;
  overflow: hidden;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  bottom: -15px;
  transform: translateX(-50%);
`;

const InfoBox = styled.div`
  flex: 1;
`;

export default CourseDetailTop;

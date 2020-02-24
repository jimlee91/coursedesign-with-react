import React from 'react';
import Link from 'next/link';

const CourseItem = ({ data }) => {
  return (
    <li className="guide__guide-item">
      <Link as={`/course/${data.id}`} href={`/courseDetail?id=${data.id}`}>
        <a className="wrap">
          <div className="guide__item-thumbnail">
            <img src={`${data.thumbnail}`} alt={``} />
            <span className="hasCourse"></span>
          </div>
          <div className="guide__item-info guide__item-info--default">
            <h2>{data.title}</h2>
            <div className="guide__item-status status mtauto">
              <span className="like-active">{data.likes.length}</span>
              <span className="download">{data.downloads.length}</span>
              <span className="id">{data.author}</span>
            </div>
            <div className="hashtagBox mt1">
              {data.hashTags.map((hashtag, index) => (
                <span className="hashtag" key={index}>
                  {hashtag}
                </span>
              ))}
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default CourseItem;

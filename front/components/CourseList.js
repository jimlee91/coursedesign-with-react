import React from 'react';

import CourseItem from './CourseItem';

const NoCourse = () => {
  const style = { textAlign: 'center', lineHeight: '150px' };
  return <li style={style}>등록된 코스가 없습니다.</li>;
};

const CourseList = ({ course }) => {
  return (
    <>
      <h1>{}</h1>
      <div id="guide__guide" className="guide__view">
        <ul className="guide__guide-list">
          {course.length ? (
            course.map((data, index) => {
              return <CourseItem data={data} key={data.id} />;
            })
          ) : (
            <NoCourse />
          )}
        </ul>
      </div>
    </>
  );
};
export default CourseList;

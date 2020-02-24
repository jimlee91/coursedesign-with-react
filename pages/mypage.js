import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import MainHeader from '../components/MainHeader';
import TopLink from '../components/TopLink';
import MypageHeader from '../components/MypageHeader';
import CourseList from '../components/CourseList';

const mypage = () => {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);
  const router = useRouter();

  return (
    <>
      <MainHeader />
      <div className="page mypage">
        <TopLink />
        <div className="container">
          <MypageHeader />
          <div className="tab tab--mypage">
            <Link href={'/mypage?case=mine'}>
              <a className={router.query.case === 'mine' ? 'active' : ''}>
                마이코스
              </a>
            </Link>
            <Link href={'/mypage?case=bookmark'}>
              <a className={router.query.case === 'bookmark' ? 'active' : ''}>
                북마크 코스
              </a>
            </Link>
          </div>
          {router.query.case === 'mine' ? (
            <CourseList course={me && me.myCourse} />
          ) : (
            <CourseList course={me && me.bookmarkCourse} />
          )}
        </div>
      </div>
    </>
  );
};

export default mypage;

<MainHeader />;

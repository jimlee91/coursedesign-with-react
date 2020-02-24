import React from 'react';
import Link from 'next/link';

const TopLink = () => {
  return (
    <>
      <nav className="topNav">
        <Link href="/">
          <a>
            <img src="/icon/map.png" alt="지도" />
          </a>
        </Link>
        <Link href="/mypage">
          <a>
            <img src="/icon/user.png" alt="유저" />
          </a>
        </Link>
        <Link href="/commerce">
          <a>
            <img src="/icon/ticket.png" className="ticket" alt="티켓" />
          </a>
        </Link>
      </nav>
    </>
  );
};

export default TopLink;

import React, { useState, useCallback } from 'react';

import GuideHeader from '../components/GuideHeader';
import GuideTop from '../components/GuideTop';
import ContentButton from '../components/ContentButton';
import GuideGuide from '../components/GuideGuide';
import GuideCourse from '../components/GuideCourse';
import GuideTrip from '../components/GuideTrip';
import GuideFood from '../components/GuideFood';
import GuideHotel from '../components/GuideHotel';
import GuideTicket from '../components/GuideTicket';

const guide = () => {
  const [selectedTab, setSelectedTab] = useState('guide');
  const onChangeTab = tab => {
    setSelectedTab(tab);
  };
  return (
    <>
      <div className="page guide">
        <GuideHeader />
        <GuideTop />
        <div className="tab tab--guide">
          <button onClick={() => onChangeTab('guide')}>
            <ContentButton icon={`/icon/guide-tab1.png`} text={`가이드`} />
          </button>
          <button onClick={() => onChangeTab('course')}>
            <ContentButton icon={`/icon/guide-tab2.png`} text={`코스`} />
          </button>
          <button onClick={() => onChangeTab('tour')}>
            <ContentButton icon={`/icon/guide-tab3.png`} text={`관광`} />
          </button>
          <button onClick={() => onChangeTab('food')}>
            <ContentButton icon={`/icon/guide-tab4.png`} text={`맛집`} />
          </button>
          <button onClick={() => onChangeTab('hotel')}>
            <ContentButton icon={`/icon/guide-tab5.png`} text={`숙소`} />
          </button>
          <button onClick={() => onChangeTab('ticket')}>
            <ContentButton icon={`/icon/guide-tab6.png`} text={`투어/티켓`} />
          </button>
        </div>
        <div className="guide__body">
          {selectedTab === 'guide' && <GuideGuide />}
          {selectedTab === 'course' && <GuideCourse />}
          {selectedTab === 'tour' && <GuideTrip />}
          {selectedTab === 'food' && <GuideFood />}
          {selectedTab === 'hotel' && <GuideHotel />}
          {selectedTab === 'ticket' && <GuideTicket />}
        </div>
      </div>
    </>
  );
};

export default guide;

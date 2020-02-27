import React, { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import GuideHeader from '../components/GuideHeader';
import GuideTop from '../components/GuideTop';
import ContentButton from '../components/ContentButton';
import GuideGuide from '../components/GuideGuide';
import GuideCourse from '../components/GuideCourse';
import GuideTrip from '../components/GuideTrip';
import GuideFood from '../components/GuideFood';
import GuideHotel from '../components/GuideHotel';
import GuideTicket from '../components/GuideTicket';

import { CITY_REQUEST } from '../reducers/cities';

const guide = () => {
  const dispatch = useDispatch();
  const { city } = useSelector(state => state.cities);
  const [selectedTab, setSelectedTab] = useState('guide');
  const onChangeTab = tab => {
    setSelectedTab(tab);
  };
  useEffect(() => {
    dispatch({
      type: CITY_REQUEST,
    });
  }, []);

  return (
    <>
      <div className="page guide">
        <GuideHeader />
        <GuideTop
          title={city && city.name}
          thumbnail={city && city.thumbnail}
        />
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
          {selectedTab === 'guide' && <GuideGuide data={city && city.guides} />}
          {selectedTab === 'course' && (
            <GuideCourse data={city && city.courses} />
          )}
          {selectedTab === 'tour' && <GuideTrip data={city && city.tours} />}
          {selectedTab === 'food' && <GuideFood data={city && city.foods} />}
          {selectedTab === 'hotel' && <GuideHotel data={city && city.hotels} />}
          {selectedTab === 'ticket' && (
            <GuideTicket data={city && city.tickets} />
          )}
        </div>
      </div>
    </>
  );
};

export default guide;

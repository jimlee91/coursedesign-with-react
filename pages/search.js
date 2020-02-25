import React, { useEffect, useState, memo, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { SEARCH_COUNTRIES_REQUEST } from '../reducers/cities';
import Spinner from '../components/Spinner';

const SearchItem = memo(({ city }) => {
  return (
    <>
      <li className="citySearch__item">
        <Link href={`/guide?city=${city.id}`} as={`/guide/${city.engName}`}>
          <a>
            <div className="citySearch__thumbnail">
              <img src={city.thumbnail} alt={city.name} />
              <strong>{city.engName}</strong>
              <span className="hasCourse active">코스유무</span>
            </div>
            <div className="citySearch__info">
              <h3>{city.name}</h3>
              <p>비엔티안, 방비엥, 루앙프라방</p>
            </div>
          </a>
        </Link>
      </li>
    </>
  );
});

const SearchSection = memo(({ country }) => {
  return (
    <>
      <div className="citySearch__section">
        <h2 className="citySearch__section-title">{country.name}</h2>
        <ul className="citySearch__list">
          {country.cities.map((city, index) => {
            return <SearchItem city={city} key={city.id} />;
          })}
        </ul>
      </div>
    </>
  );
});

const search = () => {
  const dispatch = useDispatch();
  const { searchingCities, countries } = useSelector(state => state.cities);
  const [searchText, setSearchText] = useState('');
  const router = useRouter();

  useEffect(() => {
    // 들어왔을때 전체 검색
    dispatch({
      type: SEARCH_COUNTRIES_REQUEST,
    });
  }, [countries]);

  const onChangeSearchText = useCallback(
    // 검색어 검색 시 키워드 포함 검색
    e => {
      setSearchText(e.target.value);
      setTimeout(() => {
        dispatch({
          type: SEARCH_COUNTRIES_REQUEST,
          data: {
            keyword: searchText,
          },
        });
      }, 1000);
    },
    [searchText],
  );

  return (
    <>
      <div className="page citySearch">
        <div className="header">
          <div className="wrap">
            <button className="history-back" onClick={() => router.back()}>
              뒤로가기
            </button>
            <div className="search">
              <input
                type="text"
                placeholder="여행 할 도시를 검색하세요."
                value={searchText}
                onChange={onChangeSearchText}
              />
              <button type="submit">검색</button>
            </div>
          </div>
        </div>
        <div className="citySearch__body">
          <div className="wrap">
            {searchingCities ? (
              <Spinner />
            ) : (
              countries.map((country, index) => {
                return <SearchSection country={country} key={country.id} />;
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default search;

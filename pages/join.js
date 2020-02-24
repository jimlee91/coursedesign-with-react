import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import styled from 'styled-components';

import Checkbox from '../components/Checkbox';
import FixedButton from '../components/FixedButton';
import { SIGN_UP_REQUEST } from '../reducers/user';

const join = () => {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);

  const [email, setEmail] = useState('');
  const [nickName, setNickName] = useState('');
  const [allCheck, setAllCheck] = useState(false);
  const [terms, setTerms] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showMarketing, setShowMarketing] = useState(false);

  // 회원가입 완료시 메인으로 이동
  useEffect(() => {
    if (me) {
      alert('회원가입이 완료됐습니다.');
      Router.push('/');
    }
  }, [me && me.id]);

  const onSubmitForm = useCallback(
    e => {
      e.preventDefault();
      if (!nickName) {
        return alert('닉네임을 입력해주세요!');
      }
      if (!terms) {
        return alert('서비스 이용약관에 동의해주세요!');
      }
      if (!privacy) {
        return alert('개인정보 수집 및 이용에 동의해주세요!');
      }
      dispatch({
        type: SIGN_UP_REQUEST,
        data: { email, nickName, marketing },
      });
    },
    [nickName, terms, privacy],
  );
  const onChangeEmail = e => {
    setEmail(e.target.value);
  };
  const onChangeNickname = e => {
    setNickName(e.target.value);
  };
  const onChangeAllCheck = useCallback(
    e => {
      setAllCheck(e.target.checked);
      setTerms(e.target.checked);
      setPrivacy(e.target.checked);
      setMarketing(e.target.checked);
    },
    [allCheck, terms, privacy, marketing],
  );
  const onChangeTerms = useCallback(
    e => {
      setTerms(e.target.checked);
    },
    [terms],
  );
  const onChangePrivacy = useCallback(
    e => {
      setPrivacy(e.target.checked);
    },
    [privacy],
  );

  const onChangeMarketing = useCallback(
    e => {
      setMarketing(e.target.checked);
    },
    [marketing],
  );

  const onToggleTerms = () => {
    setShowTerms(!showTerms);
  };
  const onTogglePrivacy = () => {
    setShowPrivacy(!showPrivacy);
  };
  const onToggleMarketing = () => {
    setShowMarketing(!showMarketing);
  };

  return (
    <>
      <div className="page join hasFixedButton">
        <div className="wrap">
          <div className="join__logo">
            <img src="/join-logo.png" alt="" />
          </div>
          <form onSubmit={onSubmitForm}>
            <div className="form join__form">
              <div className="form__row">
                <label htmlFor="email" className="form__title">
                  아이디 <span>(E-mail)</span>
                </label>
                <div className="form__box">
                  <input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    id="email"
                    required
                    readOnly
                    value={email}
                    onChange={onChangeEmail}
                  />
                </div>
              </div>
              <div className="form__row">
                <label htmlFor="nickname" className="form__title">
                  닉네임 <em>(필수)</em>
                </label>
                <div className="form__box">
                  <input
                    type="text"
                    placeholder="닉네임"
                    name="nickname"
                    id="nickname"
                    required
                    value={nickName}
                    onChange={onChangeNickname}
                  />
                </div>
              </div>
            </div>
            <div className="privacy join__privacy">
              <h2 className="privacy-text">이용약관</h2>
              <div className="privacy__row">
                <div className="privacy__title">
                  <Checkbox
                    name={`allCheck`}
                    value={allCheck}
                    onChange={onChangeAllCheck}
                    text={`이용약관 전체 동의`}
                    required={false}
                  />
                </div>
              </div>
              <div className="privacy__row">
                <div className="privacy__title">
                  <Checkbox
                    name={`terms`}
                    value={terms}
                    onChange={onChangeTerms}
                    text={`서비스 이용약관 동의`}
                    required={true}
                  />
                  <ToggleButton
                    className="privacy__dropdown"
                    type="button"
                    onClick={onToggleTerms}
                    toggle={showTerms}
                  >
                    서비스 이용약관 보기
                  </ToggleButton>
                </div>
                <div
                  className={`privacy__description ${
                    showTerms ? 'js-active' : ''
                  }`}
                ></div>
              </div>
              <div className="privacy__row">
                <div className="privacy__title">
                  <Checkbox
                    name={`privacy`}
                    value={privacy}
                    onChange={onChangePrivacy}
                    text={`개인정보 수집 및 이용 동의`}
                    required={true}
                  />
                  <ToggleButton
                    className="privacy__dropdown"
                    type="button"
                    onClick={onTogglePrivacy}
                    toggle={showPrivacy}
                  >
                    개인정보 수집 및 이용약관 보기
                  </ToggleButton>
                </div>
                <div
                  className={`privacy__description ${
                    showPrivacy ? 'js-active' : ''
                  }`}
                ></div>
              </div>
              <div className="privacy__row">
                <div className="privacy__title">
                  <Checkbox
                    name={`agreeMarketing`}
                    value={marketing}
                    onChange={onChangeMarketing}
                    text={`마케팅 정보 수집 및 활용 동의`}
                    required={false}
                  />
                  <ToggleButton
                    className="privacy__dropdown"
                    type="button"
                    onClick={onToggleMarketing}
                    toggle={showMarketing}
                  >
                    마케팅 정보 수집 및 활용약관 보기
                  </ToggleButton>
                </div>
                <div
                  className={`privacy__description ${
                    showMarketing ? 'js-active' : ''
                  }`}
                ></div>
              </div>
            </div>
            <FixedButton text={`회원가입`} loading={true} />
          </form>
        </div>
      </div>
    </>
  );
};

const ToggleButton = styled.button`
  width: 45px;
  height: 45px;
  text-indent: -9999px;
  overflow: hidden;
  background: url(${`/icon/dropdown.png`}) no-repeat center;
  background-size: 15px auto;
  transform: ${props => (props.toggle ? 'rotate(180deg)' : '')};
`;

export default join;

import React from 'react';

const join = () => {
  return (
    <>
      <div class="page join hasFixedButton">
        <div class="wrap">
          <div class="join__logo">
            <img src="/join-logo.png" alt="" />
          </div>
          <form>
            <div class="form join__form">
              <div class="form__row">
                <label for="email" class="form__title">
                  아이디 <span>(E-mail)</span>
                </label>
                <div class="form__box">
                  <input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    id="email"
                    required
                    readonly
                    value="2eonhworking@gmail.com"
                  />
                </div>
              </div>
              <div class="form__row">
                <label for="nickname" class="form__title">
                  닉네임 <em>(필수)</em>
                </label>
                <div class="form__box">
                  <input
                    type="text"
                    placeholder="닉네임"
                    name="nickname"
                    id="nickname"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="privacy join__privacy">
              <h2 class="privacy-text">이용약관</h2>
              <div class="privacy__row">
                <div class="privacy__title">
                  <label class="checkbox">
                    <input
                      type="checkbox"
                      id="all-prv-check"
                      onchange="allCheck()"
                    />
                    <span></span> 이용약관 전체 동의
                  </label>
                </div>
              </div>
              <div class="privacy__row">
                <div class="privacy__title">
                  <label class="checkbox">
                    <input type="checkbox" id="prv1" />
                    <span></span> 서비스 이용약관 동의 <em>(필수)</em>
                  </label>
                  <button class="privacy__dropdown" type="button">
                    서비스 이용약관 보기
                  </button>
                </div>
                <div class="privacy__description"></div>
              </div>
              <div class="privacy__row">
                <div class="privacy__title">
                  <label class="checkbox">
                    <input type="checkbox" id="prv2" />
                    <span></span> 개인정보 수집 및 이용 동의 <em>(필수)</em>
                  </label>
                  <button class="privacy__dropdown" type="button">
                    개인정보 수집 및 이용약관 보기
                  </button>
                </div>
                <div class="privacy__description"></div>
              </div>
              <div class="privacy__row">
                <div class="privacy__title">
                  <label class="checkbox" for="agreeMarketing">
                    <input
                      type="checkbox"
                      id="agreeMarketing"
                      name="agreeMarketing"
                    />
                    <span></span> 마케팅 정보 수집 및 활용 동의 (선택)
                  </label>
                  <button class="privacy__dropdown" type="button">
                    마케팅 정보 수집 및 활용약관 보기
                  </button>
                </div>
                <div class="privacy__description"></div>
              </div>
            </div>

            <div class="fixed-btnbox">
              <button
                class="btn bolder"
                type="submit"
                id="submitButton"
                disabled="disabled"
              >
                회원가입
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default join;

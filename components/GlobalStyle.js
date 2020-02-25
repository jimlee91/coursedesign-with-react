import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* variable */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  line-height: 1.25em;
  -webkit-box-sizing: border-box;
  box-sizing: border-box; }

h1, h2, h3, h4, h5, h6 {
  font-size: 1rem; }

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block; }

img {
  max-width: 100%; }

ol, ul {
  list-style: none; }

blockquote, q {
  quotes: none; }

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none; }

table {
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  min-width: 100%; }

tr, th, td {
  vertical-align: middle; }

a, a:active, a:visited, a:hover {
  text-decoration: none;
  color: #333; }

html, body {
  font-size: 14px;
  color: #333;
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif; }

.wrapper {
  width: 100%;
  margin: 0 auto;
  max-width: 768px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto; }

.wrap {
  width: 100%;
  max-width: 768px;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  margin: 0 auto;
  position: relative;
  padding: 0 1em; }
  .wrap.padding0 {
    padding: 0; }

.wrap:after {
  content: '';
  display: block;
  clear: both; }

.float-left {
  float: left; }

.float-right {
  float: right; }

.clearfix:after {
  content: '';
  display: block;
  clear: both; }

.blind {
  position: absolute;
  left: 0;
  top: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
  opacity: 0; }

.text-center {
  text-align: center !important; }

.text-left {
  text-align: left !important; }

.text-right {
  text-align: right !important; }

.text-ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%; }

.d-flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex; }

/* ----------------------------------------------------------------------------------------------------
Super Form Reset
A couple of things to watch out for:
- IE8: If a text input doesn't have padding on all sides or none the text won't be centered.
- The default border sizes on text inputs in all UAs seem to be slightly different. You're better off using custom borders.
- You NEED to set the font-size and family on all form elements
- Search inputs need to have their appearance reset and the box-sizing set to content-box to match other UAs
- You can style the upload button in webkit using ::-webkit-file-upload-button
- ::-webkit-file-upload-button selectors can't be used in the same selector as normal ones. FF and IE freak out.
- IE: You don't need to fake inline-block with labels and form controls in IE. They function as inline-block.
- By turning off ::-webkit-search-decoration, it removes the extra whitespace on the left on search inputs
----------------------------------------------------------------------------------------------------*/
input,
label,
select,
button,
textarea {
  margin: 0;
  border: 0;
  padding: 0;
  display: inline-block;
  vertical-align: middle;
  white-space: normal;
  background: none;
  line-height: 1;
  font-size: 1rem;
  border-radius: 0; }

/* Remove the stupid outer glow in Webkit */
input:focus {
  outline: 0; }

/* Box Sizing Reset
-----------------------------------------------*/
/* All of our custom controls should be what we expect them to be */
input,
textarea {
  -webkit-box-sizing: content-box;
  box-sizing: content-box; }

/* These elements are usually rendered a certain way by the browser */
button,
input[type=reset],
input[type=button],
input[type=submit],
input[type=checkbox],
input[type=radio],
select {
  -webkit-box-sizing: border-box;
  box-sizing: border-box; }

/* Text Inputs
-----------------------------------------------*/
/* Button Controls
-----------------------------------------------*/
input[type=checkbox],
input[type=radio] {
  width: 13px;
  height: 13px; }

/* File Uploads
-----------------------------------------------*/
/* Search Input
-----------------------------------------------*/
/* Make webkit render the search input like a normal text field */
input[type=search] {
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box; }

/* Turn off the recent search for webkit. It adds about 15px padding on the left */
::-webkit-search-decoration {
  display: none; }

/* Buttons
-----------------------------------------------*/
button,
input[type="reset"],
input[type="button"],
input[type="submit"] {
  /* Fix IE7 display bug */
  overflow: visible;
  width: auto;
  outline-width: 0; }

/* IE8 and FF freak out if this rule is within another selector */
::-webkit-file-upload-button {
  padding: 0;
  border: 0;
  background: none; }

/* Textarea
-----------------------------------------------*/
textarea {
  /* Move the label to the top */
  vertical-align: top;
  /* Turn off scroll bars in IE unless needed */
  overflow: auto; }

/* Selects
-----------------------------------------------*/
select[multiple] {
  /* Move the label to the top */
  vertical-align: top; }

.background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 8000; }

.page {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  position: relative; }
  .page.hasFixedButton {
    padding-bottom: 80px; }
  .page .page__title {
    margin-right: auto;
    color: #fff;
    font-size: 16px; }

.container {
  position: relative;
  z-index: 1000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  height: 100%; }

.hasCourse {
  position: absolute;
  right: 1em;
  bottom: 1em;
  background: url(${'/icon/heart.png'}) no-repeat center;
  width: 23px;
  height: 20px;
  background-size: 100% 100%;
  text-indent: -9999px;
  overflow: hidden; }
  .hasCourse.active {
  background: url(${'/icon/heart-active.png'}) no-repeat center;
    background-size: 100% 100%; }

/* plugin */
/* Slider */
.slick-slider {
  position: relative;
  display: block;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent; }

.slick-list {
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0; }

.slick-list:focus {
  outline: none; }

.slick-list.dragging {
  cursor: pointer;
  cursor: hand; }

.slick-slider .slick-track,
.slick-slider .slick-list {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0); }

.slick-track {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  margin-left: auto;
  margin-right: auto; }

.slick-track:before,
.slick-track:after {
  display: table;
  content: ''; }

.slick-track:after {
  clear: both; }

.slick-loading .slick-track {
  visibility: hidden; }

.slick-slide {
  display: none;
  float: left;
  height: 100%;
  min-height: 1px; }

[dir='rtl'] .slick-slide {
  float: right; }

.slick-slide img {
  display: block; }

.slick-slide.slick-loading img {
  display: none; }

.slick-slide.dragging img {
  pointer-events: none; }

.slick-initialized .slick-slide {
  display: block; }

.slick-loading .slick-slide {
  visibility: hidden; }

.slick-vertical .slick-slide {
  display: block;
  height: auto;
  border: 1px solid transparent; }

.slick-arrow.slick-hidden {
  display: none; }

/* components */
#loading {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9000;
  color: #fff;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  display: none; }

#popupLayout {
  display: none; }

#popup {
  position: fixed;
  top: 10%;
  width: 90%;
  left: 50%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  background: #fff;
  z-index: 9000;
  border-radius: 10px;
  overflow: hidden; }
  #popup .popup__body {
    padding: 2em;
    padding-bottom: 0; }
  #popup .popup__btnbox {
    margin-top: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex; }
    #popup .popup__btnbox .btn {
      -webkit-box-flex: 1;
          -ms-flex: 1;
              flex: 1;
      height: 60px;
      color: #b2b2b2;
      border-radius: 0; }

.header {
  background: #4e8df5;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 5000; }
  .header.bg-none {
    background: none;
    -webkit-transition: all .3s;
    transition: all .3s; }
    .header.bg-none.active {
      background: #4e8df5; }
  .header .wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
    width: 100%;
    height: 50px; }
  .header .hasSearch {
    width: 45px;
    height: 45px;
    text-indent: -9999px;
    overflow: hidden;
    background: url(${'/icon/search.png'}) no-repeat center;
    text-indent: -9999px;
    overflow: hidden;
    background-size: 20px auto;
    margin-left: auto; }
  .header .history-back {
    width: 45px;
    height: 45px;
    text-indent: -9999px;
    overflow: hidden;
    background: url(${'/icon/back.png'}) no-repeat 5px center;
    text-indent: -9999px;
    overflow: hidden;
    background-size: 20px auto;
    margin-right: auto; }
    .header .history-back.black {
      background: url(${'/icon/back-black.png'}) no-repeat center;
      text-indent: -9999px;
      overflow: hidden;
      background-size: 20px auto; }
  .header .close {
    width: 45px;
    height: 45px;
    text-indent: -9999px;
    overflow: hidden;
    background: url(${'/icon/close.png'}) no-repeat center;
    text-indent: -9999px;
    overflow: hidden;
    background-size: 15px auto;
    margin-right: auto; }
  .header .check {
    width: 45px;
    height: 45px;
    text-indent: -9999px;
    overflow: hidden;
    background: url(${'/icon/check.png'}) no-repeat center;
    text-indent: -9999px;
    overflow: hidden;
    background-size: 23px auto;
    margin-left: auto; }
  .header .header__menu {
    width: 23px;
    height: 18px;
    background: url(${'/icon/menu.png'}) no-repeat center;
    text-indent: -9999px;
    overflow: hidden;
    background-size: 100% 100%; }

.header__logo {
  font-size: 16px;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%); }
  .header__logo img {
    height: 30px; }

.search {
  width: 100%;
  height: 45px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 2em;
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex; }
  .search input {
    height: 100%;
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1;
    padding: 0 1em;
    color: #fff; }
    .search input::-webkit-input-placeholder {
      color: #fff; }
    .search input::-moz-placeholder {
      color: #fff; }
    .search input:-ms-input-placeholder {
      color: #fff; }
    .search input::-ms-input-placeholder {
      color: #fff; }
    .search input::placeholder {
      color: #fff; }
  .search button {
    text-indent: -9999px;
    overflow: hidden;
    width: 45px;
    height: 45px;
    background: url(${'/icon/search.png'}) no-repeat center;
    background-size: 15px auto; }

.mapSearchList li {
  border-bottom: 1px solid #dcdcdc; }

.mapSearchList a {
  height: 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  background: url("../images/icon/pin.png") no-repeat 10px center;
  background-size: auto 1.25em;
  padding-left: 2em;
  padding-right: 10px; }

.btn {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  width: 100%;
  height: 45px;
  border-radius: 2em;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center; }
  .btn.bolder {
    font-weight: 600; }
  .btn.color-default {
    background: rgba(255, 255, 255, 0.25);
    color: #fff; }
  .btn.color-yello {
    background: #ffdc37;
    color: #333; }
  .btn.color-blue {
    background: #1dc602;
    color: #fff; }
  .btn.color-green {
    background: #4065b3;
    color: #fff; }

.fixed-btnbox {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex; }
  .fixed-btnbox.round {
    width: 50px;
    height: 50px;
    left: auto;
    right: 1em;
    bottom: 1em;
    border-radius: 50%;
    overflow: hidden; }
  .fixed-btnbox .btn {
    border-radius: 0;
    background: #ff6155;
    color: #fff;
    height: 50px; }
    .fixed-btnbox .btn[disabled] {
      background: #eee;
      color: #333; }
    .fixed-btnbox .btn.blue {
      background: #4e8df5; }
    .fixed-btnbox .btn.white {
      background: #fff;
      color: #333; }

.default__form,
.join__form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column; }
  .default__form .form__row,
  .join__form .form__row {
    margin-bottom: 10px;
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column; }
    .default__form .form__row:last-child,
    .join__form .form__row:last-child {
      margin-bottom: 0; }
    .default__form .form__row .form__title,
    .join__form .form__row .form__title {
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.3em;
      margin-bottom: 5px; }
      .default__form .form__row .form__title span,
      .join__form .form__row .form__title span {
        color: #b2b2b2; }
      .join__form .form__row .form__title em {
        font-style: normal; color:#ff6155;font-weight: 400; }
    .default__form .form__row .form__box,
    .join__form .form__row .form__box {
      border-bottom: 1px solid #b9b9b9;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      position: relative; }
      .default__form .form__row .form__box input,
      .join__form .form__row .form__box input {
        height: 40px;
        -webkit-box-flex: 1;
            -ms-flex: 1;
                flex: 1; }
      .default__form .form__row .form__box .uplink,
      .join__form .form__row .form__box .uplink {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%; }
    .default__form .form__row .form__imgbox,
    .join__form .form__row .form__imgbox {
      width: 100%;
      height: 200px;
      border: 1px solid #b9b9b9;
      border-radius: 1em;
      position: relative;
      background: url("../images/icon/img-more.png") no-repeat center;
      background-size: auto 50px;
      overflow: hidden; }
      .default__form .form__row .form__imgbox input,
      .join__form .form__row .form__imgbox input {
        opacity: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 500; }
      .default__form .form__row .form__imgbox img,
      .join__form .form__row .form__imgbox img {
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
           object-fit: cover;
        -o-object-position: center;
           object-position: center; }

.privacy {
  margin-top: 30px; }
  .privacy .privacy-text {
    font-size: 18px;
    margin-bottom: 10px; }
  .privacy .privacy__title {
    height: 45px;
    border-bottom: 1px solid #e5e5e5;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between; }
  .privacy .privacy__description {
    display: none;
    color: #666;
    padding: 10px;
    height: 130px;
    overflow: auto;
    font-size: 12px;
    line-height: 1.3em;
    border-bottom: 1px solid #e5e5e5; }
    .privacy .privacy__description.js-active {
      display: block; }
    .privacy .privacy__dropdown.js-active {
      -webkit-transform: rotate(180deg);
              transform: rotate(180deg); }

  .checkbox em {
    font-style: normal;
    color: #ff6155;
    margin-left: 5px; }

.tab {
  background: #f6f6f6;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding-bottom: 2px;
  position: relative; }
  .tab.tab--guide:after {
    width: 16.666%; }
  .tab.tab--guide.js-act1:after {
    left: 0; }
  .tab.tab--guide.js-act2:after {
    left: 16.666%; }
  .tab.tab--guide.js-act3:after {
    left: 33.333%; }
  .tab.tab--guide.js-act4:after {
    left: 49.999%; }
  .tab.tab--guide.js-act5:after {
    left: 66.666%; }
  .tab.tab--guide.js-act6:after {
    left: 83.333%; }
  .tab.tab--detail:after {
    width: 33.3333%; }
  .tab.tab--detail.js-act1:after {
    left: 0; }
  .tab.tab--detail.js-act2:after {
    left: 33.3333%; }
  .tab.tab--detail.js-act3:after {
    left: 66.6666%; }
  .tab.tab--detail button {
    height: 60px; }
    .tab.tab--detail button img {
      height: 25px; }
  .tab.tab--review:after {
    width: 50%; }
  .tab.tab--review.js-act1:after {
    left: 0; }
  .tab.tab--review.js-act2:after {
    left: 50%; }
  .tab.tab--review button {
    height: 60px;
    font-size: 16px;
    font-weight: 600; }
  .tab.tab--courseDetail {
    background: #fff; }
    .tab.tab--courseDetail:after {
      width: 20%; }
    .tab.tab--courseDetail.js-act1:after {
      left: 0; }
    .tab.tab--courseDetail.js-act2:after {
      left: 20%; }
    .tab.tab--courseDetail.js-act3:after {
      left: 40%; }
    .tab.tab--courseDetail.js-act4:after {
      left: 60%; }
    .tab.tab--courseDetail.js-act5:after {
      left: 80%; }
  .tab.tab--course:after {
    width: 50%; }
  .tab.tab--course.js-act1:after {
    left: 0; }
  .tab.tab--course.js-act2:after {
    left: 50%; }
  .tab.tab--course button {
    font-size: 14px; }
  .tab.tab--mypage {
    background: #fff;
    border-bottom: 1px solid #c9c9c9; }
    .tab.tab--mypage:after {
      width: 50%; }
    .tab.tab--mypage.js-act1:after {
      left: 0; }
    .tab.tab--mypage.js-act2:after {
      left: 50%; }
    .tab.tab--mypage a {
      font-size: 14px; position:relative;}
      .tab.tab--mypage a.active:after {
        position: absolute;
        z-index: 2;
      bottom: -2px;
      background: #4e8df5;
      content: '';
      height: 2px;
      width: 100%;
      display: block;
      }
  .tab.tab--map {
    background: #fff;
    border-bottom: 1px solid #c9c9c9; }
    .tab.tab--map:after {
      width: 33.3333%; }
    .tab.tab--map.js-act1:after {
      left: 0; }
    .tab.tab--map.js-act2:after {
      left: 33.333%; }
    .tab.tab--map.js-act3:after {
      left: 66.666%; }
    .tab.tab--map button {
      height: 45px;
      font-size: 14px; }
  .tab a,
  .tab button {
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1;
    height: 70px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    font-size: 12px;
    opacity: .6; }
    .tab a.js-active,
    .tab button.js-active {
      opacity: 1; }
    .tab a span,
    .tab button span {
      height: 25px;
      margin-bottom: 5px; }
      .tab a span img,
      .tab button span img {
        max-height: 100%; }

.course__btnbox {
  margin-top: 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 0 1em; }
  .course__btnbox .btn {
    background: #f6f6f6;
    border-radius: .75em;
    width: 48%;
    -webkit-box-flex: 0;
        -ms-flex: none;
            flex: none;
    height: 40px; }

.cost__item {
  padding-left: 25px;
  border-bottom: 1px solid #dfdfdf;
  margin-top: 1.5em;
  padding-bottom: 1.5em; }
  .cost__item.cost__item--fly {
    background: url("../images/icon/fly.png") no-repeat left 3px;
    background-size: auto 1.25em; }
  .cost__item.cost__item--home {
    background: url("../images/icon/cost-home.png") no-repeat left 5px;
    background-size: auto 1.125em; }
  .cost__item.cost__item--ticket {
    background: url("../images/icon/cost-ticket.png") no-repeat left 5px;
    background-size: auto .875em; }
  .cost__item.cost__item--transportation {
    background: url("../images/icon/cost-bus.png") no-repeat left 5px;
    background-size: auto 1em; }
  .cost__item.cost__item--food {
    background: url("../images/icon/cost-food.png") no-repeat left 3px;
    background-size: auto 1.25em; }
  .cost__item.cost__item--etc {
    background: url("../images/icon/cost-etc.png") no-repeat left 3px;
    background-size: auto 1.25em; }

.cost__title {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center; }
  .cost__title h2 {
    font-size: 18px; }

.cost__item-totalPrice {
  margin-left: auto;
  font-size: 18px;
  color: #4e8df5;
  margin-right: 15px; }
  .cost__item-totalPrice span {
    color: #333; }
  .cost__item-totalPrice.smaller {
    font-size: 14px; }

.cost__detailBox {
  display: none; }

.cost__detailItem {
  margin-top: 1em; }
  .cost__detailItem li {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin-bottom: 10px; }
  .cost__detailItem h3 {
    font-size: 14px;
    font-weight: 400; }
  .cost__detailItem h4 {
    font-weight: 400; }
  .cost__detailItem .dash {
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1;
    height: 1px;
    border-top: 1px dashed #d0d0d0;
    margin: 0 10px; }
  .cost__detailItem .delete {
    color: #ff6155;
    width: 45px; }

.more-cost {
  margin-top: 1.5em;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center; }
  .more-cost button {
    height: 40px;
    width: 40px;
    margin-left: -25px;
    border-radius: 50%;
    background: url("../images/icon/white-plus.png") #4e8df5 no-repeat center;
    background-size: auto 15px; }

.course__option .js-toggle-cost-detail {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 50; }

.story {
  margin-top: 1.5em; }

.story__item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  margin-bottom: 1.5em; }
  .story__item a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex; }

.story__thumb {
  width: 120px;
  height: 80px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;
  border-radius: .75em;
  -webkit-box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.3);
          box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.3);
  -webkit-box-flex: 0;
      -ms-flex: none;
          flex: none; }

.story__info {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  padding-left: 15px;
  max-width: calc(100% - 135px);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column; }
  .story__info .story__location {
    color: #b2b2b2;
    font-size: 1rem;
    margin-bottom: 3px; }
  .story__info .story__title {
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%; }
  .story__info .story__detail {
    margin-top: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex; }
  .story__star {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center; }
    .story__star img {
      height: 1em;
      margin-right: 2px; }
    .story__star span {
      color: #b2b2b2;
      margin-left: 5px;
      font-size: 1rem; }
  .story__info .story__heart {
    margin-left: 1.5em;
    padding-left: 1.25em;
    background: url("../images/icon/heart-active.png") no-repeat left center;
    background-size: auto .875em;
    color: #b2b2b2;
    font-size: 1rem; }

.story__footer {
  border-top: 1px solid #c9c9c9;
  margin-top: 1.5em;
  padding-top: 1em;
  text-align: center; }
  .story__footer img {
    height: 1em;
    margin-right: 3px; }
  .story__footer button:not('.slick-arrow') {
    width: 100%;
    height: 60px;
    color: #b2b2b2;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center; }

.reviewList {
  background: #ebebeb;
  padding: 1em 0; }

.reviewItem {
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
  margin-bottom: 1em; }
  .reviewItem:last-child {
    margin-bottom: 0; }
  .reviewItem .reviewItem__header {
    padding: 1em 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center; }
  .reviewItem .reviewItem__userImg {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden; }
    .reviewItem .reviewItem__userImg img {
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
         object-fit: cover;
      -o-object-position: center;
         object-position: center; }
  .reviewItem .revieItem__userInfo {
    width: calc(100% - 70px);
    padding-left: 10px; }
    .reviewItem .revieItem__userInfo h3 {
      font-size: 1.125rem; }
  .reviewItem .reviewItem__star {
    margin-top: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center; }
    .reviewItem .reviewItem__star img {
      height: 1em;
      margin-right: 2px; }
    .reviewItem .reviewItem__star span {
      color: #b2b2b2;
      margin-left: 5px;
      font-size: 1rem; }
  .reviewItem .reviewItem__body {
    padding: 1em 0;
    border-top: 1px solid #c9c9c9; }
  .reviewItem .reviewItem__date {
    color: #b2b2b2;
    margin-bottom: 10px; }
  .reviewItem .reviewItem__description {
    word-break: keep-all;
    line-height: 1.3em; }
    .reviewItem .reviewItem__description button {
      color: #4f8df5;
      background: url("../images/icon/arrow-bottom.png") no-repeat right center;
      background-size: auto 7px;
      padding-right: 1.125em; }
  .reviewItem .reviewItem__thumb {
    margin-top: 1em;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap; }
    .reviewItem .reviewItem__thumb div {
      -webkit-box-flex: 1;
          -ms-flex: 1;
              flex: 1;
      height: 70px;
      margin-right: 10px;
      border-radius: 10px;
      overflow: hidden; }
      .reviewItem .reviewItem__thumb div:last-child {
        margin-right: 0; }
      .reviewItem .reviewItem__thumb div img {
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
           object-fit: cover;
        -o-object-position: center;
           object-position: center; }

.topNav {
  height: 40px;
  background: #4e8df5;
  width: 100%;
  position: fixed;
  left: 0;
  top: 50px;
  border-top: 1px solid #c4d9fc;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  z-index: 1500; }
  .topNav a {
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    border-right: 1px solid #c4d9fc; }
    .topNav a:last-child {
      border-right: 0; }
  .topNav img {
    height: 20px; }
    .topNav img.ticket {
      height: 17px; }

.page.main {
  background: #ebebeb;
  padding-top: 90px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box; }
  .page.main:after {
    content: '';
    display: block;
    width: 100%;
    height: 340px;
    background: #4e8df5;
    position: absolute;
    left: 0;
    top: 0px;
    z-index: 0; }
  .page.main .search {
    max-width: calc(100% - 60px);
    margin: 0 auto;
    margin-top: 30px; }

.traverLocation {
  margin-top: 30px; }
  .traverLocation .slider__item {
    padding-bottom: 2em;
    opacity: .8; }
    .traverLocation .slider__item a {
      width: 200px;
      height: 250px;
      border-radius: 10px;
      overflow: hidden;
      background: #ccc;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      color: #fff;
      padding: 20px 15px;
      margin: 0 auto;
      -webkit-transform: scale(0.9);
              transform: scale(0.9);
      -webkit-transition: all .5s;
      transition: all .5s;
      -webkit-box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
              box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
      position: relative;
      z-index: 500; }
      .traverLocation .slider__item a h1 {
        font-size: 25px; }
      .traverLocation .slider__item a p {
        font-size: 1rem;
        letter-spacing: .1em;
        margin-top: 5px; }
  .traverLocation .slick-center .slider__item {
    opacity: 1; }
  .traverLocation .slick-center .slider__item a {
    -webkit-transform: scale(1);
            transform: scale(1); }
  .traverLocation .slick-arrow {
    z-index: 1000;
    width: 15px;
    height: 25px;
    display: block;
    position: absolute;
    background: url("../images/icon/arrow-right.png") no-repeat center;
    background-size: 100% 100%;
    text-indent: -9999px;
    overflow: hidden;
    top: 50%;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%); }
  .traverLocation .slick-next {
    right: 10%; }
  .traverLocation .slick-prev {
    left: 10%;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
    background: url("../images/icon/arrow-left.png") no-repeat center;
    background-size: 100% 100%; }

.course {
  margin-top: 30px;
  -webkit-box-flex: 0;
      -ms-flex: none;
          flex: none; }

.course__who {
  padding: 0 20px;
  font-size: 24px;
  font-weight: 900; }

.course__body {
  margin-top: 10px;
  background: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px; }
  .course__body .wrap {
    padding: 20px; }

.nodata {
  padding: 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center; }
  .nodata img {
    height: 50px; }
  .nodata p {
    font-size: 1rem;
    color: #000;
    opacity: .4;
    margin-top: 1em; }

.course__header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: baseline;
      -ms-flex-align: baseline;
          align-items: baseline; }

.course__date {
  font-size: 18px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: baseline;
      -ms-flex-align: baseline;
          align-items: baseline; }
  .course__date a {
    font-size: 12px;
    color: #ff6155;
    margin-left: 10px; }

.course__linkbox {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: auto; }
  .course__linkbox a {
    margin-left: 16px; }
  .course__linkbox img {
    height: 20px; }

.course__box {
  padding-bottom: 30px; }

.course__title {
  margin-top: 9px;
  font-size: 21px;
  font-weight: 700; }

.course__section {
  margin-bottom: 30px; }
  .course__section:last-child {
    margin-bottom: 0; }

  .couse__day{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .couse__day .day-const{
    font-size: 18px;
  }
.couse__day button {
  font-size: 35px;
  font-weight: 700;
  padding-right: 25px;
  background: url("../images/icon/day-arrow.png") no-repeat right 70%;
  background-size: auto 10px;
  line-height: 1.5em; }
  .couse__day button span {
    font-size: 20px;
    font-weight: 400; }

.course__detail {
  margin-top: 20px;
  display: none; }

.course__detail-item {
  padding-bottom: 20px;
  padding-left: 40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  position: relative; }
  .course__detail-item:last-child {
    margin-bottom: 0; }
  .course__detail-item__mover {
    position: absolute;
    left: 0;
    z-index: 20;
    top: 0px;
    width: 25px;
    height: 25px;
    background: #ff6155;
    content: '';
    display: block;
    border-radius: 50%; }

.course__detail-info {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  max-width: calc(100% - 50px); }
  .course__detail-info .course__detail-title {
    font-size: 18px;
    margin-bottom: 10px; }
  .course__detail-info p {
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.5em; }

.course__option {
  -webkit-box-flex: 0;
      -ms-flex: none;
          flex: none;
  width: 45px;
  height: 25px;
  background: #ededed;
  border-radius: 2em;
  position: relative; }
  .course__option:before, .course__option:after {
    width: 8px;
    height: 8px;
    content: '';
    display: block;
    background: #bebebe;
    border-radius: 50%;
    position: absolute;
    top: 8px; }
  .course__option:before {
    left: 10px; }
  .course__option:after {
    right: 10px; }
  .course__option select {
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%; }

.page.login {
  padding: 0;
  height: 100vh;
  background: #4e8df5; }
  .page.login .wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    padding: 0 20px;
    height: 100%; }

.login__logo {
  max-width: 70%;
  margin: 0 auto;
  padding-top: 15%; }
  .login__logo img {
    width: 100%; }

.login__form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  margin-top: 15%; }
  .login__form .form__row {
    margin-top: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0 10px; }
    .login__form .form__row input {
      -webkit-box-flex: 1;
          -ms-flex: 1;
              flex: 1;
      width: 100%;
      border-bottom: 1px solid #fff;
      height: 40px;
      color: #fff; }
      .login__form .form__row input::-webkit-input-placeholder {
        color: #fff; }
      .login__form .form__row input::-moz-placeholder {
        color: #fff; }
      .login__form .form__row input:-ms-input-placeholder {
        color: #fff; }
      .login__form .form__row input::-ms-input-placeholder {
        color: #fff; }
      .login__form .form__row input::placeholder {
        color: #fff; }
  .login__form .form__btnbox {
    margin-top: 20px; }

.login__sns {
  margin-top: auto;padding-bottom: 15%; }
  .login__sns .btn {
    margin-top: 10px; }

.login__linkbox {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 2em 0; }
  .login__linkbox a {
    padding: 0 1em;
    color: #fff;
    border-right: 1px solid #fff; }
    .login__linkbox a:last-child {
      border-right: 0; }

.join__logo {
  max-width: 45%;
  margin: 0 auto;
  padding-top: 15%; }

.join__form {
  margin-top: 15%; }

.page.citySearch {
  padding-top: 60px; }

.citySearch .header {
  height: 60px !important;;
  align-items:center;
  height: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex; }
  .citySearch .header .search {
    height: 40px;
  }
  .citySearch .header .search button {
    height: 40px;
    width: 40px;
  }
.citySearch__body {
  padding: 30px 0  50px; }

.citySearch__section {
  margin-bottom: 40px; }
  .citySearch__section:last-child {
    margin-bottom: 0; }
  .citySearch__section .citySearch__section-title {
    font-size: 18px; }

.citySearch__list {
  margin-top: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap; }

.citySearch__item {
  width: 48%; }
  .citySearch__item:nth-child(odd) {
    margin-right: 4%; }
  .citySearch__item:nth-child(n + 3) {
    margin-top: 20px; }
  .citySearch__item a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    width: 100%; }

.citySearch__thumbnail {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100px;
  border-radius: .75em;
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  position: relative;
  -webkit-box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.3);
          box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.3); }
          .citySearch__thumbnail img{
            position:absolute;
            left: 0;
            top: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
  .citySearch__thumbnail strong {
    color: #fff;
    font-size: 18px;
    font-weight: 800; 
    position:relative;
    z-index: 10;}
  .citySearch__thumbnail span {
    z-index: 10;}

.citySearch__info {
  padding: 10px 0 0; }
  .citySearch__info h3 {
    font-size: 18px;
    margin-bottom: 5px; }
  .citySearch__info p {
    font-size: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%; }

.guide.page .header .wrap {
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 0; }
  .guide.page .header .wrap .history-back {
    background-position: center; }
  .guide.page .header .wrap .hasCourse {
    width: 45px;
    height: 45px;
    background-position: center center;
    background-size: 20px auto;
    position: static;
    text-indent: 0;
    right: 0;
    bottom: 0; }
    .guide.page .header .wrap .hasCourse .length {
      width: 15px;
      height: 15px;
      background: #ff6155;
      color: #fff;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      border-radius: 50%;
      font-size: 12px;
      position: absolute;
      right: .5em;
      bottom: 1em; }

.guide__top {
  width: 100%;
  background-image: url("../images/dummy/guide-dummy.png");
  background-repeat: no-repeat;
  background-size: cover; }
  .guide__top .wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding: 50px 0 20px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    color: #fff;
    height: 180px; }
  .guide__top h1 {
    font-size: 2.25rem;
    margin-bottom: 5px; }
  .guide__top p {
    font-size: 1.5rem;
    margin-bottom: 1em; }
  .guide__top .guide__date {
  background:#4e8df5;
    background-size: auto 1em;
    color: #fff;
    border-radius: 2em;
    height: 30px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding: 0 15px;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start; }
.guide__top .guide__date .state{color:#fff;}
.guide__top .guide__date .more{width: 25px;height: 30px;background: url("../images/icon/guide-datemore.png") no-repeat right center;background-size: auto 15px;text-indent: -9999px;overflow: hidden;}
.guide__guide-item {
  border-bottom: 1px solid #dcdcdc; }
  .guide__guide-item a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    padding: 15px;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center; }
  .guide__guide-item.hasload {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding-right: 10px; }
    .guide__guide-item.hasload > a {
      -webkit-box-flex: 1;
          -ms-flex: 1;
              flex: 1;
      max-width: calc(100% - 40px); }
    .guide__guide-item.hasload .goLoad {
      width: 40px;
      height: 40px;
      -webkit-box-flex: 0;
          -ms-flex: none;
              flex: none;
      border: 1px solid #c9c9c9;
      border-radius: 50%;
      background: url("../images/icon/goload.png") no-repeat 13px center;
      background-size: auto 20px; }
    .guide__guide-item.hasload .goMap {
      width: 40px;
      height: 40px;
      -webkit-box-flex: 0;
          -ms-flex: none;
              flex: none;
      border: 1px solid #c9c9c9;
      border-radius: 50%;
      background: url("../images/icon/gomap.png") no-repeat center;
      background-size: auto 20px; }
    .guide__guide-item.hasload .guide__item-thumbnail {
      width: 70px; }
    .guide__guide-item.hasload .guide__item-info .guide__item-heart {
      margin-right: .5em; }
  .guide__guide-item.haslink {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    padding: 15px;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start; }
    .guide__guide-item.haslink .guide__item-info {
      height: auto; }

.guide__item-thumbnail {
  width: 80px;
  height: 80px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;
  border-radius: .75em;
  -webkit-box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.3);
          box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.3);
  -webkit-box-flex: 0;
      -ms-flex: none;
          flex: none; }
  .guide__item-thumbnail .hasCourse {
    right: .5em;
    bottom: .5em; }

.guide__item-info {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  max-width: calc(100% - 80px);
  padding-left: 15px; }
  .guide__item-info h2 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
    font-size: 18px;
    margin-bottom: 5px;
    max-width: 90%; }
  .guide__item-info p {
    font-size: 12px;
    color: #b2b2b2; }

.guide__item-info.guide__item-info--default {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  height: 80px; }
  .guide__item-info.guide__item-info--default.pl0 {
    padding-left: 0; }
    .guide__item-info.guide__item-info--default.pl0 .status {
      margin-top: 0; }
    .guide__item-info.guide__item-info--default.pl0 .status span {
      font-size: 12px; }
  .guide__item-info.guide__item-info--default span {
    font-size: 10px;
    color: #b2b2b2; }
  .guide__item-info.guide__item-info--default .id {
    font-size: 12px;
    color: #333;
    margin-bottom: 5px; }
  .guide__item-info.guide__item-info--default .date {
    font-size: 10px; }
  .guide__item-info.guide__item-info--default .hashtagBox.mt1 {
    margin-top: .5em; }
  .guide__item-info.guide__item-info--default .hashtagBox .hashtag {
    color: #4e8df5;
    font-size: 12px; }
  .guide__item-info.guide__item-info--default .guide__item-status.mtauto {
    margin-top: auto; }
  .guide__item-info.guide__item-info--default .guide__item-status span {
    font-size: 12px;
    color: #222;
    opacity: .7; }
  .guide__item-info.guide__item-info--default .guide__item-status .id {
    margin-left: auto; }
  .guide__item-info.guide__item-info--default p {
    font-size: 12px;
    color: #333;
    margin-bottom: 1em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%; }

.guide__item-info .guide__item-etc {
  margin-top: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center; }

.guide__item-info .guide__item-heart {
  margin-right: 1.5em;
  padding-left: 1.25em;
  background: url("../images/icon/heart.png") no-repeat left center;
  background-size: auto .875em;
  color: #b2b2b2;
  font-size: 1rem; }
  .guide__item-info .guide__item-heart.active {
    background: url("../images/icon/heart-active.png") no-repeat left center;
    background-size: auto .875em; }

.guide__item-info .guide__item-star {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center; }
  .guide__item-info .guide__item-star img {
    height: 1em;
    margin-right: 2px; }
  .guide__item-info .guide__item-star span {
    color: #b2b2b2;
    margin-left: 5px;
    font-size: 1rem;
    white-space: nowrap; }

.guide__item-link {
  margin-top: .5em; }
  .guide__item-link a {
    border: 1px solid #dcdcdc;
    height: 40px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding: 0 5px; }
    .guide__item-link a img {
      height: 30px;
      vertical-align: top; }
      .guide__item-link a img.ticket {
        height: 20px; }
    .guide__item-link a .prc {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      font-size: 14px; }
      .guide__item-link a .prc strong {
        color: #508ef5;
        margin-right: 5px; }

.course__item {
  border-bottom: 1px solid #dcdcdc;
  padding: 15px;
  height: 110px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between; }

.course__info {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  max-width: calc(100% - 100px); }
  .course__info .course__date {
    color: #4e8df5;
    margin-bottom: 10px; }
  .course__info .course__title {
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%; }

#course-Past .course__date {
  color: #ff6155; }

.course__linkbox {
  margin-left: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: auto;
  -webkit-box-flex: 0;
      -ms-flex: none;
          flex: none; }
  .course__linkbox a {
    width: 23px;
    margin-left: 1em; }

.course__nodata {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 100%;
  height: 300px; }
  .course__nodata p {
    font-size: 18px;
    color: #bdb9b8;
    font-weight: 600;
    margin-top: 1em; }

.course__write {
  width: 45px;
  height: 45px;
  position: absolute;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-radius: 50%;
  right: 1em;
  bottom: 1em;
  background-image: url("../images/icon/write.png");
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: 13px center;
  background-size: 23px auto; }

.page.register {
  padding-top: 50px; }
  .page.register .header .wrap {
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    border-bottom: 1px solid #e5e5e5;
    padding: 0;
    background: #fff; }

.calendarBox .ui-widget.ui-widget-content {
  border: 0;
  width: 100%; }

.calendarBox .ui-datepicker .ui-datepicker-header {
  height: 100px;
  background: #fff;
  padding: 0;
  border: 0;
  border-bottom: 1px solid #e5e5e5;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center; }

.calendarBox .ui-datepicker-title {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: baseline;
      -ms-flex-align: baseline;
          align-items: baseline;
  line-height: 1em;
  padding-top: 10px; }
  .calendarBox .ui-datepicker-title .ui-datepicker-month {
    font-weight: 700;
    font-size: 1.5rem; }
  .calendarBox .ui-datepicker-title .ui-datepicker-year {
    font-size: 1.125rem;
    font-weight: 400;
    margin-left: 5px; }
    .calendarBox .ui-datepicker-title .ui-datepicker-year:after {
      content: '년'; }

.calendarBox .ui-datepicker .ui-datepicker-prev,
.calendarBox .ui-datepicker .ui-datepicker-next {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center; }

.calendarBox .ui-datepicker .ui-datepicker-prev span,
.calendarBox .ui-datepicker .ui-datepicker-next span {
  background: url("../images/icon/calendar-arrow-left.png") no-repeat center;
  background-size: auto 100%; }

.calendarBox .ui-datepicker .ui-datepicker-next span {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg); }

.calendarBox .ui-datepicker-calendar {
  font-size: 1rem;
  margin: 0; }
  .calendarBox .ui-datepicker-calendar th, .calendarBox .ui-datepicker-calendar td {
    border: 1px solid #dcdcdc;
    background: none;
    text-align: center;
    vertical-align: middle;
    padding: 0; }
  .calendarBox .ui-datepicker-calendar th {
    border: 0;
    height: 50px; }
  .calendarBox .ui-datepicker-calendar td {
    height: 65px; }
  .calendarBox .ui-datepicker-calendar tr th:first-child,
  .calendarBox .ui-datepicker-calendar tr td:first-child a {
    color: #ff6155; }
  .calendarBox .ui-datepicker-calendar tr th:last-child,
  .calendarBox .ui-datepicker-calendar tr td:last-child a {
    color: #4e8df5; }
  .calendarBox .ui-datepicker-calendar td.js-selectDate a {
    background: #f4f4f4;
    border-radius: 50%; }
  .calendarBox .ui-datepicker-calendar td.js-selectDate-first a {
    background: #ff6155;
    border-radius: 50%;
    color: #fff !important; }

.calendarBox .ui-state-default,
.calendarBox .ui-widget-content .ui-state-default,
.calendarBox .ui-widget-header .ui-state-default,
.calendarBox .ui-button,
.calendarBox html .ui-button.ui-state-disabled:hover,
.calendarBox html .ui-button.ui-state-disabled:active {
  background: none;
  border: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  margin: 0 auto; }

.calendarBox .ui-state-active,
.calendarBox .ui-widget-content .ui-state-active,
.calendarBox .ui-widget-header .ui-state-active,
.calendarBox a.ui-button:active,
.calendarBox .ui-button:active,
.calendarBox .ui-button.ui-state-active:hover {
  color: #fff !important;
  background: #ff6155 !important;
  border-radius: 50%; }

.calendarBox .ui-datepicker-today {
  position: relative; }

.calendarBox .ui-datepicker-today span::after,
.calendarBox .ui-datepicker-today a::after {
  content: '';
  width: 5px;
  height: 5px;
  background: #333;
  display: block;
  position: absolute;
  bottom: 5px;
  left: 50%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  border-radius: 50%; }

.findLoad.page .header .wrap {
  padding: 0;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  border-bottom: 1px solid #dcdcdc;
  background: #fff; }
  .findLoad.page .header .wrap .form__row {
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1; }
  .findLoad.page .header .wrap .form__row input {
    height: 50px;
    width: 100%;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.1em;
    padding: 0 .5em;
    -webkit-box-sizing: border-box;
    box-sizing: border-box; }
    .findLoad.page .header .wrap .form__row input::-webkit-input-placeholder {
      color: #aaa; }
    .findLoad.page .header .wrap .form__row input::-moz-placeholder {
      color: #aaa; }
    .findLoad.page .header .wrap .form__row input:-ms-input-placeholder {
      color: #aaa; }
    .findLoad.page .header .wrap .form__row input::-ms-input-placeholder {
      color: #aaa; }
    .findLoad.page .header .wrap .form__row input::placeholder {
      color: #aaa; }

.findLoadBox {
  padding: 20px 0 80px; }
  .findLoadBox .findLoad__length {
    color: #b2b2b2;
    font-weight: 400; }
  .findLoadBox .findLoad__item {
    border-bottom: 1px solid #e5e5e5; }
    .findLoadBox .findLoad__item label {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      width: 100%;
      -webkit-box-pack: justify;
          -ms-flex-pack: justify;
              justify-content: space-between;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      padding: 20px 0; }
    .findLoadBox .findLoad__item .findLoad__info {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: start;
          -ms-flex-pack: start;
              justify-content: flex-start; }
      .findLoadBox .findLoad__item .findLoad__info .guide__item-info {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center; }

.findLoad__Fixedbox {
  position: fixed;
  left: 0;
  bottom: -60px;
  width: 100%;
  height: 60px;
  border-top-left-radius: .75em;
  border-top-right-radius: .75em;
  background: #4e8df5;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 0 1em;
  color: #fff;
  -webkit-transition: all .3s;
  transition: all .3s; }
  .findLoad__Fixedbox p {
    font-size: 16px; }
  .findLoad__Fixedbox button {
    font-size: 16px;
    width: 60px;
    height: 60px;
    color: #fff; }

.findLoad__Fixedbox.js-active {
  bottom: 0; }

.courseDetail.page {
  min-height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column; }
  .courseDetail.page .courseDetail__body {
    background: #f6f6f6;
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1;
    padding-top: 10px; }
  .courseDetail.page .course__box {
    background: #fff;
    border-radius: .75em;
    overflow: hidden;
    margin-top: 0;
    margin-bottom: 10px;
    padding-bottom: 20px; }
  .courseDetail.page .course__detail {
    display: block; }

.courseDetail__header {
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc; }
  .courseDetail__header .wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap; }
  .courseDetail__header .courseDetail__thumbnail {
    -webkit-box-flex: 0;
        -ms-flex: none;
            flex: none;
    width: 150px;
    border-radius: .75em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    margin-right: 20px;
    position: relative; }
    .courseDetail__header .courseDetail__thumbnail a {
      width: 30px;
      height: 30px;
      display: block;
      background: url("../images/icon/white-plus.png") #ff6155 no-repeat center;
      background-size: auto 10px;
      text-indent: -9999px;
      overflow: hidden;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      bottom: -15px;
      -webkit-transform: translateX(-50%);
              transform: translateX(-50%); }
  .courseDetail__header .courseDetail__info {
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1;
    max-width: calc(100% - 170px); }
  .courseDetail__header .courseDetail__id {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
    font-size: 14px;
    margin-bottom: 5px; }
  .courseDetail__header .courseDetail__title {
    font-size: 24px;
    margin-bottom: 5px; }
  .courseDetail__header .courseDetail__hashtag {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap; }
    .courseDetail__header .courseDetail__hashtag span {
      margin-right: 5px;
      line-height: 1.3em;
      color: #4e8df5;
      font-size: 12px; }
      .courseDetail__header .courseDetail__hashtag span:after {
        content: ','; }
      .courseDetail__header .courseDetail__hashtag span:last-child:after {
        content: ''; }
  .courseDetail__header .courseDetail__subtext {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 600; }
  .courseDetail__header .courseDetail__date {
    margin-top: 5px; }

.status {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  margin-top: 10px; }
  .status span {
    padding-left: 1.375em;
    margin-right: 15px;
    font-size: 12px; }
  .status .bookmark {
    background: url(${'/icon/bookmark.png'}) no-repeat left center;
    background-size: auto 1em; }
  .status .bookmark.active {
    background: url(${'/icon/bookmark-active.png'}) no-repeat left center;
    background-size: auto 1em; }
  .status .like {
    background: url(${'/icon/statusheart.png'}) no-repeat left center;
    background-size: auto 1em; }
  .status .like-active {
    background: url(${'/icon/statusheart-red.png'}) no-repeat left center;
    background-size: auto 1em; }
  .status .share {
    background: url(${'/icon/share.png'}) no-repeat left center;
    background-size: auto 1em; }
  .status .download {
    background: url(${'/icon/download.png'}) no-repeat left center;
    background-size: auto 1em; }

.detail__top {
  width: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover; }
  .detail__top .wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding: 50px 0 20px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    color: #fff;
    height: 180px; }
  .detail__top .detail__title {
    font-size: 1.75rem;
    margin-bottom: .25em; }
  .detail__top .detail__case {
    color: #fff;
    border-radius: 2em;
    height: 25px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start; }
    .detail__top .detail__case.detail__case--food {
      background: url(${'/icon/food-white.png'}) #4e8df5 no-repeat 10px center;
      background-size: auto 1em;
      padding: 0 10px 0 30px; }
    .detail__top .detail__case.detail__case--home {
      background: url(${'/icon/home-white.png'}) #4e8df5 no-repeat 10px center;
      background-size: auto 1em;
      padding: 0 10px 0 30px; }
  .detail__top .detail__star {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin-top: 1.5em; }
    .detail__top .detail__star img {
      height: 1em;
      margin-right: 2px; }
    .detail__top .detail__star span {
      color: #fff;
      margin-left: 5px;
      font-size: 1rem; }

.detailBody {
  padding: 1.5em 0; }

.detailBody__row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  margin-bottom: 1.5em; }
  .detailBody__row:last-child {
    margin-bottom: 0; }
  .detailBody__row .detailBody__title {
    width: 80px;
    -webkit-box-flex: 0;
        -ms-flex: none;
            flex: none; }
  .detailBody__row .detailBody__map {
    margin-top: 1em; }
  .detailBody__row .detailBody__info {
    -webkit-box-flex: 1;
        -ms-flex: 1;
            flex: 1;
    max-width: calc(100% - 80px); }
  .detailBody__row .detailBody__price {
    width: 100%;
    max-height: 4.5em;
    overflow: hidden; }
    .detailBody__row .detailBody__price.active {
      max-height: none; }
    .detailBody__row .detailBody__price li {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      line-height: 1em;
      -webkit-box-pack: justify;
          -ms-flex-pack: justify;
              justify-content: space-between;
      width: 100%;
      font-weight: 600;
      margin-bottom: .5em; }
      .detailBody__row .detailBody__price li:last-child {
        margin-bottom: 0; }
      .detailBody__row .detailBody__price li span {
        font-weight: 400; }
  .detailBody__row .detailBody__showFull {
    margin-top: 10px;
    height: 40px;
    width: 100%;
    text-indent: -9999px;
    overflow: hidden;
    background: url("../images/icon/arrow-bottom.png") no-repeat center;
    background-size: auto 10px;
    border-top: 1px solid #dcdcdc; }
    .detailBody__row .detailBody__showFull.active {
      -webkit-transform: rotate(180deg);
              transform: rotate(180deg);
      border-top: 0;
      border-bottom: 1px solid #dcdcdc; }
  .detailBody__row .detailBody__reserve a {
    border: 1px solid #dcdcdc;
    height: 50px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding: 0 5px; }
    .detailBody__row .detailBody__reserve a img {
      height: 40px;
      vertical-align: top; }
    .detailBody__row .detailBody__reserve a .prc {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex; }
      .detailBody__row .detailBody__reserve a .prc strong {
        color: #508ef5;
        margin-right: 5px; }

.detailFooter {
  border-top: 1px solid #dcdcdc;
  padding: 1.5em 0; }
  .detailFooter .detailFooter__info {
    margin-top: 1em;
    text-align: center; }
    .detailFooter .detailFooter__info p {
      margin-bottom: 1em; }

.commerce .container {
  padding-top: 90px; }

.commerce .slider img {
  vertical-align: top; }

.commerce .slick-dots {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  padding: .5em 0; }
  .commerce .slick-dots li {
    width: 10px;
    height: 10px;
    overflow: hidden;
    border-radius: 50%;
    background: #dcdcdc;
    margin: 0 3px; }
    .commerce .slick-dots li.slick-active {
      background: #4e8df5; }
    .commerce .slick-dots li button {
      width: 100%;
      height: 100%;
      text-indent: -9999px;
      overflow: hidden; }

.commerce .commerceItem {
  border-bottom: 1px solid #dcdcdc; }
  .commerce .commerceItem a {
    height: 70px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    padding: 0 1em;
    background: url("../images/icon/arrow-right-black.png") no-repeat calc(100% - 1em) center;
    background-size: auto 1em; }
    .commerce .commerceItem a img {
      width: 2em;
      margin-right: 1em; }

.regCourseForm {
  padding-top: 65px;
  padding-bottom: 1em; }

.mapPage {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex; }

.searchLink {
  position: fixed !important;
  left: 0 !important;
  top: 50px !important;
  width: 100% !important;
  background: #fff !important; }
  .searchLink a {
    height: 40px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    font-size: 14px;
    background: url("../images/icon/arrow-left-black.png") no-repeat 15px center;
    background-size: auto 13px;
    padding-left: 45px; }
  .searchLink input {
    height: 40px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    font-size: 14px;
    padding: 0 10px;
    width: 100%;
    -webkit-box-sizing: border-box;
            box-sizing: border-box; }

.mapBox {
  width: 100%;
  height: calc(100vh);
  padding-bottom: 50px;
  padding-top: 50px; }
  .mapBox.hasSearchLink {
    padding-top: 90px; }
  .mapBox.nobottomfixed {
    padding-bottom: 0; }
  .mapBox #map {
    width: 100%;
    height: 100%; }
  .mapBox.pb0 {
    padding-bottom: 0; }
  .mapBox .mapInfobox {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
    z-index: 1000;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    overflow: hidden; }
    .mapBox .mapInfobox .mapInfobox__scroll button {
      height: 30px;
      text-align: center;
      width: 100%; }
      .mapBox .mapInfobox .mapInfobox__scroll button.active img {
        -webkit-transform: rotate(0);
                transform: rotate(0); }
    .mapBox .mapInfobox .mapInfobox__scroll img {
      -webkit-transform: rotate(180deg);
              transform: rotate(180deg);
      height: 10px; }
    .mapBox .mapInfobox .tab-view {
      height: 110px;
      overflow: auto; }
      .mapBox .mapInfobox .tab-view.h333 {
        height: 222px; }
    .mapBox .mapInfobox .tab-view.active {
      height: calc(100vh - 300px);
      overflow: auto; }

.myCourse-detail {
  padding: 1.5em 0; }
  .myCourse-detail .course__detail-title {
    font-size: 1.125rem; }
  .myCourse-detail .course__detail-item:before {
    width: 20px;
    height: 20px;
    top: 0px; }

.recommendList {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-bottom: 1px solid #dcdcdc; }

.recommendList__item {
  height: 110px;
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column; }
  .recommendList__item button {
    width: 50px;
    height: 50px;
    background: #f8f8ff;
    border-radius: 50%;
    margin-bottom: 10px; }
  .recommendList__item.trip button {
    background: url("../images/icon/backpack.png") #f8f8ff no-repeat center;
    background-size: auto 25px; }
  .recommendList__item.food button {
    background: url("../images/icon/cost-food.png") #f8f8ff no-repeat center;
    background-size: auto 25px; }
  .recommendList__item.home button {
    background: url("../images/icon/cost-home.png") #f8f8ff no-repeat center;
    background-size: auto 25px; }
  .recommendList__item.like button {
    background: url("../images/icon/recommend-like.png") #f8f8ff no-repeat center;
    background-size: auto 25px; }

.mypage .container {
  padding-top: 90px; }

.mypage .tab button {
  height: 55px; }

.mypage__header {
  background: #f6f6f6;
  padding: 2em 0; }
  .mypage__header .wrap {
    justify-content: space-between;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    padding:0 2em;
  }
  .mypage__header .thumbnail {
    width: 5em;
    height: 5em;
    background: #4e8df5;
    border-radius: 50%;
    position: relative; }
    .mypage__header .thumbnail img {
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
         object-fit: cover;
      -o-object-position: center;
         object-position: center;
      border-radius: 50%;
      overflow: hidden; }
    .mypage__header .thumbnail label {
      background: url("../images/icon/white-plus.png") #ff6155 no-repeat center;
      background-size: auto 1em;
      width: 1.5em;
      height: 1.5em;
      overflow: hidden;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      border-radius: 50%;
      position: absolute;
      right: 0;
      bottom: 0; }
      .mypage__header .thumbnail label input {
        opacity: 0; }
  .mypage__header .info {
    margin-top: .75em;
    text-align: center; }
    .mypage__header .info h2 {
      font-size: 1.25rem; }
    .mypage__header .info p {
      color: #b2b2b2;
      margin-top: 5px; }
      .pd-0{padding: 0 !important;}

.findLoad__nodata {text-align: center;padding:0 2em;padding-top: 10em;}
.findLoad__nodata.findLoad__nodata--small{padding-top: 1em;}
.findLoad__nodata p {font-size: 16px;line-height: 20px;color:#b2b2b2;margin-bottom: 1em;}
.findLoad__nodata a{display: block;background:#4e8df5;color:#fff;line-height: 45px;border-radius: 2em;}


/* 팔로워 팔로잉 */
.follow__Box{}
.follow__List{padding:10px 0;}
.follow__item{padding:10px 0;}
.follow__item .wrap{display: flex;justify-content: space-between;align-items: center;}
.follow__userThumbnail{width: 50px;height: 50px;border-radius:  50%;overflow: hidden;border:1px solid #ededed;margin-right: 10px;flex: none;}
.follow__userThumbnail img{object-fit: cover;width: 100%;height: 100%;}
.follow__userInfo{flex: 1;padding-right: 10px;}
.follow__userName{font-size: 14px;margin-bottom: 3px;}
.follow__userNickname{font-size: 12px;color:#b2b2b2;}
.follow__action{margin-left: auto;flex: none;}
.follow__action button{height: 30px;color:#fff;background:#4e8df5;font-size: 14px;padding:0 2em;border-radius: 5px;}
.follow__action button.is_follow{background:#fff;color:#1e1e1e;border:1px solid #b2b2b2;}

.mypage__myinfo{text-align: center;}
.mypage__myinfo .thumbnail{margin: 0 auto;}
.mypage__state{margin-left: auto;}
.mypage__state .row{display: flex;justify-content: space-between;align-content: center;}
.mypage__state .col{text-align: center;margin:0 1em;}
.mypage__state .col h3{font-size: 18px;}
.mypage__state .col p{margin-top: 5px;font-size: 16px;}
.mypage__state .btn-follow{display:block;line-height: 30px;text-align: center;margin-top: 15px;background:#fff;border:1px solid #ececec;}

.login__title{text-align: center;color:#fff;font-size:1.5rem;margin-top: .75em;font-weight: 500;}

.course__body.fixed{padding-top: 60px;}
.course__body.fixed .course__top{position:fixed;left:0;top:90px;padding:20px;background:#fff;width: 100%;border-bottom:1px solid #ddd;z-index: 1000;}

.modal{position:fixed;z-index: 5000;left: 0;top: 0;width: 100%;height: 100%;}
.modal__bg{width: 100%;height: 100%;position:absolute;left: 0;top: 0;z-index: 1;background:rgba(0,0,0,0.7);}
.modal__content{position:fixed;left: 50%;top: 50%;transform: translate(-50%, -50%);width: 90%;max-width: 400px;background:#fff;z-index: 5;}
.modal__header{line-height: 50px;padding:0 15px;font-size: 18px;border-bottom: 1px solid #ececec;}
.modal__body {padding: 0px 15px;}

#changeShowCourse .course__item{height: 100px;padding: 15px 0;}
#changeShowCourse .course__thumbnail{height: 70px;width: 100px;flex: none;border-radius: 5px;margin-right: 10px;border:1px solid #ececec;overflow: hidden;}
#changeShowCourse .course__thumbnail img{width: 100%;height: 100%;object-fit: cover;}
#changeShowCourse .course__info{max-width:calc(100% - 110px);}
#changeShowCourse .course__date{font-size: 14px;margin-bottom: 5px;}
#changeShowCourse .course__title{font-size: 18px;margin-top: 0;}

.guide.page.searchContent{padding-top: 167px;}
.guide.page.searchContent .header .wrap{justify-content: flex-start;}
.guide.page.searchContent .header .wrap .close{margin-right: 0;}
.header__title{margin-right: auto;color:#fff;font-size: 16px;font-weight: 500;}
.guide.page.searchContent .tab--guide{position:fixed;left: 0;top: 50px;z-index: 1000;width: 100%;}
.guide.page.searchContent .searchContent__form{position:fixed;left: 0;top: 122px;z-index: 1000;width: 100%;}
.guide__view{display: none;}
#guide__guide{display: block;}
#guide__course h2{margin-bottom: 0;}

.searchContent__form{border-bottom: 1px solid #b2b2b2;background:#fff;}
.searchContent__form input{height: 45px;padding:0 15px;padding-left: 35px;background:url('../images/icon/search-gray.png') no-repeat 10px center;background-size: auto 18px;}

.detailGuide .detail__top{padding:0 10px;position:relative}
.detailGuide .detail__top:after{content:'';display:block;position:absolute;left: 0;top: 0;z-index: 1;background:rgba(0,0,0,0.5);width: 100%;height: 100%;}
.detailGuide .detail__top .wrap{position:relative;z-index: 2;text-align: center;}

.relation{margin-top: 20px;border-top: 1px solid #ececec;padding-top: 15px;}
.relation h3{padding:0 15px;margin-bottom: 10px;}
.detailGuide__content{padding:15px 0;}
.detailGuide__relation{display: flex;flex-wrap: wrap;justify-content: space-between;align-content: center;padding:0 10px;}
.detailGuide__relation-item{flex: 1;width: 25%;text-align: center;padding:0 5px;}
.detailGuide__relation-item p{margin-top: 5px;color:#666;font-size: 12px;}
.detailGuide__relation-thumb{width: 100%;height: 80px;background:#ececec;display: block;}
.detailGuide__relation-thumb img{width: 100%;height: 100%;object-fit: cover;}

.switch{display:inline-block;cursor:pointer}
.switch__layout{width:40px;height:20px;position:relative;border-radius:2em;overflow:hidden;}
.switch input{position:absolute;left:0;top:0;width:1px;height:1px;overflow:hidden;opacity:0;}
.switch input + span:before{display:block;width:100%;height:100%;background:#bababa;content:'';transition:all .2s ease-out;}
.switch input + span:after{position:absolute;left:2px;top:2px;width:16px;height:16px;background:#fff;content:'';display:block;border-radius:50%;transition:all .2s ease-out;}
.switch input:checked + span:before{background:#409EFF;}
.switch input:checked + span:after{left:22px;}
.switch input:disabled + span:before{opacity: .3;}

.regCouse__cityList{display: flex;justify-content: flex-start;flex-wrap: wrap;margin-top: 5px;padding:4px 0;border-bottom:1px solid #b9b9b9;min-height: 40px;}
.regCouse__cityItem{background:#4e8df5;color:#fff;padding: 6px 10px;border-radius: 2em;margin:2px;}
.regCouse__cityItem button{width: 1em;height: 1em;background:url('../images/icon/close.png') no-repeat center;background-size: auto .5em;vertical-align: top;}

.regCourseForm .form__box{position:relative}
.regCourseForm .searchedCityList{position:absolute;left:0;top: 41px;width: 100%;z-index: 10;border:1px solid #ececec;background:#fff;display: none;}
.regCourseForm .searchedCityList li a{display: block;line-height: 35px;padding:0 1em;}

#findCityPopup{position:fixed;left: 0;top: 0;z-index: 6000;background: #fff;width: 100%;min-height: 100%;}
.findCity{padding:10px 0;}
.findCity li{}
.findCity li a{display: block;line-height:35px;font-weight: 500;font-size: 16px;}
.findCity li a sup{vertical-align: baseline;color:#999;font-size: 12px;}

.fixed-btnbox #submitButton.btn{background:#4e8df5}

.findLoad .header .select-city{line-height: 30px;background:#4e8df5;color:#fff;border-radius: 2em;padding:0 1em;min-width: 80px;margin-right: 10px;}

.course__detail-item:after{content:'';display: block;width: 1px;height: 100%;position:absolute;left: 12px;top: 0;z-index: 1;border-left: 1px dashed #ccc;}
.course__detail-item.ui-sortable-helper:after,
.course__detail-item:last-child:after{display: none;}

.course__simple-Memo span{color:#4e8df5}
.course__simple-Memo p{}

.form__box--textarea textarea{width: 100% !important;height: 150px;line-height:1.5em;}

.total_cost{text-align: center;line-height: 65px;font-size: 24px;padding-bottom:10px;position:relative;color:#4e8df5;}
.total_cost:after{content:'';display:block;width: 100%;position:absolute;left: 0;bottom: 0;height: 10px;background:#f6f6f6;}

.form__title--cost{display:flex;justify-content: space-between;align-items: center;}
.form__box--cost{flex-direction: column;padding-bottom: 5px;}
.form__box--cost input{flex: none !important;font-size: 30px;font-weight: 500;}
.form__box--cost p{color:#b2b2b2;font-size: 14px;margin-top: 5px;}

.story__review{text-align: left;}
.story__review .story__star img{margin:0;margin-left: 2px;height: 12px;}
.story__review-header{display:flex;justify-content:space-between;align-items: center;}
.story__review-date{color:#666;font-size: 14px;}
.story__review-description{margin-top: 5px;}

.story__img{margin-top: 10px;}
.story__img .slick-arrow{background:url('../images/icon/slide-arrow.png') no-repeat left center;background-size: auto 20px;width: 1.5em;height:100%;position:absolute;left:0;top: 0;text-indent: -9999px;overflow: hidden;}
.story__img .slick-arrow.slick-next{left:auto;right: 0;transform: rotate(180deg);}
.story__img .slider{padding:0 1.5em;}
.story__img .img{width: 50%;padding-bottom: 100%;position:relative;}
.story__img .img img{width: calc(100% - 5px);height: calc(100% - 5px);object-fit: cover;position:absolute;left: 50%;top: 50%;transform: translate(-50%, -50%);z-index: 1;border-radius: 10px;overflow: hidden;}

.detailStory{background:#f6f6f6;padding-bottom: 10px;}
.detailStory .wrap{padding:0 10px;}
.detailStory .story__review{background:#fff;padding:15px;border-radius: 10px;margin-top: 10px;}
.detailStory__title{text-align: center;line-height: 55px;border-bottom:2px solid #4e8df5;font-size: 16px;}

`;

export default GlobalStyle;

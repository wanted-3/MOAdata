# ✨MOAdata 그룹 과제✨


# 🚀 배포

[![Netlify Status](https://api.netlify.com/api/v1/badges/8c963488-351b-41d4-9152-60535ac564b2/deploy-status)](https://moadata.netlify.app/)


# 🗣 팀 구성(8명)

__김소형, 이주형, 이종길, 제준영, 도진경, 이서현, 홍원배, 이준혁__

# 📝 진행 과정

1일) 과제 스펙확인, 레이아웃 구성

2일) 차트 생성, 팝업 호출창(추가 요구 사항) 구현,리팩토링

3일) 리팩토링, Css수정, 배포, README 작성, 테스트케이스 정의서 작성


# 🔧 기술 스택

- Typescript
- React
- Redux-toolkit
- React-router-dom
- Victory
- Axios
- Dayjs
- SCSS
- React-datepicker

## 폴더 구조

```sh
src
│
├─ data  # 초기 wanted 데이타 파일이 있는 폴더 (ex wanted_FE_trend-data-set.json)
├─ assets  # 이미지 파일(svg)을 모아놓은 폴더
├─ hooks # redux dispatch, selector와 axios를 위한 hook
├─ components  # 컴포넌트를 모아놓은 폴더
│     ├─ commons  # 컴포넌트에서 사용하는 공통부분
│     ├─ layout  # 레이아웃을 │     
│     └─ users  # 회원 및 상세 차트(search, userDetail)
├─ routes # 페이지별로 렌더링 화면을 보는 폴더
│     ├─ home  # 첫 화면 페이지
│     ├─ login # 로그인 컴포넌트
│     └─ users # 회원 정보 및 상세 정보(search, userDetail)
├─ services # 데이터 불러오는 컴포넌트
├─ states  # 상태관리 리덕스 설정을 위한 slice, store, ts 등의 파일이 있는 폴더
├─ styles  # CSS 스타일을 위한 폴더
├─ types  # Typescript 정의 파일
└─ utils  # data format 해주는 유틸 파일이 있는 폴더

```

# 📌 실행 방법

## 1. 설치
```
git clone https://github.com/wanted-3/MOAdata.git
```
```
yarn install && yarn start
```

## 2. 로그인
- { id:qwe123, pw:qwe123 } 
- { id:asd123, pw:asd123 }
- { id:zxc123, pw:zxc123 }
 
세 개의 로그인 정보 중의 하나를 통해 로그인이 가능하다
 

## 3. 원하는 데이터 찾기

# 💡 구현 내용

## 1. 로그인 벨리데이션 체크

id와 password의 validation을 체크해서 두 개의 체크를 통과할 시에는 redux를 통해 accessUser에 대한 boolean값(true)을 얻어 로그인 할 수 있게 구현했습니다.

## 2. 심박/걸음수 그래프 구현
Victoryjs 라이브러리를 활용하여 구현하였습니다.

## 3. JSON데이터 활용
JSON파일을 public/data에 저장하고 axios를 사용하여 데이터를 불러와 사용 하였습니다. 
페이지네이션 구현을 위하여 JSON파일에 사용자데이터를 임의로 추가하여 기능을 구현하였습니다.
회원별로 데이터를 필터링하여 보여주기 위해 회원 아이디마다 해당되는 JSON파일을 불러오도록 정제하여 구현하였습니다.

## 4. 회원 검색 결과 페이지네이션
회원 검색 결과를 페이지 당 5명씩 보여줄 수 있도록, 회원 데이터 배열에 slice((page - 1) * 5, (page - 1) * 5 + 5) 함수를 적용해 구현했습니다. 이에 따라 회원 수가 많아질 경우에도 스크롤 없이 관리할 수 있게 하였습니다.


## 5. 데이터 필터를 통해 아이템 정렬
아이디, 회원번호와 회원 가입 날짜(datepicker 사용)를 이용하여 데이터를 필터링하여 보여줄 수 있도록 하였습니다.
원하는 정보 값을 입력한 후 검색 버튼을 클릭하면 데이터가 필터링 됩니다.
필터 리셋하기를 누른다면 한 번에 필터를 리셋 가능합니다.

## 6. 로그인 실패시 팝업 호출/플로팅 호출
로그인 아이디와 비밀번호를 입력하여 틀렸다면 플로팅창을 호출하여 틀렸음을 보여주었습니다.

# 📸 구현 결과
![detail](https://user-images.githubusercontent.com/63532503/171318347-f9982117-09e1-434e-88d8-41b7540555df.gif)

|로그인|회원 관리|
|:---:|:---:|
|<img src="https://user-images.githubusercontent.com/63532503/171318084-04b2c5cd-9873-4ad0-847f-3257f69e6e81.gif" width="350"/>|<img src="https://user-images.githubusercontent.com/63532503/171318274-88ae890e-e991-4fee-9451-6a4f752ebe9c.gif" width="350"/>|

|회원 상세| |
|:---:|:---:|
<img src="https://user-images.githubusercontent.com/63532503/171318347-f9982117-09e1-434e-88d8-41b7540555df.gif" width="350"/>| |

#  ✏️ 어려웠던 점

## 1. 차트 날짜 필터링

차트를 활용하기 위해서 필요한 데이터를 리듀서해서 필터링 하여 전달하는 과정

## 2. 데이터 형식 정하기

다른 데이터에서 활용하기 위해 받아올 데이터의 형식을 정하는 과정 

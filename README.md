![enter image description here](https://user-images.githubusercontent.com/24728385/148955263-b3a0e063-6950-46f2-82e9-1fcabc24e19e.jpeg)

<h1 align="middle">[과제] Swit</h1>

1. React, Redux 구현
2. 메신저 삭제, 답장, 추가 기능 구현
<br/>

# 🔗 배포
[https://infallible-panini-19ee47.netlify.app/](https://infallible-panini-19ee47.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/4cdb7c60-5f99-420f-9f10-5420389e3332/deploy-status)](https://app.netlify.com/sites/infallible-panini-19ee47/deploys)

<br/>

# ⚙️ 설치 및 시작하는 법

```
$ git clone https://github.com/pre-onboarding-course-team-6/2nd-week-swit

$ cd 2nd-week-swit

$ npm install

$ npm run start
```
<br/>

# 🏹 구현 목록

1. 메신저 리스트 기능 구현

사용자가 자신의 메세지를 구분할 수 있게 오른쪽에 표시 됩니다.
![image](https://user-images.githubusercontent.com/40172373/156320285-09b25c44-abf8-4b37-9e5e-f147f9faad5c.png)

2. 메신저 삭제, 답장 기능 구현
![image](https://user-images.githubusercontent.com/40172373/156320518-f2fa3049-ac49-433d-9983-5e8529a24abb.png)
자신의 메세지는 "삭제", 타인의 메세지는 "답장" 이 표시 됩니다.

3. 메세지 입력칸
![image](https://user-images.githubusercontent.com/40172373/156321022-62e80415-90b2-487d-9883-f5c434104974.png)
메세지 입력칸은 최대 10줄 까지는 늘어나다가 그 이상이 되면 스크롤이 활성화 됩니다.


<br/>

# 🏗 프로젝트 구조

작성한 코드😀

```
📦src
 ┣ 📂actions             // 액셔 타입 정의
 ┃ ┗ 📜types.js
 ┣ 📂components
 ┃ ┣ 📂ChannelToolbar    // 상단바 header
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜styled.js
 ┃ ┣ 📂Input             // 입력창 컴포넌트😀
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜styled.js
 ┃ ┣ 📂Message           // 메세지 컴포넌트 😀
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜styled.js
 ┃ ┗ 📂MessageList       // 메세지 리스트 컴포넌트 😀
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜styled.js
 ┣ 📂reducers            // 리듀서
 ┃ ┣ 📜index.js
 ┃ ┣ 📜initState.js
 ┃ ┗ 📜reducer.js
 ┣ 📂styles
 ┃ ┣ 📜globalStyles.js
 ┃ ┗ 📜styled.js
 ┣ 📜App.jsx
 ┣ 📜index.jsx
 ┗ 📜store.js

```
<br/>

## ✅ Git - Commit Message Convention [🔗](https://webruden.tistory.com/486)

- feat : 새로운 기능 추가 (a new feature)
- fix : 버그 수정 (a bug fix)
- docs : 문서 수정 (changes to documentation)
- style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우 (formatting, missing semi colons, etc; no code change)
- refactor : 코드 리펙토링 (refactoring production code)
- test : 테스트 코드, 리펙토링 테스트 코드 추가 (adding tests, refactoring test; no production code change)
- chore : 빌드 업무 수정, 패키지 매니저 수정 (updating build tasks, package manager configs, etc; no production code change)

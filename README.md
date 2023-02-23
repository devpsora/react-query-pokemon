# 리액트 쿼리를 활용한 포켓몬 도감 만들기

## 기본 설치 방법

**1. CRA 프로젝트 생성**

```
  npx create-react-app [프로젝트명] --template typescript
```

**2. 필요한 모듈 설치**

```
npm i @emotion/react @emotion/styled axios react-query reset-css throttle-debounce react-router-dom
npm i @types/react-router-dom @types/throttle-debounce -D

```

## 개발하면서 발생했던 오류 해결 방법

**리액트 라우터 v6 설정하는 방법**

```
  import React from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

  import Index from './pages/Index';
  import Detail from './pages/Detail';

  function App() {
    return (
      ... 라우터로 감싸줘야 오류가 발생하지 않는다...
      <Router>
        <Routes>
          <Route index element={<Index />} />
          <Route path='/:id' element={<Detail />} />
        </Routes>
      </Router>
    );
  }

  export default App;

```

**환경변수 설정 오류**

> `1. 오류` 환경변수 설정을 위해서 dotenv 모듈 설치하여 사용하면 오류 발생
>
> `2. 원인 및 해결방법` : CRA 프로젝트 자체 내장으로 dotenv 모듈이 존재하여 별도의 설치 없이 사용 할 수 있음
>
> `3. 환경변수파일 설정시 주의` : 접두어로 반드시 `REACT_APP`을 사용한다.

## 스타일 설정

**전역스타일 설정**

> 1. npm i styled-components styled-reset
> 2. npm i @types/styled-components -D
> 3. globalStyle.tsx 파일 생성

    ```
    import { createGlobalStyle } from 'styled-components';
    import reset from 'styled-reset';

    const GlobalStyle = createGlobalStyle`
      // Reset CSS
      ${reset}

      * {
        box-sizing: border-box;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
    `;

    export default GlobalStyle;
    ```

> 4. 루트 파일에 GlobalStyle 설정하기 (index.tsx)

```
import GlobalStyle from './globalStyle';

/**** 생략 ****/

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

```

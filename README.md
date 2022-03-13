# 설명

## 정의

- React 의 SSR을 쉽게 구현할 수 있게 도와주는 간단한 프레임워크.
- SSR의 개발환경 세팅이 꽤 복잡하기 때문에 이를 해결하기 위해 나온 프레임워크.
- 파일 시스템 기반 SSR 리액트 프레임워크
- react-router 와 호환이 되지 않으므로 주의

## 기능

- 내장 CSS 및 Sass 지원 및 모든 CSS-in-JS 라이브러리 지원
- Fast Refresh 지원
- 코드 변경 시 자동 Refresh 지원
- **코드 스플리팅**: 일반적인 CRA 에서는 초기 렌더링 때 모든 컴포넌트를 내려받는다. 하지만 규모가 커지고, 용량이 커지면 로딩 속도가 지연될 수 있는 문제점이 있다. Next는 이러한 문제점을 개선하여 필요에 따라 파일을 불러올 수 있게 여러 개의 파일을 분리하는 코드 스플리팅을 사용한다. 폴더 구조를 보면 pages 폴더 안에 각 page 즉, 라우트들이 들어가며, Components 폴더에는 React 컴포넌트들이 들어가게 된다. 예를 들어, 브라우저가 실행되고, 사용자가 접속을 하게 되면, 첫 페이지인 index page만 불러오게 되고, 그 이후에 다른 페이지로 넘어갔을 때는 해당 페이지만 불러오게 됨.
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5dbfd8ba-e746-40f6-b5fa-d1c4ad43d34a/Untitled.png)
- **간단한 CSR 제공** : 사용방법은 **Router**와 **Link**를 모두 **import** 해서 사용할 수 있다. 먼저 **Link**에서는 `href`와 `as` props가 있는데 이 `href`는 해당 페이지로 이동해 주는 역할을 하고, `as`는 href의 URL을 조금 더 직관적으로 만들어주는 역할을 해준다. Router는 링크와 동일하게 해당 페이지로 이동해주는 역할을 하지만 개발자에게 조금 더 제어권을 넘겨줘서 쉽게 Redirect도 가능하다.
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/72055a33-8ae5-43e8-93ea-e7fb2a04921c/Untitled.png)
- \***\*커스텀 API 서버 (as - 라우트 마스킹) :\*\*** 만약에 Link 컴포넌트에서 as를 사용하게 되면 실제 페이지가 없는 곳에 요청하게 된다. 그래서 직접 커스텀 서버를 생성해서 as의 URL이 href를 바라볼 수 있게 처리를 따로 해줘야 새로 고침이나 뒤로 갔을 때도 렌더링이 가능해진다.
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/db87e19e-8ce1-4293-b4e4-5d58df430a95/Untitled.png)
- \***\*getInitialProps():\*\*** Next의 핵심기능인 getInitialProps 함수를 통해 데이터를 가져올 수 있다. 밑에 코드를 보면 React의 ComponentDidMount 는 렌더링이 두 번 되지만, Next에서는 데이터를 미리 갖고 오기 때문에 한 번에 렌더링이 가능하다.
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f9b09402-06ce-4505-a614-9249467b4f1a/Untitled.png)
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a42e6496-44fb-4a9b-b083-3c735626bcd1/Untitled.png)

---

# 설치

- React CRA가 있듯이 nextJS에도 create-next-app이 존재한다.
- npm 또는 yarn으로 직접 환경을 세팅할 수 있지만 먼저 개발을 진행하며 익혀가는 것을 우선으로 한다면 npx 로 일회성 설치하는 것을 추천한다.
  ```bash
  $npx create-next-app <Project Name>
  or
  $npm create-next-app <Project Name>
  or
  $yarn create-next-app <Project Name>

  ```

# 환경

## 프로덕션 서버

```bash
$npm start
또는
$yarn start
```

## 개발 서버

```bash
$npm dev
또는
$yarn dev
```

## ESLint, Prettier config 파일 만들기

### ESLint config

```json
// .eslintrc.json
{
  "extends": ["react-app", "prettier/prettier"],
  "plugins": ["react-hooks", "simple-import-sort", "prettier"],
  "rules": {
    "prettier/prettier": "error",
    "react-hooks/rules-of-hooks": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    "comma-dangle": ["error", "always-multiline"],
    "object-curly-spacing": ["error", "always"],
    "space-in-parens": ["error", "never"],
    "computed-property-spacing": ["error", "never"],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "eol-last": ["error", "always"],
    "quotes": ["error", "single"],
    "no-tabs": "error",
    "semi": ["error", "never"],
    "import/no-anonymous-default-export": 0,
    "object-shorthand": "error",
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": "*", "next": "return" }
    ],
    "@typescript-eslint/no-redeclare": 0
  }
}
```

### prettier config

```json
// .prettierrc.json
{
  "printWidth": 80,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "tabWidth": 2,
  "bracketSpacing": true,
  "endOfLine": "auto",
  "useTabs": false
}
```

## Typescript 적용

- 타입스크립트에 필요한 라이브러리 설치
  ```bash
  $npm install --save-dev typescript @types/react @types/node
  또는
  $yarn add --save-dev typescript @types/react @types/node
  ```
- tsconfig.json 생성
  ```bash
  $tsc --init
  ```
- tsconfig.json 세팅
  ![image](https://user-images.githubusercontent.com/53039583/157672780-ef91a0c3-e6a8-4476-9d15-a1120b15fe0b.png)
## Styled-components 라이브러리 설치 및 적용

### 설치

```bash
$npm install @types/styled-components
또는
$yarn add @types/styled-components
```

### 적용

- next.js 에 styled-components 를 적용하기 위해서는 설치 외 또 다른 설정이 필요하다.

## babelrc 파일 생성 및 설정

- babel : JS 컴파일러이다. 최신버전의 JS 문법을 브라우저가 이해할 수 없기 때문에, babel이 브라우저가 이해할 수 있도록 컴파일 시켜주는 역할을 한다.
- styled-components의 경우 문자열 안에 css코드를 적게 되는데, 이 부분을 브라우저가 이해할 수 있도록 해주기 위해 babelrc 파일을 생성해서 styled-components를 브라우저가 이해할 수 있도록 해주는 것이다.

### 설치

```bash
$npm install babel-plugin-styled-components
또는
$yarn add babel-plugin-styled-components
```

### 적용

- `.babelrc` 파일을 생성해서 아래와 같이 세팅한다.
  ![image](https://user-images.githubusercontent.com/53039583/157672897-e2f71ab4-d136-4ba1-b795-f643bf036cc9.png)
  
## globalStyle 과 theme

- 기본적으로 적용되는 css들을 reset하고 자주 쓰는 css 조합을 theme로 등록해두면 편하게 css 속성들을 적용해 나갈 수 있다.
- globalStyle 파일에서는 reset.css 와 같은 역할을 할 수 있도록 세팅한다.
- theme에서는 `display: flex; align-item: center;` 와 같이 자주 사용하는 css 세트를 만들어서 등록해둔다.
  ![image](https://user-images.githubusercontent.com/53039583/157672945-c93e5935-a5f6-4da2-a541-88378af49ab5.png)
- Home.module.css는 무시하고 globalstyle과 theme만 보면 된다.

<<<<<<< HEAD
## \_app.js 세팅

![image](https://user-images.githubusercontent.com/53039583/157672975-ff55997f-9f4c-4b0b-907b-81277112b05b.png)

- 위와 같이 설정해둔 GlobalStyle과 theme를 전역으로 사용할 수 있도록 pages/\_app.js 에 세팅해준다.
- 절대경로로 파일을 import 하는 방법은 tsconfig.json 파일에서 “baseUrl” 부분을 설정해주면 된다.
- 보통 `“./src”` 부터 많이 시작할 경우 `“baseUrl”: “./src”` 으로 세팅한다

## \_document.js 세팅

- SSR을 할 때도, styled-components를 적용할 수 있도록 설정해준다.

![image](https://user-images.githubusercontent.com/53039583/157673010-f3c2f041-e561-4580-9cee-8cb8ecd167ed.png)

- SSR에서 styled-components는 사용자가 접속하였을 때, 변환되기 때문에 깜빡이는 현상이 생기게 된다. 그래서 미리 css를 적용시켜두어야 깜빡이는 현상 없이 페이지를 실행할 수 있는데 이것을 \_document.js 에 세팅하는 것이다.
- [https://velog.io/@geonoo99/NextJS-세팅하기](https://velog.io/@geonoo99/NextJS-%EC%84%B8%ED%8C%85%ED%95%98%EA%B8%B0)
=======
## \_app.js

> ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b646dc06-934f-4696-9f96-cb2ccdc16c1b/Untitled.png)
>
> ### 세팅
>
> - 위와 같이 설정해둔 GlobalStyle과 theme를 전역으로 사용할 수 있도록 pages/\_app.js 에 세팅해준다.
> - 절대경로로 파일을 import 하는 방법은 tsconfig.json 파일에서 “baseUrl” 부분을 설정해주면 된다.
> - 보통 `“./src”` 부터 많이 시작할 경우 `“baseUrl”: “./src”` 으로 세팅한다
>
> ### 기능
>
> - 페이지 전환 시 레이아웃을 유지할 수 있음
> - 페이지 전환 시 상태값을 유지할 수 있음
> - componentDidCatch 를 이용해서 커스텀 에러 핸들링을 할 수 있음
> - 추가적인 데이터를 페이지로 주입시켜주는게 가능해짐
> - Global CSS를 이곳에 선언함.

## \_document.js

> ### 세팅
>
> - SSR을 할 때도, styled-components를 적용할 수 있도록 설정해준다.
>
> ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a0a62b44-4a84-42fa-abf9-20a6ad35d59d/Untitled.png)
>
> - SSR에서 styled-components는 사용자가 접속하였을 때, 변환되기 때문에 깜빡이는 현상이 생기게 된다. 그래서 미리 css를 적용시켜두어야 깜빡이는 현상 없이 페이지를 실행할 수 있는데 이것을 \_document.js 에 세팅하는 것이다.
> - [https://velog.io/@geonoo99/NextJS-세팅하기](https://velog.io/@geonoo99/NextJS-%EC%84%B8%ED%8C%85%ED%95%98%EA%B8%B0)
>>>>>>> jwdev

## 새로운 페이지 만들기

> - Next에서 기본적으로 생성되는 pages 폴더 내부에 페이지 파일을 만들면, 자동으로 인식하여 라우팅까지 해준다.
>
> ### Link 컴포넌트
>
> - `import Link from ‘next/link’` 구문을 통해 Link 컴포넌트를 불러와 연결한다.
> - 자동완성 기능으로 import 할 때, `import { Link } from ‘...’` 형식으로 정의되는건 아닌지 확인!! (에러발생할 수 있음)
> - <Link> 컴포넌트 안에 <a> 태그를 반드시 넣어주어야 한다.
> - <Link href=””> 에 연결시킬 페이지 컴포넌트의 path 를 삽입한다.
> - 페이지 컴포넌트는 `export default` 로 내보내야 한다.
>
> ```jsx
> // pages/test.js
>
> import React from 'react';
> import Link from 'next/link';
>
> function Test() {
>   return (
>     <div>
>       <h1> Hi Hi Hi</h1>
>       <Link href="/">
>         <a>Back to Home</a>
>       </Link>
>     </div>
>   );
> }
>
> export default Test;
> ```
>
> ```jsx
> // pages/index.js
>
> import Head from 'next/head';
> import Image from 'next/image';
> import Link from 'next/link';
> import styles from '../styles/Home.module.css';
>
> export default function Home() {
>   return (
>     <div className={styles.container}>
>       <Head>
>         <title>Create Next App</title>
>         <meta name="description" content="Generated by create next app" />
>         <link rel="icon" href="/favicon.ico" />
>       </Head>
>
>       <main className={styles.main}>
>         <Link href="/test">
>           <a className={styles.card}>
>             <h2>Here I am</h2>
>             <p>여기는 테스트용 페이지입니다.</p>
>           </a>
>         </Link>
>       </main>
>     </div>
>   );
> }
> ```

## 에러

- 자세히
  ### `Can't resolve 'styled-components'` styled-comoponents 라이브러리 오류
  - 증상: \_\_app.js 에서 ThemeProvider 컴포넌트를 import 하는 구문에서 styled-compoents 라이브러리를 찾을 수 없다는 에러가 발생하였다.
  - 원인: \_\_app.js 는 자바스크립트 파일이기 때문에 @types/styled-components 가 아닌 일반 styled-components 패키지로부터 import 해야한다. 하지만, 나는 typescript 프로젝트 파일 만드는 것에만 집중한 나머지 @types 라이브러리 패키지만 설치한 것이다.
  - 솔루션 : 일반 자바스크립트용 styled-components 패키지를 설치하여 해결하였다.
    `yarn add styled-components`
  ### **`Error: Element type is invalid`: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.**
  - 증상 : 테스트 페이지 컴포넌트를 생성하여 라우팅 하는 과정에서 발생하였다. 에러 구문을 간단히 해석해보자면 **컴포넌트의 export 형식과 import 형식 정의가 잘못되었다는 것이다.**
  - 원인 : \_app.js 에서 GlobalStyle 컴포넌트를 불러오는 import 구문이 원인이었다. GlobalStyle 이 `default export` 가 아닌 `export` 로 되어 있었는데, \_app.js 에서는 `import GlobalStyle from ‘./...’` 로 임포트하려고 하여 충돌이 발생한 것이다.
  - 솔루션 : GlobalStyle.ts 에서 `export` → `default export` 로 수정하여 해결하였다.

## 참고
  - _app.js 와 _document.js
    - https://merrily-code.tistory.com/154

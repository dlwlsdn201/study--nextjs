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
- **코드 스플리팅**: 일반적인 CRA 에서는 초기 렌더링 때 모든 컴포넌트를 내려받는다. 하지만 규모가 커지고, 용량이 커지면 로딩 속도가 지연될 수 있는 문제점이 있다. <br/> Next는 이러한 문제점을 개선하여 필요에 따라 파일을 불러올 수 있게 여러 개의 파일을 분리하는 코드 스플리팅을 사용한다. 폴더 구조를 보면 pages 폴더 안에 각 page 즉, 라우트들이 들어가며, Components 폴더에는 React 컴포넌트들이 들어가게 된다. 예를 들어, 브라우저가 실행되고, 사용자가 접속을 하게 되면, 첫 페이지인 index page만 불러오게 되고, 그 이후에 다른 페이지로 넘어갔을 때는 해당 페이지만 불러오게 됨.

  ![image](https://user-images.githubusercontent.com/53039583/158048617-5a610fce-d9f6-402b-94bb-76875f4b4d8d.png)

- **간단한 CSR 제공** : 사용방법은 **Router**와 **Link**를 모두 **import** 해서 사용할 수 있다. 먼저 **Link**에서는 `href`와 `as` props가 있는데 이 `href`는 해당 페이지로 이동해 주는 역할을 하고, `as`는 href의 URL을 조금 더 직관적으로 만들어주는 역할을 해준다. Router는 링크와 동일하게 해당 페이지로 이동해주는 역할을 하지만 개발자에게 조금 더 제어권을 넘겨줘서 쉽게 Redirect도 가능하다.

  ![image](https://user-images.githubusercontent.com/53039583/158048627-07684545-3fd6-4440-8577-4044a95d92de.png)

- **커스텀 API 서버 (as - 라우트 마스킹) :** 만약에 Link 컴포넌트에서 as를 사용하게 되면 실제 페이지가 없는 곳에 요청하게 된다. 그래서 직접 커스텀 서버를 생성해서 as의 URL이 href를 바라볼 수 있게 처리를 따로 해줘야 새로 고침이나 뒤로 갔을 때도 렌더링이 가능해진다.
  ![image](https://user-images.githubusercontent.com/53039583/158048636-8d8c6215-30bd-4d16-8dd2-cf91604b6729.png)
- **getInitialProps():** Next의 핵심기능인 getInitialProps 함수를 통해 데이터를 가져올 수 있다. 밑에 코드를 보면 React의 ComponentDidMount 는 렌더링이 두 번 되지만, Next에서는 데이터를 미리 갖고 오기 때문에 한 번에 렌더링이 가능하다.
  ![image](https://user-images.githubusercontent.com/53039583/158048640-d39dd5b4-aa0c-4fd5-87cf-5c224a2a10e5.png)
  ![image](https://user-images.githubusercontent.com/53039583/158048649-d9be44dc-a0f3-4d3d-9c35-636b91422fca.png)

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

---

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

> ### ESLint config
>
> ```json
> // .eslintrc.json
> {
>   "extends": ["react-app", "prettier/prettier"],
>   "plugins": ["react-hooks", "simple-import-sort", "prettier"],
>   "rules": {
>     "prettier/prettier": "error",
>     "react-hooks/rules-of-hooks": "error",
>     "simple-import-sort/imports": "error",
>     "simple-import-sort/exports": "error",
>     "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
>     "comma-dangle": ["error", "always-multiline"],
>     "object-curly-spacing": ["error", "always"],
>     "space-in-parens": ["error", "never"],
>     "computed-property-spacing": ["error", "never"],
>     "comma-spacing": ["error", { "before": false, "after": true }],
>     "eol-last": ["error", "always"],
>     "quotes": ["error", "single"],
>     "no-tabs": "error",
>     "semi": ["error", "never"],
>     "import/no-anonymous-default-export": 0,
>     "object-shorthand": "error",
>     "padding-line-between-statements": [
>       "error",
>       { "blankLine": "always", "prev": "*", "next": "return" }
>     ],
>     "@typescript-eslint/no-redeclare": 0
>   }
> }
> ```
>
> ### prettier config
>
> ```json
> // .prettierrc.json
> {
>   "printWidth": 80,
>   "semi": true,
>   "singleQuote": true,
>   "trailingComma": "all",
>   "tabWidth": 2,
>   "bracketSpacing": true,
>   "endOfLine": "auto",
>   "useTabs": false
> }
> ```

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

> ### 설치
>
> ```bash
> $npm install @types/styled-components
> 또는
> $yarn add @types/styled-components
> ```
>
> ### 적용
>
> - next.js 에 styled-components 를 적용하기 위해서는 설치 외 또 다른 설정이 필요하다.

## babelrc 파일 생성 및 설정

- babel : JS 컴파일러이다. 최신버전의 JS 문법을 브라우저가 이해할 수 없기 때문에, babel이 브라우저가 이해할 수 있도록 컴파일 시켜주는 역할을 한다.
- styled-components의 경우 문자열 안에 css코드를 적게 되는데, 이 부분을 브라우저가 이해할 수 있도록 해주기 위해 babelrc 파일을 생성해서 styled-components를 브라우저가 이해할 수 있도록 해주는 것이다.

> ### 설치
>
> ```bash
> $npm install babel-plugin-styled-components
> 또는
> $yarn add babel-plugin-styled-components
> ```
>
> ### 적용
>
> - `.babelrc` 파일을 생성해서 아래와 같이 세팅한다.
>   ![image](https://user-images.githubusercontent.com/53039583/157672897-e2f71ab4-d136-4ba1-b795-f643bf036cc9.png)

## globalStyle 과 theme

- 기본적으로 적용되는 css들을 reset하고 자주 쓰는 css 조합을 theme로 등록해두면 편하게 css 속성들을 적용해 나갈 수 있다.
- globalStyle 파일에서는 reset.css 와 같은 역할을 할 수 있도록 세팅한다.
- theme에서는 `display: flex; align-item: center;` 와 같이 자주 사용하는 css 세트를 만들어서 등록해둔다.
  ![image](https://user-images.githubusercontent.com/53039583/157672945-c93e5935-a5f6-4da2-a541-88378af49ab5.png)
- Home.module.css는 무시하고 globalstyle과 theme만 보면 된다.

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

<br/>

## 새로운 페이지 만들기

- Next에서 기본적으로 생성되는 pages 폴더 내부에 페이지 파일을 만들면, 자동으로 인식하여 라우팅까지 해준다.

> ### Link 컴포넌트
>
> - `import Link from ‘next/link’` 구문을 통해 Link 컴포넌트를 불러와 연결한다.
> - 자동완성 기능으로 import 할 때, `import { Link } from ‘...’` 형식으로 정의되는건 아닌지 확인!! (에러발생할 수 있음)
> - <Link> 컴포넌트 안에 <a> 태그를 반드시 넣어주어야 한다.
> - <Link href=””> 에 연결시킬 페이지 컴포넌트의 path 를 삽입한다.
> - 페이지 컴포넌트는 `export default` 로 내보내야 한다.
>
>   ```jsx
>   // pages/test.js
>
>   import React from 'react';
>   import Link from 'next/link';
>
>   function Test() {
>     return (
>       <div>
>         <h1> Hi Hi Hi</h1>
>         <Link href="/">
>           <a>Back to Home</a>
>         </Link>
>       </div>
>     );
>   }
>
>   export default Test;
>   ```
>
>   ```jsx
>   // pages/index.js
>
>   import Head from 'next/head';
>   import Image from 'next/image';
>   import Link from 'next/link';
>   import styles from '../styles/Home.module.css';
>
>   export default function Home() {
>     return (
>       <div className={styles.container}>
>         <Head>
>           <title>Create Next App</title>
>           <meta name="description" content="Generated by create next app" />
>           <link rel="icon" href="/favicon.ico" />
>         </Head>
>
>         <main className={styles.main}>
>           <Link href="/test">
>             <a className={styles.card}>
>               <h2>Here I am</h2>
>               <p>여기는 테스트용 페이지입니다.</p>
>             </a>
>           </Link>
>         </main>
>       </div>
>     );
>   }
>   ```
>
>   <br/>

## Dynamic Routes (동적 라우팅)

- 페이지의 쿼리 파라미터를 이용하여 동적인 라우팅을 제공함
- 상품 아이디가 각각 다른 쇼핑몰 상품들처럼 특정 쿼리로 인해 url 이 구분되는 경우 사용하면 유용함

> ### 사용
>
> - `pages/view/[id].js` ⇒ URL/post/1413434 형식으로 특정 id에 대한 페이지 접근 가능
> - 동적 라우팅 시, <a> 태그가 아닌 ‘next/link’ 패키지에 들어있는 `<Link href="">` 컴포넌트를 사용해야한다.
>
> ### 예시
>
> - 화장품 온라인몰에서 상품별 ID 값으로 상세 상품 페이지를 라우팅할 때
>
>   - **pages/ItemList.tsx**
>
>     ```jsx
>     import React from 'react';
>     import { Grid, Image } from 'semantic-ui-react';
>     import styles from '../../styles/ItemList.module.css';
>     import Link from 'next/link';
>     interface product {
>       image_link: string;
>       name: string;
>       price: string;
>       id: number;
>       product_link: string;
>       brand: string;
>     }
>
>     const ItemList = ({ list }) => {
>       return (
>         <Grid columns={3} divided>
>           <Grid.Row>
>             {list.map((item: product, index: number) => (
>               <Grid.Column key={index}>
>                 <Link href={`/view/${item.id}`}>
>                   <a>
>                     <Image
>                       alt={item.name}
>                       src={item.image_link}
>                       className={styles.img_item}
>                     />
>                   </a>
>                 </Link>
>                 <strong>{item.name}</strong>
>                 <strong>{item.price}</strong>
>               </Grid.Column>
>             ))}
>           </Grid.Row>
>         </Grid>
>       );
>     };
>
>     export default ItemList;
>     ```
>
>   - **_pages/post/[id].js_**
>
>     ```jsx
>     import { useRouter } from 'next/router';
>     import Item from './../../src/components/Item';
>     import { useEffect, useState } from 'react';
>
>     const Post = () => {
>       const router = useRouter();
>       const { id } = router.query;
>       const [item, setItem] = useState({});
>
>       const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
>
>       const getData = () => {
>         axios.get(API_URL).then((res) => {
>           console.log(res.data);
>           setItem(res.data);
>         });
>       };
>
>       useEffect(() => {
>         if (id && id > 0) {
>           getData();
>         }
>       }, []);
>
>       return <Item />;
>     };
>
>     export default Post;
>     ```
>
>   - **_src/components/Item_**
>
>     ```jsx
>     import React from 'react';
>     import { Button, Image, Divider } from 'semantic-ui-react';
>
>     const Item = ({ data }) => {
>       const { image_link, name, price, description } = data;
>       return (
>         <div style={{ padding: '0px 80px' }}>
>           <div
>             style={{
>               display: 'flex',
>               // justifyContent: 'center',
>               alignItems: 'center'
>             }}
>           >
>             <div style={{ display: 'inline-block', marginRight: 20 }}>
>               <Image src={image_link} alt={name} />
>             </div>
>             <div style={{ display: 'inline-block' }}>
>               <strong style={{ display: 'block' }}>{name}</strong>
>               <strong
>                 style={{
>                   display: 'block',
>                   color: 'skyblue',
>                   fontSize: '1.4rem'
>                 }}
>               >
>                 {`$${price}`}
>               </strong>
>               <Button style={{ marginTop: 20 }} color="orange">
>                 구매하기
>               </Button>
>             </div>
>           </div>
>           <Divider />
>           <div>
>             <p>{description}</p>
>           </div>
>         </div>
>       );
>     };
>
>     export default Item;
>     ```
>
>     ![image](https://user-images.githubusercontent.com/53039583/158183327-622d6b9b-c7e4-4c6c-b760-e90b52d2cd40.png)
>
> ## Next JS는 모든 페이지를 사전 렌더링(Pre-rendering) 한다
>
> - 더 나은 퍼포먼스
> - 검색 엔진 최적화(SEO)
>
> 사전 렌더링은 아래와 같이 두 가지 방식이 있으며, 차이점은 html 파일을 생성하는 시점이다.
>
> > ### 1. 정적 생성
> >
> > - 프로젝트가 build 하는 시점에 html 파일들이 생성
> > - 모든 요청에 재사용
> > - 퍼포먼스 이유로 **Next JS는 정적 생성을 권장함**
> > - 정적 생성된 page들은 CDN에 cache
> > - `getStaticProps` / `getStaticPaths`
>
> > ### 2. SSR (Dynamic Rendering)
> >
> > - 매 요청마다 html을 생성
> > - **항상 최신 상태**를 유지 (대신 정적 생성보다는 퍼포먼스가 떨어짐)
> > - `getServerSideProps`
>
> ## <a> 태그 또는 location 대신 <Link/>, next Router 을 사용하는 이유?
>
> - \<a> 태그 또는 location.href 을 이용하는 대신 <Link/>, next Router 을 사용하는 이유는 바로 링크 이동 시 페이지의 새로고침 여부이다.
>   - \<a> tag, location.href 로 링크 이동 시 ⇒ 페이지가 새로고침 됨 (SPA 장점이 사라짐)
>     - 관리되는 컴포넌트의 state 가 초기화될 수 있다.
>   - \<Link/>, next Router 로 링크 이동 시 ⇒ **페이지 새로고침 X, 내용물만 업데이트** 됨.
>
> ## API Loading 상태를 관리를 위한 state 활용
>
> - SSR 이 아닌 정적 생성된 페이지를 렌더링 시, 데이터를 로드하는 동안 빈 화면이 출력되어 UX 적으로 좋지않을 수 있다. 따라서, data Loading 상태를 관리하는 state 을 통해 Loading 페이지를 추가 함으로서, 개선할 수 있다.
>
>   - Loading 상태 화면 구현 전
>
>     ![image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/57422502-f19e-4c44-8449-b7f632920921/before.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220316T132232Z&X-Amz-Expires=86400&X-Amz-Signature=bbac4288f8f7276589a4956f5939a608e5a1e6c8fdd43ed9adb1e53c5ca91b5a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22before.gif%22&x-id=GetObject)
>
>   - Loading 상태 하면 구현 후
>
>     ![image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/52e8a656-eaa3-4781-9875-b7a01a09f9b7/after.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220316T132216Z&X-Amz-Expires=86400&X-Amz-Signature=3ec318eb90edeb7dbc98e1246be2619f39af717153602deea222f8d14a5257a0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22after.gif%22&x-id=GetObject)
>
>     ```jsx
>     import ItemList from './../src/components/ItemList';
>     import { Divider, Header, Loader } from 'semantic-ui-react';
>
>     export default function Home() {
>       const [list, setList] = useState([]);
>       const [isLoading, setIsLoading] = useState(true);
>
>       const API_URL =
>         'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
>
>       const getData = () => {
>         setIsLoading(true);
>         axios.get(API_URL).then((res) => {
>           console.log(res);
>           setList(res.data);
>           setIsLoading(false);
>         });
>       };
>
>       useEffect(() => {
>         getData();
>       }, []);
>
>       return (
>         <div>
>           <Head>
>             <title>HOME | 화장품</title>
>             <meta name="description" content="화장품 상품 페이지입니다" />
>           </Head>
>           {isLoading ? (
>             <Loader content="Loading" active></Loader>
>           ) : (
>             <>
>               <Header as="h3" style={{ paddingTop: 40 }}>
>                 베스트 상품
>               </Header>
>               <Divider />
>               <ItemList list={list} />
>             </>
>           )}
>         </div>
>       );
>     }\
>     ```
>
> ## 특정 페이지 SSR 적용하기
>
> ### `getServerSideProps(context) {...}` 비동기 함수 이용
>
> - **context** : params, 요청, 응답 쿼리 등을 담고 있는 파라미터이다.
> - 예시로, 화장품 상품의 상세 페이지인 `pages/view/[id].js` 에 SSR 을 적용해보았다.
> - SSR 을 적용하려는 페이지 컴포넌트의 내부에 아래와 같이 작성하면, Next.js 가 자동으로 read 하여 SSR을 적용시켜준다
>   ```jsx
>   // pages/view/[id].js  상품 상세 페이지 컴포넌트
>
>   import axios from 'axios';
>   import { useRouter } from 'next/router';
>   import { useEffect, useState } from 'react';
>   import Item from './../../src/components/Item';
>   import { Loader } from 'semantic-ui-react';
>
>   const Post = ({ item }) => {
>     // getServerSideProps() 의 return props 값
>     const router = useRouter();
>     const { id } = router.query;
>
>     const [item, setItem] = useState({});
>     const [isLoading, setIsLoading] = useState(true);
>
>     const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
>
>     const getData = () => {
>       axios.get(API_URL).then((res) => {
>         console.log(res.data);
>         setItem(res.data);
>         setIsLoading(false);
>       });
>     };
>
>     useEffect(() => {
>       if (id && id > 0) {
>         getData();
>       }
>     }, []);
>
>     return isLoading ? (
>       <Loader content="Loading" active />
>     ) : (
>       <Item data={item} />
>     );
>   };
>
>   export const getServerSideProps = async (context) => {
>     const id = context.params.id;
>     const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
>     const res = await axios.get(apiUrl);
>     const data = res.data;
>
>     return {
>       props: {
>         item: data
>       }
>     };
>   };
>
>   export default Post;
>   ```
> - `getServerSideProps()` 의 return 값인 { props: { item: data } } 는 해당 page 컴포넌트의 prop 으로 전달될 수 있다.
>
> ## Navigation 메뉴로 페이지 이동 시 라우터 사용 방법
>
> - 보통 페이지에서 카테고리 메뉴와 같은 Navigation 으로 페이지를 이동하는 경우가 있다.
>   이럴 때, router를 아래와 같이 사용한다.
>
> ```jsx
> import { useRouter } from 'next/router';
> import React from 'react';
> import { Menu } from 'semantic-ui-react';
>
> const Gnb = () => {
>   const activeItem = 'home';
>   const router = useRouter();
>
>   const goLink = (e, data) => {
>     if (data.name === 'home') {
>       router.push('/');
>     } else if (data.name === 'about') {
>       router.push('/about');
>     }
>   };
>
>   return (
>     <Menu inverted>
>       <Menu.Item
>         name="home"
>         active={activeItem === 'home'}
>         onClick={goLink}
>       />
>       <Menu.Item
>         name="about"
>         active={activeItem === 'about'}
>         onClick={goLink}
>       />
>     </Menu>
>   );
> };
>
> export default Gnb;
> ```
>
> - 여기서, useRouter() 로 정의한 `router` 변수에는 아래와 같은 데이터들이 들어있다.
>   ( router.push(’`PATH`’) 할 경우, pathname, route, asPath 가 `PATH` 값으로 업데이트 된다)
>   ```json
>   // useRouter()
>
>   {
>     "pathname": "/view/[id]", // 파일명
>     "route": "/view/[id]",
>     "query": {
>       "id": "468" // 쿼리 데이터
>     },
>     "asPath": "/view/468", // 실제 주소(url)
>     "components": {
>       "/view/[id]": {
>         "styleSheets": [],
>         "__N_SSP": true,
>         "__N_RSC": false,
>         "props": {
>           "pageProps": {
>             "item": {
>               "id": 468,
>               "brand": "maybelline",
>               "name": "Maybelline Face Studio Master Hi-Light Light Booster Blush",
>               "price": "14.99",
>               "price_sign": null,
>               "currency": null,
>               "image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/4621032a92cb428ad640c105b944b39c_ra,w158,h184_pa,w158,h184.png",
>               "product_link": "https://well.ca/products/maybelline-face-studio-master_88831.html",
>               "website_link": "https://well.ca",
>               "description": "Maybelline Face Studio Master Hi-Light Light Boosting blush formula has an expert \nbalance of shade + shimmer illuminator for natural glow. Skin goes \nsoft-lit with zero glitz.\n\n\t\tFor Best Results: Brush over all shades in palette and gently sweep over \ncheekbones, brow bones, and temples, or anywhere light naturally touches\n the face.\n\n\t\t\n\t\n\n                    ",
>               "rating": null,
>               "category": "powder",
>               "product_type": "blush",
>               "tag_list": [],
>               "created_at": "2016-10-01T18:35:27.706Z",
>               "updated_at": "2017-12-23T21:08:47.102Z",
>               "product_api_url": "http://makeup-api.herokuapp.com/api/v1/products/468.json",
>               "api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/468/original/open-uri20171223-4-sz64re?1514063327",
>               "product_colors": []
>             }
>           },
>           "__N_SSP": true
>         }
>       },
>       "/_app": {
>         "styleSheets": []
>       },
>       "/about": {
>         "styleSheets": [],
>         "__N_RSC": false,
>         "props": {
>           "pageProps": {}
>         }
>       },
>       "/": {
>         "styleSheets": [],
>         "__N_RSC": false,
>         "props": {
>           "pageProps": {}
>         }
>       }
>     },
>     "isFallback": false,
>     "basePath": "",
>     "isReady": true,
>     "isPreview": false,
>     "isLocaleDomain": false,
>     "events": {}
>   }
>   ```

---

## 에러

> ### `Can't resolve 'styled-components'` styled-comoponents 라이브러리 오류
>
> - 증상: \_\_app.js 에서 ThemeProvider 컴포넌트를 import 하는 구문에서 styled-compoents 라이브러리를 찾을 수 없다는 에러가 발생하였다.
> - 원인: \_\_app.js 는 자바스크립트 파일이기 때문에 @types/styled-components 가 아닌 일반 styled-components 패키지로부터 import 해야한다. 하지만, 나는 typescript 프로젝트 파일 만드는 것에만 집중한 나머지 @types 라이브러리 패키지만 설치한 것이다.
> - 솔루션 : 일반 자바스크립트용 styled-components 패키지를 설치하여 해결하였다.
>   `yarn add styled-components`

> ### **`Error: Element type is invalid`: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.**
>
> - 증상 : 테스트 페이지 컴포넌트를 생성하여 라우팅 하는 과정에서 발생하였다. 에러 구문을 간단히 해석해보자면 **컴포넌트의 export 형식과 import 형식 정의가 잘못되었다는 것이다.**
> - 원인 : \_app.js 에서 GlobalStyle 컴포넌트를 불러오는 import 구문이 원인이었다. GlobalStyle 이 `default export` 가 아닌 `export` 로 되어 있었는데, \_app.js 에서는 `import GlobalStyle from ‘./...’` 로 임포트하려고 하여 충돌이 발생한 것이다.
> - 솔루션 : GlobalStyle.ts 에서 `export` → `default export` 로 수정하여 해결하였다.

> ### `viewport meta tags should not be used in _document.js's <Head>`
>
> - 증상
>   ![image](https://user-images.githubusercontent.com/53039583/158181338-20a7147b-27fd-4e47-a480-46e180e0aeee.png)
>
> - 원인: \_document.js 스크립트 파일의 <Head></Head> 내부에 `<meta viewport=””/>` 태그가 들어있어서 발생
> - 솔루션: `<meta viewport=””/>` 태그를 \_document.js 가 아니라 \_app.js 의 <Head></Head> 내부에 넣어준다

---

## 참고

- \_app.js 와 \_document.js
  - https://merrily-code.tistory.com/154

### 화장품 상품 페이지는 정적 생성? SSR ?

- home 페이지(전체 상품 리스트)
  - 화면을 그리는 API를 비동기로 호출함. <br/>
    즉, 화면에 들어온 후에 화장품 리스트를 받기 위해서 API를 호출하고 있으니 굳이 SSR 이 필요없음.
- 상품 상세 페이지
  - 매번 상품들의 title 과 내용들이 바뀔 수 있기 때문에, 화면을 보여주기 전에 데이터가 미리 준비되어 있어야 한다.
  - 데이터가 미리 준비되어 있어야 검색 엔진에서도 읽을 수 있고 SNS로 공유 했을 때도 정보가 출력된다.

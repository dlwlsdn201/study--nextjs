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
>               alignItems: 'center',
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
>                   fontSize: '1.4rem',
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
>
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
>         item: data,
>       },
>     };
>   };
>
>   export default Post;
>   ```
>
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
>
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
>
> ## Error Pages
>
> - Next JS 에서는 기본적으로 에러 페이지를 static으로 제공한다.
>
> ### Custom Error Page 생성하기
>
> - 기본적으로 제공되는 에러 페이지 디자인이나 추가할 기능이 따로 있을 경우, 커스터마이징 할 수 있다.
>
> - **404 Error 페이지일 경우**
>   - `pages/404.js` 을 만들어서 페이지를 구현한다 (정적 구현)
> - **500 Error 페이지일 경우**
>
>   - **Production** 에서 확인해야함 (dev 모드에서는 서버 에러 시, 로그를 보여주기 때문)
>   - `pages/_error.js` 을 만들어서 페이지 구현
>   - 이 페이지는 정적으로 최적화 되어있지는 않다 (에러 발생 시, 서버 쪽으로 에러를 보내는 작업을 동반하는 경우가 많기 때문)
>   - 아래와 같이 작성하면, 클라이언트 측과 서버 측의 에러들을 모두 관리할 수 있다.
>     (따라서, pages/404.js 을 지워도 404 에러 페이지 동작은 한다. 하지만, 404는 static 으로 제공하는게 훨씬 좋기 때문에 pages/404.js 을 만들어서 따로 구현하는 것이 좋다)
>     ```jsx
>     const Error = ({ staticCode }) => {
>     return (
>     (...)
>     )
>     }
>
>         Error.getInitialProps = ({ res, err }) => {
>         	const statusCode = res ? res.statusCode : err ? err.statusCode: 404;
>         	return { statusCode };
>         };
>
>         export default Error;
>         ```
>
> ## 환경 변수
>
> - 개발 서버와 프로덕션 서버에서 각각 다른 데이터가 표현되어야 할 때 환경변수를 설정해주어야 한다
> - 환경 변수의 형식은 각 환경에 따라 조금씩 다르다.
>
>   ```json
>   // node js 환경에서 환경변수를 불러오는 형식
>   [*process.env.변수명*]
>
>   // browser(Client) 환경에서 환경변수를 불러오는 형식
>   [*process.env.NEXT_PUBLIC_변수명*]
>   ```
>
> ### 개발서버용 환경변수
>
> - `.env.development`
>
>   ```tsx
>   // ./env.development
>
>   // 환경변수명=VALUE
>   NAME="Development"
>   NEXT_PUBLIC_API_URL=http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline
>   ```
>
> ### 프로덕션용 환경변수
>
> - `.env.production`
>
>   ```tsx
>   // ./env.production
>
>   // 환경변수명=VALUE
>   NAME="Production"
>   NEXT_PUBLIC_API_URL=http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline
>   ```
>
> ### **환경 변수가 필요한 이유 ?**
>
> - 환경 변수가 필요한 이유는 우리가 웹 애플리케이션을 만들 때 개발 모드(development mode)와 배포 모드(production mode)에 따라 다르게 코딩해야 하기 때문이다.
>   보통 회사의 서버에는 개발 서버가 따로 있고 배포 서버가 따로 있는데, 이럴 경우 다른 API Url 또는 비밀 키를 사용해야 할 경우가 있다.
>   예를 들어, **개발 중에는 development-api.company.com라는 Url을 사용**하고,
>   **라이브로 배포할 때는 api.company.com 을 사용해야 할 때이다**.
>   또 다른 예로 개발 및 테스트 중에 실제 결제 구현을 하지 않도록 **테스트 API 키**를 사용하려고 할 때이다.
>
> ### **NextJS에서 환경 변수를 어떻게 사용할까?**
>
> - 단순하게 NextJS 프로젝트 최상단 폴더에서 .env 파일을 만들면 된다.
>   이 파일 내에서 우리는 다음과 같이 환경 변수를 선언할 수 있다.
>
> ```
> NEXT_PUBLIC_API_URL = "https://development-api.company.com"
> PAYMENT_KEY = "*************"
> ```
>
> 그런 다음 `process.env.VARIABLE_NAME` 을 사용하여 .env 파일에서 정의한 변수를 참조할 수 있다.
>
> 예를 들어, `**axios`를 사용하여 API에 GET 요청을 한다면\*\* 다음과 같이 사용하면 된다.
>
> ```tsx
> axios.get(`${process.env.NEXT_PUBLIC_API_URL}/customers`);
> ```
>
> ### **NEXT_PUBLIC은 무슨 뜻인가?**
>
> - NextJS 애플리케이션에는 **두 부분**이 있다는 것을 알아야한다.
>   - React 컴포넌트를 사용하여 빌드되고 클라이언트에게만 보여지는 React UI 부분
>   - NextJS 애플리케이션으로 서버에서 실행되는 겁니다.
>     즉, 다음과 같은 작업이 **NextJS 애플리케이션의 서버 실행에 해당**된다.
>   - `/pages/api`(라우팅할 때)
>   - `getServerSideProps()` (serverSide props를 가져올 때)
>   - `getStaticProps()` (build시 한 번만 props를 가져올 때)
>
> 이 세 가지 기능은 항상 서버에서 실행되므로 NodeJS의 **프로세스(process)에 액세스할 수 있다**.
>
> 이 데이터는 클라이언트에 직접 전송되지 않으므로 결제정보 같은 민감한 값을 사용해도 안전할 수 있는 것이다.
>
> 반면에 **클라이언트로 전송되는 데이터**는 쉽게 노출될 수 있으므로 민감한 값을 클라이언트에 전송하는 것은 위험하다.
>
> 이러한 이유로 **NextJS**는 `NEXT_PUBLIC_` 이라는 접두사를 사용하지 않으면, **클라이언트 코드에서 환경 변수에 액세스하는 것을 허용하지 않는다**.
>
> **React 컴포넌트에서 액세스해야 하는 환경 변수가 있는 경우 →** `NEXT_PUBLIC_` 라는 접두사 **사용**
>
> **서버 측에서만 사용해야 하는 변수가 있는 경우 →**  `NEXT_PUBLIC_` 같은 접두사 **사용 X**
>
> ### **.env 파일을 github에 올려도 될까?**
>
> - .env 파일은 민감한 정보를 가지고 있기 때문에 우리가 github에 push할때는 빼는게 좋다.
>   그래서 가장 좋은 방법은 `[.env.example 이름]`으로 필요한 환경 변수가 **템플릿 형태**로 있는 파일로 만드는 것이 중요하다.
>   **서버에 배포**하거나 다른 개발자가 **git clone 해서 사용**할 때 **.env.example 파일**을 적당하게 수정하여 앱을 실행하는 데 필요한 모든 환경 변수를 채울 수 있다.
>   .env 파일에는 \***\*일반적으로 **비밀 키(SECRET_KEY)**와 **토큰(TOKEN)** 같은 중요한 데이터가 포함되어 있기 때문에 **git 에 포함하지 않는 것이 좋다 →\*\* gitignore 파일에 `.env`꼭 추가하기!!

> ## 정적 생성(Static Generation)
>
> ### Pre-rendering(사전 렌더링)
>
> - 기본적으로 **모든 페이지를 사전 렌더링**
> - **사전에 HTML 파일들을 빌드**한다는 의미
> - 퍼포먼스 향상, SEO
>
>   ![image](https://user-images.githubusercontent.com/53039583/159113764-5ce757d5-ee38-48ce-a530-a1cf46053a99.png)
>
>   ![image](https://user-images.githubusercontent.com/53039583/159113769-426c29fe-76bc-477b-b190-561b48110aa2.png)
>
> - **사전 렌더링의 방식**은 html 생성 타이밍에 따라 아래와 같이 **두 가지**로 나뉜다.
>
> ---
>
> > **_Static Generation 정적 생성_**
>
> - 빌드 시, html 만들고 유저들이 요청할 때마다 전달해줌
> - **마케팅 페이지, 블로그 게시물, 제품 목록, 도움말, 문서** 등 미리 만들어 두는 경우
>
>       ![image](https://user-images.githubusercontent.com/53039583/159113783-e56e6eac-a943-4dfa-b3fa-b6debf3cdbcc.png)
>
>   > **_SSR_**
>
> - 요청을 하면, html을 만들어서 보여줌
> - **관리자 페이지, 분석 차트** 등 항상 최신 상태를 유지해야 하는 경우
>
> ![image](https://user-images.githubusercontent.com/53039583/159113787-d47f0640-463c-4184-adb8-1f7619fb099b.png)
>
> ---
>
> - NEXT JS는 개발자가 페이지별로 개발자가 사전 렌더링 방식을 설정할 수 있다.<br/>
>   (아래는 예시)
>
>   ![image](https://user-images.githubusercontent.com/53039583/159113792-9e805641-add2-4028-bbfb-d7c52d94cc1e.png)
>
> > **_동적 라우팅 페이지를 정적생성 하는 조건?_**
>
> - 대개 **dynamic routing page**는 상품별 상세리스트 등 굉장히 많은 종류들의 데이터들을 대상으로 하기 때문에 모든 종류의 html을 생성하는건 불가능하다.
> - 대신, 개수가 한정적이고 그 종류별 ID 리스트를 미리 알 수 있다면 `getStaticPath()` 을 사용하여 정적생성 할 수 있다.
>
>   - `getStaticPath()` 는 **반드시** `getStaticProps()` **와 함께 사용**되어야 한다. (`getServerSideProps()` 와 사용하면 Error 발생.)
>   - getStaticPath() 문법
>
>     ```jsx
>     export const getStaticPaths = async() => {
>       return {
>         paths: [
>           { params: { ... } }
>         ],
>         fallback: true //
>       };
>     }
>
>     export const getStaticProps = async () => {
>       /*
>     		API request 및 사전에 해야할 작업 코드 구문
>     	*/
>       return {
>         props: {
>           [propKey]: value,
>         }
>       };
>     };
>     ```
>
>   - getStaticPath() 예시
>
>     ```jsx
>     // pages/detail/[id].js
>
>     (...)
>
>     export const getStaticPaths = async () => {
>       return {
>         paths: [
>           { params: { id: '740' } },
>           { params: { id: '730' } },
>           { params: { id: '729' } }
>         ],
>         fallback: true
>       };
>     };
>
>     export const getStaticProps = async () => {
>       const apiUrl = process.env.apiUrl;
>       const res = await axios.get(apiUrl);
>       const data = res.data;
>
>       return {
>         props: {
>           list: data,
>           name: process.env.name
>         }
>       };
>     };
>     ```
>
> ### \<Link/> 의 prefetch 속성은 무엇인가?
>
> - nextJS 에서 제공하는 Link 컴포넌트에는 default로 `prefetch: true` 속성을 가지고 있다.
>   이 속성은 **첫 화면** 또는 **스크롤 시**, viewport 범위에 있는 Link 들은 pre-fetch가 되어 `.next/pages/...` 빌드 파일 경로에 html 파일로 **static generation(정적 생성)** 된다.
>
>   ![image](https://user-images.githubusercontent.com/53039583/159113797-a116ead3-6596-4736-8eca-2bd7d5333949.png)
>
> - **non pre-fetch**
>
>   - 초반에 깜빡임 발생
>
>   ![image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9b1d7ecf-9f79-426d-acb0-c6b2651cb73b/non_pre-fetch.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220319T082753Z&X-Amz-Expires=86400&X-Amz-Signature=afb0a53b940fd1943a8a783d712c376fb21dbb63d0c4aebdc96aa9a1e38e8492&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22non%2520pre-fetch.gif%22&x-id=GetObject)
>
> - **pre-fetch**
>
>   - 깜빡임 없이 바로 로드
>
>   ![image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f35d47ab-4371-4650-bad4-b215c6800740/pre-fetch.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220319T082801Z&X-Amz-Expires=86400&X-Amz-Signature=b7309fd3ba5e5e50f41bd9f33297746ff69571214c65f2a05cb608d1c4c3d23f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22pre-fetch.gif%22&x-id=GetObject)
>
> ## isFallback
>
> - page에 대한 Fallback 여부를 Boolean 타입으로 return 해주는 속성이다.
>
>   ### Syntax
>
>   ```jsx
>   const router = useRouter();
>
>   if (router.isFallback) {
>   	...
>   }
>   ```
>
>   ### Usage
>
>   - 정적생성 되지 않은 page 일 경우, 최초 접속 시 흰색 빈 화면이 잠깐 나오는데, 이는 fallback 진입 직후 data load가 완료되지 않았기 때문에 발생하는 것이다.
>   - 이런 현상을 router.isFallback 속성을 통해 Loader 화면으로 구현하여 해결할 수 있다.
>
>     ```jsx
>     // 동적 라우팅을 적용한 상품 상세 페이지
>     // pages/detail/[id].js
>
>     const Post = ({ item, name }) => {
>       const router = useRouter();
>
>       if (router.isFallback) {
>         return (
>           <div style={{ padding: '100px 0' }}>
>             <Loader active inline="centered">
>               Loading...
>             </Loader>
>           </div>
>         );
>       }
>
>       return (
>         <>
>           {item && (
>             <>
>               <Head>
>                 <title>{item.name}</title>
>                 <meta name="description" content={item.description} />
>               </Head>
>               <Item data={item} />;
>             </>
>           )}
>         </>
>       );
>     };
>     ```
>
>   - 정적생성 된 상품 페이지의 html 파일
>
>     ![image](https://user-images.githubusercontent.com/53039583/159151209-f2617b3b-221e-4426-b835-ae1f735d23ec.png)
>
>   - _기존 화면 (isFallback X, Loader 화면 X)_
>     → 초기 로드 시, 흰색 빈 화면 출력
>       <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9a423969-5462-424c-9491-5d353c7f0361/Not_isFallback.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220320T063645Z&X-Amz-Expires=86400&X-Amz-Signature=3f5a813a50f4fda2fb969953d01d5836fdcaca5102c6beaa98765454a411fe4b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Not%2520isFallback.gif%22&x-id=GetObject" width="550px" height="500px" />
>
>   - _isFallback 을 이용한 Loader 화면 O_
>     → 초기 로드 시, 로딩 화면 출력
>       <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f4cc7aca-d156-42ad-93f4-f056e960127a/isFallback.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220320T063659Z&X-Amz-Expires=86400&X-Amz-Signature=bcd003825a9925abecf9b50243b4f52a712dd65de08bc49493f76bacb9ba5348&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22isFallback.gif%22&x-id=GetObject" width="550px" height="500px" />
>
>
> ## getStaticpaths()
>
> - 동적 라우팅(Dynamic Routing) page를 정적 생성할 때 사용되는 함수이다.
>
>   ### Syntax
>
>   ```jsx
>   export async function getStaticPaths() {
>     return {
>       paths: [
>         { params: { ... } }
>       ],
>       fallback: true // false or 'blocking'
>     };
>   }
>   ```
>
>   ### Usage
>
>   - 특정 라우팅 page url 에 대해서만 정적 생성을 할 때, 사용할 수 있지만, 실제 서비스에서는 paths params 을 고정적으로 설정하는 경우가 거의 없다. 왜냐하면, 각 고유 파라미터를 가진 페이지의 데이터가 삭제되었을 수도 있고, 다른 데이터 추가로 인해 파라미터 값이 달라질 수도 있기 때문이다.
>   - 따라서, array 기반으로 paths 를 넘겨줄 경우에는 `map()` 메서드로 return 하여 넘겨주도록 한다.
>
>   - 아래 코드는 3개의 상품에 대한 각각 상세 page를 현재 기준 id 값을 paths 로 넘겨주어 정적 생성하는 코드이다.
>
>   ```jsx
>   // 만약, 730번 상품이 실제로 삭제되었을 수도 있고, 앞에 새 상품이 추가되어 id 가 값이 변경될 수도 있다.
>   export const getStaticPaths = async () => {
>     return {
>       paths: [
>         { params: { id: '740' } },
>         { params: { id: '730' } },
>         { params: { id: '729' } },
>       ],
>       fallback: true,
>     };
>   };
>   ```
>
>   - 따라서, **마케팅 페이지, 블로그 게시물, 제품 목록, 도움말, 문서** 등의 page일 경우 특정 id를 수동으로 보내주는게 아닌 API 의 [res.data](http://res.data) 를 array 형태로 paths 값으로 넘겨주도록 한다.
>     ```jsx
>     export const getStaticPaths = async () => {
>       const apiUrl = process.env.apiUrl;
>       const res = await axios.get(apiUrl);
>       const data = res.data;
>       return {
>         paths: data.map((item) => ({ params: { id: item.id.toString() } })),
>         fallback: true,
>       };
>     };
>     ```
>
> ## API Routes 와 Cookie로 로그인 기능 구현
>
> - APi routes와 Cookie 로 로그인/로그아웃 기능을 구현하며 동작 원리를 알아보도록 한다.
> - 이 내용은 단순 원리 이해에 대해서만 참고해야 하며, 실제로는 보안 상의 문제로 인해 쿠키로 로그인 구현하면 위험할 수 있으니 주의하도록 한다.
>
>   ### 개요
>
>   - 구현에 대한 전체적인 플로우는 아래와 같다.
>
>   ![image](https://user-images.githubusercontent.com/53039583/159151242-30933216-66b9-49db-a6ce-a9f85f84bf53.png)
>
>   ### **Process**
>
>   1. Admin 페이지 접근 시, isLogin API에 `req` 을 보낸 후 `res` 을 받아 로그인 여부에 따라 페이지를 연결한다..(`a_name` 쿠키 확인)
>      - 로그인 상태일 경우 → admin 페이지로 연결
>      - 로그인 상태가 아닐 경우 → login 페이지로 연결
>   2. login 페이지에서 Login 버튼 클릭 시, POST req 을 api/login.js 에 보낸다. 그러면 `api/login.js` 에서 `a_name` 쿠키를 생성하여 `res`로 `login.js` 에 보낸다.
>   3. 생성한 쿠키를 받은 `login.js` 는 `admin.js` 로 보내주어 로그인 여부를 다시 확인한다.
>   4. Admin 페이지에서 로그아웃 버튼 클릭 시, `api/logout.js` 는 `req` 을 받은 후 쿠키를 삭제하고 res 를 Admin.js 로 전달한다.
>   5. Admin 페이지는 `api/logout.js` 로부터 받은 `res` 값으로 조건로직을 통해 홈 화면(’/’) 으로 이동시킨다.
>
>   ### API
>
>   - pages/api/**isLogin**.js → 로그인 여부를 확인하는 api
>   - pages/api/**login**.js → 로그인 하는 api
>   - pages/api/**logout**.js → 로그아웃 하는 api
>
>   ### pages
>
>   - pages/**admin**.js → 관리자 페이지
>   - pages/**login**.js → 로그인 페이지
>
>   ### 구현
>
>   1. 로그인 상태일 경우에만 접근 가능한 관리자 페이지(`admin.js`)을 생성한다.
>   2. 로그인 페이지(`login.js`) 을 생성한다.
>   3. 로그인 상태를 체크 후, 로그인이 안되어있으면 `router.push(’/login’)` 을 통해 로그인 페이지로 이동하도록 구현
>   4. 로그인 여부를 체크하는 `api/isLogin.js` 을 생성한다. (\*동적 api 라우트 만드는 방법)
>   5. admin.js 에서 `checkLogin()` 함수로 isLogin api를 호출하여, **로그인 여부에 따른 작업**을 처리한다.
>
>      ```jsx
>      import axios from 'axios';
>      import React, { useEffect, useState } from 'react';
>      import { useRouter } from 'next/router';
>      import { Button } from 'semantic-ui-react';
>
>      const Admin = () => {
>        const router = useRouter();
>        const checkLogin = () => {
>          axios.get('/api/isLogin').then((res) => {
>            if (res.status === 200 && res.data.name) {
>              // 로그인
>            } else {
>              // 로그인 안됨
>              router.push('/login'); // 로그인 페이지로 이동
>            }
>          });
>        };
>
>        useEffect(() => {
>          checkLogin();
>        });
>
>        return (
>          <>
>            <div>Admin Page 입니다</div>
>          </>
>        );
>      };
>
>      export default Admin;
>      ```
>
>   6. `api/login.js` 을 생성한다.
>
>      - method === ‘POST’ 일 경우에만 작동하도록 한다(보안)
>      - 쿠키를 생성하여, 처리한다.
>        ```jsx
>        export default (req, res) => {
>          if (req.method === 'POST') {
>            // POST 로만 동작함
>            /*
>              setHeader : 요청 헤더 생성
>                - args
>                  1."Set-Cookie" : 쿠키 생성
>                  2. "a_name=Mike;Max-Age=3600;HttpOnly,Secure" : 쿠키 내용 (쿠키명;쿠키 유지시간; ?? ; ??)
>            */
>            res.setHeader(
>              'Set-Cookie',
>              'a_name=Mike;Max-Age=3600;HttpOnly,Secure'
>            );
>            res.statusCode = 200;
>            res.json({ message: 'ok' });
>          }
>        };
>        ```
>
>   7. api/isLogin.js 을 아래와 같이 작성한다.
>
>      - [res.data](http://res.data) 의 name 값을 요청 헤더 쿠키의 a_name 값으로 정의하여 보내준다.
>
>      ```jsx
>      export default (req, res) => {
>        res.statusCode = 200;
>        res.json({ name: req.cookies.a_name });
>      };
>      ```
>
>   8. api/logout.js 을 아래와 같이 작성한다
>
>      - 쿠키 값의 `Max-Age` 을 **0** 으로 세팅할 경우, 쿠키가 즉시 소멸됨.
>
>      ```jsx
>      export default (req, res) => {
>        res.setHeader('Set-Cookie', 'a_name=Mike;Max-Age=0;HttpOnly,Secure'); // Max-Age = 0 이면, 쿠키 즉시 소멸
>        res.statusCode = 200;
>        res.json({ message: 'ok' });
>      };
>      ```
>
>   9. admin.js 에 로그아웃 버튼과 관련 로직을 추가한다.
>
>   ```jsx
>   import axios from 'axios';
>   import React, { useEffect, useState } from 'react';
>   import { useRouter } from 'next/router';
>   import { Button } from 'semantic-ui-react';
>
>   const Admin = () => {
>     const router = useRouter();
>   +  const [isLogin, setIsLogin] = useState(false);
>     const checkLogin = () => {
>       axios.get('/api/isLogin').then((res) => {
>         if (res.status === 200 && res.data.name) {
>           // 로그인
>   +        setIsLogin(true);
>         } else {
>           // 로그인 안됨
>           router.push('/login'); // 로그인 페이지로 이동
>         }
>       });
>     };
>
>   +  const logout = () => {
>   +    axios.get('/api/logout').then((res) => {
>   +      if (res.status === 200) {
>   +        router.push('/');
>   +     }
>   +   });
>   +  };
>
>     useEffect(() => {
>       checkLogin();
>     });
>
>     return (
>       <>
>         <div>Admin Page 입니다</div>
>   +     {isLogin && <Button onClick={logout}>Logout</Button>}
>       </>
>     );
>   };
>
>   export default Admin;
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

> ### **TypeError: Cannot read properties of undefined (reading 'protocol')**
>
> - 증상
>
>   - .env.development 환경변수 작성 후 변수 `API_URL` 을 `process.env.NEXT_PUBLIC_API_URL` 변수로 바꾼 후 발생
>
>     ![image](https://user-images.githubusercontent.com/53039583/159114064-27af9470-dbbf-4497-9c9a-dd76899e0a02.png)
>
> - 원인
>   - 환경변수 적용 시, 서버를 재시작해주어야 한다.
> - 솔루션
>   - 개발 서버를 다시 시작했더니 해결되었다.

> ### **TypeError: The "url" argument must be of type string. Received undefined**
>
> - 증상
>   ![image](https://user-images.githubusercontent.com/53039583/159114069-c9e26528-6c12-44d0-a3a9-f6ae9070c1f6.png)
> - 원인
>   - `axios.get(URL)` 에서 URL 인자 값이 **undefined** 일 때, 발생한다.
> - 솔루션
>
>   - next.config.js 에 `env: { BASE_URL: process.env.BASE_URL}` 옵션을 삽입하고 개발서버를 재시작 하였더니 해결되었다.
>
>   ```jsx
>   // next.config.js
>
>   /** @type {import('next').NextConfig} */
>   const nextConfig = {
>     reactStrictMode: true,
>   +  env: {
>   +    BASE_URL: process.env.BASE_URL
>   +  }
>   };
>
>   module.exports = nextConfig;
>   ```

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

import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import ItemList from './../src/components/ItemList';
import { Divider, Header, Loader } from 'semantic-ui-react';

export default function Home({ list }) {
  /* [주석한 이유]
    // 1. 정적 생성으로 인해 페이지가 바로 표시될 것이기 때문에, 로딩화면이 필요없음
    // 2. api의 res 값, 즉 상품들의 list 데이터를 서버 측에서 요청하여 바로 prop 으로 받아올 것이기 때문에 list state가 필요없음

    // const [list, setList] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    // const API_URL = process.env.NEXT_PUBLIC_API_URL;

    // console.log(API_URL);
    // const getData = () => {
    //   setIsLoading(true);
    //   axios.get(API_URL).then((res) => {
    //     console.log(res);
    //     setList(res.data);
    //     setIsLoading(false);
    //   });
    // };

    // useEffect(() => {
    //   getData();
    // }, []);
  */
  return (
    <div>
      <Head>
        <title>HOME | 화장품</title>
        <meta name="description" content="화장품 상품 페이지입니다" />
      </Head>
      {/* {isLoading ? (
        <Loader content="Loading" active></Loader>
      ) : ( */}
      <>
        <Header as="h3" style={{ paddingTop: 40 }}>
          베스트 상품
        </Header>
        <Divider />
        <ItemList list={list.slice(0, 9)} />
        <Header as="h3" style={{ paddingTop: 40 }}>
          신상품
        </Header>
        <Divider />
        <ItemList list={list.slice(9)} />
      </>
      {/* )} */}
    </div>
  );
}

/** getStaticProps() 은 정적 생성 함수
/* @param {object} context
*  @returns {object} props: { list, name }
*/
export const getStaticProps = async () => {
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name
    }
  };
};

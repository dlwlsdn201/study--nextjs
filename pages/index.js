import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import ItemList from './../src/components/ItemList';
import { Divider, Header, Loader } from 'semantic-ui-react';

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL =
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  const getData = () => {
    setIsLoading(true);
    axios.get(API_URL).then((res) => {
      console.log(res);
      setList(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>HOME | 화장품</title>
        <meta name="description" content="화장품 상품 페이지입니다" />
      </Head>
      {isLoading ? (
        <Loader content="Loading" active></Loader>
      ) : (
        <>
          <Header as="h3" style={{ paddingTop: 40 }}>
            베스트 상품
          </Header>
          <Divider />
          <ItemList list={list} />
        </>
      )}
    </div>
  );
}

import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import ItemList from './../src/components/ItemList';
import { Divider, Header } from 'semantic-ui-react';

export default function Home() {
  const [list, setList] = useState([]);

  const API_URL =
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  const getData = () => {
    axios.get(API_URL).then((res) => {
      console.log(res);
      setList(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>HOME | 화장품</title>
      </Head>
      <Header as="h3" style={{ paddingTop: 40 }}>
        베스트 상품
      </Header>
      <Divider />
      <ItemList list={list} />
    </div>
  );
}

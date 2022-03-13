import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import ItemList from './ItemList';

export default function Home() {
  const [list, setList] = useState([]);
  const API_URL =
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  function getData() {
    axios.get(API_URL).then((res) => {
      setList(res.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Head>Home</Head>
      <ItemList list={list}></ItemList>
    </div>
  );
}

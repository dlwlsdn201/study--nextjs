import axios from 'axios';
// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
import Item from './../../src/components/Item';
// import { Loader } from 'semantic-ui-react';
import Head from 'next/head';

const Post = ({ item, name }) => {
  // const router = useRouter();
  // const { id } = router.query;
  // const [item, setItem] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  // const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  // const getData = () => {
  //   axios.get(API_URL).then((res) => {
  //     console.log(res.data);
  //     setItem(res.data);
  //     setIsLoading(false);
  //   });
  // };

  // useEffect(() => {
  //   if (id && id > 0) {
  //     getData();
  //   }
  // }, []);

  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description} />
          </Head>
          {name} 환경 입니다.
          <Item data={item} />;
        </>
      )}
    </>
  );
};

/**
 * getServerSideProps() 의 환경은 브라우저가 아닌 서버이다. 따라서, window 같은거 사용하면 오류 발생.
 * @param {object} context
 * @returns
 */
export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name
    }
  };
};

export default Post;

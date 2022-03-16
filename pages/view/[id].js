import axios from 'axios';
// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
import Item from './../../src/components/Item';
// import { Loader } from 'semantic-ui-react';
import Head from 'next/head';

const Post = ({ item }) => {
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
          <Item data={item} />;
        </>
      )}
    </>
  );
};

export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data
    }
  };
};

export default Post;

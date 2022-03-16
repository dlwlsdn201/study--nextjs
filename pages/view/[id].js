import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Item from './../../src/components/Item';
import { Loader } from 'semantic-ui-react';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  const getData = () => {
    axios.get(API_URL).then((res) => {
      console.log(res.data);
      setItem(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    if (id && id > 0) {
      getData();
    }
  }, []);

  return isLoading ? <Loader content="Loading" active /> : <Item data={item} />;
};
};

export default Post;

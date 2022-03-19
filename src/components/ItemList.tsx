import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import styles from '../../styles/ItemList.module.css';
import Link from 'next/link';
interface product {
  image_link: string;
  name: string;
  price: string;
  id: number;
  product_link: string;
  brand: string;
}

const ItemList = ({ list }) => {
  return (
    <Grid columns={3} divided>
      <Grid.Row>
        {list.map((item: product, index: number) => (
          <Grid.Column key={index}>
            <Link href="/detail/[id]" as={`/detail/${item.id}`}>
              <a>
                <Image
                  alt={item.name}
                  src={item.image_link}
                  className={styles.img_item}
                />
              </a>
            </Link>
            <strong>{item.name}</strong>
            <strong>{item.price}</strong>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
};

export default ItemList;

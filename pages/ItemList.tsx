import React from 'react';
import { Grid } from 'semantic-ui-react';
import Image from 'next/image';

interface product {
  image_link: string;
  brand: string;
  id: number;
  description: string;
  product_link: string;
  name: string;
}

const ItemList = ({ list }) => {
  return (
    <Grid reversed="computer vertically">
      {list.map((item: product) => (
        <Grid.Row key={item.id}>
          <Grid.Column>
            <a href={item.product_link} target="_blank" rel="noreferrer">
              <Image
                src={item.image_link}
                alt="product"
                width={200}
                height={120}
              />
            </a>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </Grid.Column>
        </Grid.Row>
      ))}
    </Grid>
  );
};

export default ItemList;

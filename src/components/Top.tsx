import React from 'react';
import { Header } from 'semantic-ui-react';
import Image from 'next/image';
import Gnb from './Gnb';
const Top = () => {
  return (
    <div>
      <Image src="/images/google.png" alt="logo" width={300} height={150} />
      <Header as="h1">로고, 텍스트</Header>
      <Gnb />
    </div>
  );
};

export default Top;

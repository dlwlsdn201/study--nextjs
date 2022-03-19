import React from 'react';
import { Icon } from 'semantic-ui-react';

const Error404 = () => {
  return (
    <div style={{ padding: '200px 0', textAlign: 'center', fontSize: 30 }}>
      <Icon name="warning circle" color="red" />
      404 : 페이지를 찾을 수 없습니다
    </div>
  );
};

export default Error404;

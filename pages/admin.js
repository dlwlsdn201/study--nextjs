import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'semantic-ui-react';

const Admin = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const checkLogin = () => {
    axios.get('/api/isLogin').then((res) => {
      if (res.status === 200 && res.data.name) {
        // 로그인
        setIsLogin(true);
      } else {
        // 로그인 안됨
        router.push('/login'); // 로그인 페이지로 이동
      }
    });
  };

  const logout = () => {
    axios.get('/api/logout').then((res) => {
      if (res.status === 200) {
        router.push('/');
      }
    });
  };

  useEffect(() => {
    checkLogin();
  });

  return (
    <>
      <div>Admin Page 입니다</div>
      {isLogin && <Button onClick={logout}>Logout</Button>}
    </>
  );
};

export default Admin;

import { useRouter } from 'next/router';
import React from 'react';
import { Menu } from 'semantic-ui-react';

const Gnb = () => {
  const router = useRouter();
  let activeItem;

  if (router.pathname === '/') {
    activeItem = 'Home';
  } else if (router.pathname === '/about') {
    activeItem = 'about';
  } else if (router.pathname === '/admin') {
    activeItem = 'admin';
  }

  const goLink = (e, data) => {
    if (data.name === 'home') {
      router.push('/');
    } else if (data.name === 'about') {
      router.push('/about');
    } else if (data.name === 'admin') {
      router.push('/admin');
    }
  };

  return (
    <Menu inverted>
      <Menu.Item name="home" active={activeItem === 'home'} onClick={goLink} />
      <Menu.Item
        name="about"
        active={activeItem === 'about'}
        onClick={goLink}
      />
      <Menu.Item
        name="admin"
        active={activeItem === 'admin'}
        onClick={goLink}
      />
    </Menu>
  );
};

export default Gnb;

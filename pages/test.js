import Link from 'next/link';
import React from 'react';

const Test = () => {
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link href="/">
      <div>
        <a>Back To the Home</a>
      </div>
    </Link>
  );
};

export default Test;

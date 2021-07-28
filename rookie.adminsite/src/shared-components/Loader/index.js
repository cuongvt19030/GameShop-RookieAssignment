import React, { useEffect } from 'react';
import NProgress from 'nprogress';

const Loader = () => {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  });

  return <></>;
};

export default Loader;
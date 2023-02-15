import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/BasicTable'),
  {
    ssr: false,
  }
);

export default () => <DynamicComponentWithNoSSR />;

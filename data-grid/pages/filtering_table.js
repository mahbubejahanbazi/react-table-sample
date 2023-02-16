import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/FilteringTable'),
  {
    ssr: false,
  }
);

export default () => <DynamicComponentWithNoSSR />;

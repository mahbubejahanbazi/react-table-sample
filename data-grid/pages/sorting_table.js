import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/SortingTable'),
  {
    ssr: false,
  }
);

export default () => <DynamicComponentWithNoSSR />;
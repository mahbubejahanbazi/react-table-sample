import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/RowSelection'),
  {
    ssr: false,
  }
);

export default () => <DynamicComponentWithNoSSR />;

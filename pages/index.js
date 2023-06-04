import { HomePage } from '@/app/components/home/home-page';

export const getServerSideProps = async () => {
  const { events_categories } = await import('/data/data.json');
  return {
    props: {
      data: events_categories,
    },
  };
}

export default function Home({ data }) {
  return (
      <HomePage data={data}></HomePage>
  )
}


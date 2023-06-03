import { HomePage } from '@/app/components/home/home-page';
import { getLayout } from '@/app/components/getLayout';

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
    <div>
    <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
      <HomePage data={data}></HomePage>

    </div>
  )
}

Home.getLayout = getLayout;

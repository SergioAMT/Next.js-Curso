import { HomePage } from '@/app/components/home/home-page';
import Image from 'next/image';
import Link from 'next/link';

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
      <header>
        <nav>
          <Link href='/' legacyBehavior><a >Home</a></Link>
          <Link href='/events' legacyBehavior><a >Events</a></Link>
          <Link href='/about-us' legacyBehavior><a >About Us</a></Link>
        </nav>
      </header>

     <HomePage data={data}></HomePage>


    </div>
  )
}


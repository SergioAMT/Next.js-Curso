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
          <img />
          <a href='/'>Home</a>
          <a href='/events'>Events</a>
          <a href='/about-us'>About Us</a>
        </nav>
      </header>

      {data.map(ev => 
      <Link key={ev.id} href={`/events/${ev.id}`} legacyBehavior>
      <a> <Image width={300} height={300} src=
        {ev.image} /> <h2>{ev.title}</h2> <p>{ev.description}</p></a>
        </Link>)}


    </div>
  )
}


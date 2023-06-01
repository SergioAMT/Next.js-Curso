import Image from 'next/image';

export const getServerSideProps = async () => {
  const { events_categories } = await import('/data/data.json');
  return {
    props: {
      data: events_categories,
    },
  };
}

export default function Home({ data }) {
  console.log(data)
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

      {data.map(ev => <a key={ev.id} href={`/events/${ev.id}`}> <Image width={200} height={100} src=
        {ev.image} /> <h2>{ev.title}</h2> <p>{ev.description}</p></a>)}


    </div>
  )
}


import { HeaderComponent } from '@/app/components/header/header';
import Image from 'next/image';
import Link from 'next/link';

const EventsPage = ({ data }) => {
    return (
        <div>
            <h1> Event Page </h1>
            <div>
                {data.map(ev =>
                    <Link key={ev.id} href={`/events/${ev.id}`} legacyBehavior>
                        <a>
                            <Image width={300} height={300} alt={ev.title} src={ev.image} />
                            <h2>{ev.title}</h2>
                        </a>
                    </Link>)}
            </div>
        </div>
    )
}

export default EventsPage;

export const getStaticProps = async () => {
    const { events_categories } = await import('data/data.json')

    return {
        props: {
            data: events_categories
        }
    }
}



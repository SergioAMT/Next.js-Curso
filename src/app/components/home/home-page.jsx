import Image from 'next/image';
import Link from 'next/link';

export const HomePage = ({ data }) => {
    return (
        <main>
            {
                data.map(ev =>
                    <Link key={ev.id} href={`/events/${ev.id}`} legacyBehavior>
                        <a> <Image width={300} height={300} src=
                            {ev.image} /> <h2>{ev.title}</h2> <p>{ev.description}</p></a>
                    </Link>)
            }
        </main>
    )
}
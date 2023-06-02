import Image from 'next/image';
import Link from 'next/link';

export const HomePage = ({ data }) => (
        <main>
            {
                data.map(ev =>
                    <Link key={ev.id} href={`/events/${ev.id}`} legacyBehavior>
                        <a className='bg-slate-100'> <Image alt={ev.title} width={300} height={300} src=
                            {ev.image} /> <h2 className="text-3xl font-bold underline">{ev.title}</h2> <p className='text-lg font-medium'>{ev.description}</p></a>
                    </Link>)
            }
        </main>
    )
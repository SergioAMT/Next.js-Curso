import Image from 'next/image';
import Link from 'next/link';

export const HomePage = ({ data }) => (
        <div className='homeBody'>
            {data.map(ev =>
                    <Link key={ev.id} href={`/events/${ev.id}`} legacyBehavior>
                        <a className='card'>
                        <div className='image'>
                        <Image alt={ev.title} width={450} height={400} src=
                            {ev.image} /> 
                        </div> 
                            <div className='content'>
                            <h2>{ev.title}</h2> 
                            <p>{ev.description}</p>
                            </div>
                            </a>
                    </Link>)
            }
        </div>
    )
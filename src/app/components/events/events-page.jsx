import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const EventsPages = ({data}) => {
    return (
        <div className='event-page'>
            {data.map(ev =>
                <Link key={ev.id} href={`/events/${ev.id}`} legacyBehavior>
                    <a className='card'>
                        <Image width={500} height={500} alt={ev.title} src={ev.image} />
                        <h2>{ev.title}</h2>
                    </a>
                </Link>)}
    </div>
    )
}

export default EventsPages;


import Link from 'next/link';
import Image from 'next/image';
import { HeaderComponent } from '@/app/components/header/header';

const SingleEvent = ({ data }) => {
    return (
        <div>
            <Image src={data.image} width={1000} height={400} alt={data.title} />
            <h1> {data.title} </h1>
            <p> {data.description} </p>
        </div>

        )
}

export default SingleEvent;

export const getStaticPaths = async () => {
    const { allEvents } = await import('/data/data.json');

    const allPaths = allEvents.map((path) => {
        return {
            params: {
                cat: path.city,
                id: path.id
            }
        }
    })
    return {
        paths: allPaths,
        fallback: false,
    }

}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const { allEvents } = await import('data/data.json')

    const eventData = allEvents.find(ev => id === ev.id);

    return {
        props: { data: eventData }
    }

}
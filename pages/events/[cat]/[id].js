import SingleEventPage from '@/app/components/events/single-event';


const SingleEvent = ({ data }) => {
    return (
<SingleEventPage data={data}></SingleEventPage>
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
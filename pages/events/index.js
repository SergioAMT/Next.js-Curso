import EventsPages from '@/app/components/events/events-page';


const EventsPage = ({ data }) => {
    return (
        <EventsPages data={data} />
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



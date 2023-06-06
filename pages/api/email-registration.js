import path from 'path';
import fs from 'fs';

const buildPath = () => {
    return path.join(process.cwd(), 'data', 'data.json') //buscamos el archivo
}

const extractData = (filePath) => {
    const jsonData = fs.readFileSync(filePath);
    const data = JSON.parse(jsonData)
    return data;
}


export default function handler(req, res) {
    const { method } = req;

    //Acces our data
    // extract our data
    //res 404 if there are no AllEvents
    //allevents / loop through them and indentify the eventId
    // add email into emailsregistered
    //only if that email doesnt exist
    //check the fomrat of the email is OK

    const filePath = buildPath();
    const { events_categories, allEvents } = extractData(filePath);

    if(!allEvents){
        return res.status(404).json({
            status: 404,
            message: 'Events data not found'
        })
    }


    if (method === 'POST') {
        const { email, eventId } = req.body

    const newAllEvents = allEvents.map(ev => {
        if(ev.id === eventId){
            if(ev.emails_registered.includes(email)){
                res.status(201).json({message: 'This email has already been registered'})
            }
            return {
                ...ev, emails_registered:[...ev.emails_registered, email]
            }
        }
        return ev;
    });

    fs.writeFileSync(filePath, JSON.stringify({events_categories, allEvents: newAllEvents}))


        res.status(200).json({ message: `You has been registered succesfolly with the email: ${email} ${eventId}` })
    }
}
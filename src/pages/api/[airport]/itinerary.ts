import query from '@/services/gemeni';
import { NextApiRequest, NextApiResponse } from 'next'

type ItineraryResponse = {
    text: string,
    airport?: string
}

const toJSON = (csv: string) => JSON.parse(csv.replace(/```/g, '')
    .replace(/\n/g, '')
    .replace(/\"/g, '"'))

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    query(`20 cities near\ to ${req.query.airport} airport with short description in json format`)
        // query("itinerary for bali in json string")  
        .then(resp => res.status(200).json(toJSON(resp)))
        .catch(err => res.status(err.status));
}
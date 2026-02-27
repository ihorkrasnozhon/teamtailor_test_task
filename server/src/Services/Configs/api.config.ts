import {CreateAxiosDefaults} from "axios";
import 'dotenv/config';


export const config:CreateAxiosDefaults = {
    baseURL: 'https://api.teamtailor.com/v1',
    headers: {
        Authorization: `Token token=${process.env.TEAMTAILOR_API_KEY}`,
        'X-Api-Version': '20240904',
        'Content-Type': 'application/vnd.api+json'
    }
};

import { Reservation } from "@/type/reservation";

const NOTION_API_URL = '/api/notion';
const ALADIN_API_URL = '/api/aladin';

export const notionApiClient = async (method: string, data?: Reservation) => {
    const options: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    const response = await fetch(NOTION_API_URL, options);
    return response.json();
};



export const aladinApiClient = async (method: string, data: {query: string}) => {
    
    const options: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },        
    };

    const response = await fetch(ALADIN_API_URL + `?query=${data.query}`, options);
    return response.json();
};
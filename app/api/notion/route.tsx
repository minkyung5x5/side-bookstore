'use server'

import { NextApiRequest, NextApiResponse } from 'next';

const NOTION_API_URL = 'https://api.notion.com/v1';
const NOTION_SECRET_TOKEN = process.env.NOTION_SECRET_TOKEN;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;
const NOTION_API_VERSION = '2022-06-28'
const HEADERS = {
    'Authorization': `Bearer ${NOTION_SECRET_TOKEN}`,
    'Content-Type': 'application/json',
    'Notion-Version': NOTION_API_VERSION,
};

export async function POST(request: Request) {
    try {
        const req = await request.json();
        console.log(req)
        const response = await fetch(`${NOTION_API_URL}/pages`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({
                parent: { database_id: NOTION_DATABASE_ID },
                properties: {
                    name: {
                        title: [{ text: { content: req.name } }],
                    },
                    phone: {
                        rich_text: [{ text: { content: req.phone } }],
                    },
                    date: {
                        date: { start: req.date }
                    },
                    time: {
                        rich_text: [{ text: { content: req.time } }],
                    },
                    ...(req.etc
                        ? {
                            etc: {
                                rich_text: [{ text: { content: req.etc } }],
                            },
                        }
                        : {}),
                },
            }),
        });

        if (!response.ok) {
            throw new Error(`Failed to write data to Notion API: ${response.statusText}`);
        }

        const data = await response.json();
        return Response.json({ data })

    } catch (error) {
        console.error('Error:', error);
        return new Response(`Internal Server Error: ${error}`, {
            status: 500,
        })
    }
}


export async function GET(request: Request) {
    try {
        const response = await fetch(`${NOTION_API_URL}/databases/${NOTION_DATABASE_ID}/pages`, {
            method: 'GET',
            headers: HEADERS,
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch data from Notion API: ${response.statusText}`);
        }

        const data = await response.json();
        return new Response(JSON.stringify(data), { status: 200, headers: HEADERS });
    } catch (error) {
        console.error('Error:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: HEADERS,
        });
    }
}
'use server'

import { NextApiRequest, NextApiResponse } from 'next';

const NOTION_API_URL = 'https://api.notion.com/v1';
const NOTION_SECRET_TOKEN = process.env.NOTION_SECRET_TOKEN;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;
const NOTION_API_VERSION = '2022-06-28'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // 쓰기 작업 수행
        try {
            const { title, content } = req.body;

            const response = await fetch(`${NOTION_API_URL}/pages`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${NOTION_SECRET_TOKEN}`,
                    'Content-Type': 'application/json',
                    'Notion-Version': NOTION_API_VERSION,
                },
                body: JSON.stringify({
                    parent: { database_id: NOTION_DATABASE_ID },
                    properties: {
                        title: {
                            title: [{ text: { content: title } }],
                        },
                        content: {
                            rich_text: [{ text: { content: content } }],
                        },
                    },
                }),
            });

            if (!response.ok) {
                throw new Error(`Failed to write data to Notion API: ${response.statusText}`);
            }

            const data = await response.json();
            res.status(200).json(data);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else if (req.method === 'GET') {
        // 가져오기 작업 수행
        try {
            const response = await fetch(`${NOTION_API_URL}/databases/${NOTION_DATABASE_ID}/pages`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${NOTION_SECRET_TOKEN}`,
                    'Content-Type': 'application/json',
                    'Notion-Version': NOTION_API_VERSION,
                },
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch data from Notion API: ${response.statusText}`);
            }

            const data = await response.json();
            res.status(200).json(data);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}

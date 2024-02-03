'use server'

const ALADIN_API_URL = 'https://www.aladin.co.kr/ttb/api/ItemSearch.aspx';
const ALADIN_TTBKEY = process.env.ALADIN_TTBKEY;

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const query = searchParams.get("query") || '';

        const params = new URLSearchParams({
            ttbkey: ALADIN_TTBKEY || '',
            Query: query,
            QueryType: 'Title',
            MaxResults: '10',
            start: '1',
            SearchTarget: 'Book',
            output: 'js',
            Version: '20131101',
        });

        const url = `${ALADIN_API_URL}?${params.toString()}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch data from Aladin API: ${response.statusText}`);
        }

        const data = await response.json();
        return new Response(JSON.stringify(data), { status: 200 });

    } catch (error) {
        console.error('Error:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}
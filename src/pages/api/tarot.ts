import type { APIRoute } from 'astro';
import { deck } from '../../data/tarot';

export const GET: APIRoute = async () => {
    return new Response(JSON.stringify(deck), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*' 
        }
    });
};
import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    const data = await request.json();
    const { nombre, servicio, texto } = data;

    const token = import.meta.env.TELEGRAM_TOKEN;
    const chatId = import.meta.env.TELEGRAM_CHAT_ID;

    const mensaje = `
⭐ NUEVA RESEÑA ⭐

👤 Nombre: ${nombre}
✨ Servicio: ${servicio}

📝 "${texto}"
    `;

    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: chatId,
            text: mensaje,
        }),
    });

    if (response.ok) {
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
        return new Response(JSON.stringify({ success: false }), { status: 500 });
    }
};
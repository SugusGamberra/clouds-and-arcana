import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
    const token = import.meta.env.TELEGRAM_TOKEN;
    const chatId = import.meta.env.TELEGRAM_CHAT_ID;
    const mensaje = "El portal de Clouds & Arcana está conectado y protegido.";

    const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;

    // peticion a la API de telegram
    const response = await fetch(telegramUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        chat_id: chatId,
        text: mensaje,
        }),
    });

    if (response.ok) {
        return new Response(JSON.stringify({ success: true, message: "¡Mensaje enviado!" }), { status: 200 });
    } else {
        return new Response(JSON.stringify({ success: false, message: "Hubo un bloqueo energético" }), { status: 500 });
    }
};
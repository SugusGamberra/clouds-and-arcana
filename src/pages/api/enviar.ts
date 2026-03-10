import type { APIRoute } from 'astro';
import { serviciosTarot } from '../../data/servicios';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    // recibir datos
    const data = await request.json();
    const { nombre, email, servicio, mensaje, pagoID } = data;
    const token = import.meta.env.TELEGRAM_TOKEN;
    const chatId = import.meta.env.TELEGRAM_CHAT_ID;

    const servicioReal = serviciosTarot.find(s => s.nombre === servicio);
    const precioEsperado = servicioReal ? servicioReal.precio : 'Desconocido';

    // mensaje pa telegram
    const textoTelegram = `
        🔮 NUEVA RESERVA 🔮

        👤 Nombre: ${nombre}
        💌 Email: ${email}
        ✨ Servicio: ${servicio}
        💰 Precio esperado: ${precioEsperado}
        💳 ID PayPal: ${pagoID}

        📝 Mensaje: ${mensaje}
    `;

    // enviar a BotFather
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: chatId,
            text: textoTelegram,
        }),
    });

    if (response.ok) {
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
        return new Response(JSON.stringify({ success: false }), { status: 500 });
    }
};
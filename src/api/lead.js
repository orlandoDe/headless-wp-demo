export default async (req, res) => {
    if (req.method !== "POST") return res.status(405).end();
    try {
        const r = await fetch(process.env.N8N_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ source: "landing_whatsapp_ia", ...req.body }),
        });
        res.status(200).send(await r.text());
    } catch (e) {
        res.status(500).json({ error: "proxy_failed" });
    }
};

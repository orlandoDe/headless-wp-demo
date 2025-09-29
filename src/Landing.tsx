import { useEffect, useState } from "react";
import { WPPost } from "./types";

const API_URL =
    "https://head-less-wp.linuseast1wp.hustly.live/wp-json/wp/v2/posts?acf_format=standard";

export default function App() {
    const [posts, setPosts] = useState<WPPost[]>([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data: WPPost[]) => {
                setPosts(data);
                setLoading(false);
            });
    }, []);

    return (
        <main className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-700 text-slate-50">
            {/* Hero */}
            <section className="flex flex-col items-center justify-center text-center py-24 px-6">
                <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
                    Headless WordPress + React + Vercel
                </h1>
                <p className="text-lg text-slate-200 max-w-2xl mx-auto">
                    WordPress solo como CMS con ACF, consumiendo la API REST y mostrando
                    el frontend en React + Vite + Tailwind, desplegado en Vercel.
                </p>
            </section>

            {/* Stack dinámico desde JSON */}
            <section className="max-w-6xl mx-auto px-6 mb-20">
                <h2 className="text-3xl font-semibold mb-12 text-center">
                    📡 Datos en vivo desde WordPress 🚀 
                </h2>
                {loading ? (
                    <p className="text-center text-slate-200">🔄 Cargando stack...</p>
                ) : (
                    posts.map((post) => {
                        const acf = post.acf || {};
                        const stackItems = [
                            { name: "WordPress", desc: acf.wordpress },
                            { name: "ACF", desc: acf.acf },
                            { name: "REST API", desc: acf.rest_api },
                            { name: "React + Vite", desc: acf["react_+_vite"] },
                            { name: "Tailwind CSS", desc: acf.tailwind_css },
                            { name: "Vercel", desc: acf.vercel },
                        ];

                        return (
                            <div
                                key={post.id}
                                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center"
                            >
                                {stackItems.map(
                                    (item) =>
                                        item.desc && (
                                            <div
                                                key={item.name}
                                                className="rounded-2xl bg-black/30 backdrop-blur-lg shadow-2xl p-6 border border-white/20 hover:scale-[1.02] transition w-80"
                                            >
                                                <h3 className="text-xl font-semibold mb-2 text-indigo-200">
                                                    {item.name}
                                                </h3>
                                                <p className="text-slate-100">{item.desc}</p>
                                            </div>
                                        )
                                )}
                            </div>
                        );
                    })
                )}
            </section>

            {/* Datos del post */}
            <section className="max-w-6xl mx-auto px-6 mb-20">
                <h2 className="text-3xl font-semibold mb-12 text-center">
                    Nuestro Stack Tecnológico
                </h2>
                {loading ? (
                    <p className="text-center text-slate-200">🔄 Cargando posts...</p>
                ) : (
                    <div className="grid gap-8 justify-items-center">
                        {posts.map((post) => (
                            <article
                                key={post.id}
                                className="w-[28rem] max-w-full mx-auto rounded-2xl bg-black/30 backdrop-blur-md shadow-2xl p-8 border border-white/20 hover:scale-[1.02] transition"
                            >
                                <h3 className="text-2xl font-bold mb-4 text-white drop-shadow">
                                    {post.title.rendered}
                                </h3>
                                <p className="text-slate-200 mb-2">
                                    <strong className="text-indigo-300">Stack:</strong>{" "}
                                    {post.acf?.tech_stack}
                                </p>
                                
                                {post.acf?.demo_url && (
                                    <a
                                        href={post.acf.demo_url}
                                        className="text-indigo-300 underline hover:text-indigo-100 font-medium"
                                    >
                                        Ver json del WP →
                                    </a>
                                )}
                            </article>
                        ))}
                    </div>
                )}
            </section>

            {/* Footer */}
            <footer className="text-center py-10 text-slate-300 text-sm">
                Hecho con ❤️ usando WordPress Headless, React y Vercel ·{" "}
                <a
                    href="https://github.com/orlandoDe/headless-wp-demo"
                    className="underline hover:text-white"
                >
                    Ver repo
                </a>
            </footer>
        </main>
    );
}

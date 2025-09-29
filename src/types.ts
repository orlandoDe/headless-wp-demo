export interface WPPost {
    id: number;
    title: {
        rendered: string;
    };
    acf: {
        tech_stack?: string;
        timeline?: string;
        demo_url?: string;
        cover_image?: number | string;
        wordpress?: string;
        acf?: string;
        rest_api?: string;
        ["react_+_vite"]?: string;
        tailwind_css?: string;
        vercel?: string;
    };
}

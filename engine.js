const featuredTools = [
    { name: "Sora Video", desc: "واقعية مذهلة في توليد الفيديو", img: "21" },
    { name: "Claude 3.5", desc: "أذكى مساعد برمجي وتحليلي", img: "22" },
    { name: "Midjourney v6", desc: "الفن التوليدي بأعلى دقة", img: "23" },
    { name: "GPT-5 Turbo", desc: "مستقبل الذكاء الاصطناعي", img: "24" }
];

const allTools = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    name: ["Jasper", "Leonardo", "Runway", "ElevenLabs", "Gamma"][i % 5] + " AI",
    category: ["Writing", "Image", "Video", "Coding", "Image"][i % 5],
    price: i % 3 === 0 ? "free" : "paid",
    color: `hsl(${i * 40}, 60%, 50%)`
}));
